import { Resend } from "resend";
import { Donation } from "@/types";
import { formatCurrency, formatDate } from "./utils";
import { ORGANIZATION, ADDRESSES } from "./constants";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendReceiptEmailParams {
  donation: Donation;
  pdfBuffer: Buffer;
}

export async function sendReceiptEmail({
  donation,
  pdfBuffer,
}: SendReceiptEmailParams) {
  const { donor_name, donor_email, amount, currency, receipt_number } = donation;

  try {
    const { data, error } = await resend.emails.send({
      from: `${ORGANIZATION.name} <noreply@${process.env.NEXT_PUBLIC_SITE_URL?.replace("https://", "").replace("http://", "") || "winnerswidows.org"}>`,
      to: donor_email,
      subject: `Your Donation Receipt - ${receipt_number}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1A1918; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { text-align: center; margin-bottom: 30px; }
              .logo { width: 60px; height: 60px; background: #722F37; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: #D4AF37; font-size: 24px; font-weight: bold; }
              .title { color: #722F37; font-size: 24px; font-weight: bold; margin-bottom: 5px; }
              .subtitle { color: #5C5955; font-size: 14px; }
              .content { background: #FAF9F6; border-radius: 12px; padding: 30px; margin-bottom: 30px; }
              .greeting { font-size: 18px; margin-bottom: 20px; }
              .amount { font-size: 36px; font-weight: bold; color: #722F37; margin: 20px 0; }
              .details { margin: 20px 0; }
              .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #E8E6E1; }
              .detail-label { color: #5C5955; }
              .notice { background: #FEF3C7; border: 1px solid #F59E0B; border-radius: 8px; padding: 15px; margin: 20px 0; font-size: 13px; color: #92400E; }
              .footer { text-align: center; color: #A8A49C; font-size: 12px; margin-top: 30px; }
              .button { display: inline-block; background: #722F37; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 500; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div style="width: 60px; height: 60px; background: #722F37; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: #D4AF37; font-size: 24px; font-weight: bold;">W</span>
                </div>
                <div class="title">${ORGANIZATION.name}</div>
                <div class="subtitle">Empowering Lives, Restoring Hope</div>
              </div>

              <div class="content">
                <div class="greeting">Dear ${donor_name},</div>

                <p>Thank you for your generous donation to ${ORGANIZATION.name}. Your support makes a real difference in the lives of widows and widowers in Kenya.</p>

                <div class="amount">${formatCurrency(amount, currency)}</div>

                <div class="details">
                  <div class="detail-row">
                    <span class="detail-label">Receipt Number</span>
                    <span>${receipt_number}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Date</span>
                    <span>${formatDate(donation.donation_date)}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Designation</span>
                    <span>${donation.designation}</span>
                  </div>
                </div>

                <div class="notice">
                  <strong>Important Notice:</strong><br>
                  Our 501(c)(3) tax-exempt status is currently pending. This receipt is provided for your personal records and may not currently qualify for tax deductions.
                </div>

                <p>Your official receipt is attached to this email as a PDF document.</p>

                <p>With gratitude,<br>
                <strong>Mary Kipchilis</strong><br>
                Founder & President</p>
              </div>

              <div class="footer">
                <p>${ORGANIZATION.name}</p>
                <p>${ADDRESSES.us.full}</p>
                <p><a href="https://winnerswidows.org">winnerswidows.org</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: `Receipt-${receipt_number}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    return { success: true, id: data?.id };
  } catch (error) {
    console.error("Failed to send receipt email:", error);
    throw error;
  }
}

interface SendContactNotificationParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactNotification({
  name,
  email,
  subject,
  message,
}: SendContactNotificationParams) {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn("ADMIN_EMAIL not set, skipping notification");
    return;
  }

  try {
    await resend.emails.send({
      from: `${ORGANIZATION.name} <noreply@winnerswidows.org>`,
      to: adminEmail,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact notification:", error);
  }
}

interface SendDonationNotificationParams {
  donor_name: string;
  donor_email: string;
  amount: number;
  currency: string;
  payment_method: string;
  designation: string;
}

export async function sendDonationNotification({
  donor_name,
  donor_email,
  amount,
  currency,
  payment_method,
  designation,
}: SendDonationNotificationParams) {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn("ADMIN_EMAIL not set, skipping notification");
    return;
  }

  try {
    await resend.emails.send({
      from: `${ORGANIZATION.name} <noreply@winnerswidows.org>`,
      to: adminEmail,
      subject: `New Donation Submission: ${formatCurrency(amount, currency)}`,
      html: `
        <h2>New Donation Submission</h2>
        <p>A new donation confirmation has been submitted and needs verification.</p>
        <p><strong>Donor:</strong> ${donor_name} (${donor_email})</p>
        <p><strong>Amount:</strong> ${formatCurrency(amount, currency)}</p>
        <p><strong>Method:</strong> ${payment_method}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/donations">View in Admin Dashboard</a></p>
      `,
    });
  } catch (error) {
    console.error("Failed to send donation notification:", error);
  }
}
