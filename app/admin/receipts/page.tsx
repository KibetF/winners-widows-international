"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileDown, Eye } from "lucide-react";
import { jsPDF } from "jspdf";
import { ORGANIZATION, ADDRESSES, DESIGNATIONS } from "@/lib/constants";

interface ReceiptData {
  receiptNumber: string;
  donorName: string;
  donorEmail: string;
  donorAddress: string;
  amount: string;
  currency: string;
  donationDate: string;
  paymentMethod: string;
  designation: string;
  notes: string;
}

export default function AdminReceiptsPage() {
  const [formData, setFormData] = useState<ReceiptData>({
    receiptNumber: "",
    donorName: "",
    donorEmail: "",
    donorAddress: "",
    amount: "",
    currency: "USD",
    donationDate: "",
    paymentMethod: "CashApp",
    designation: "General Fund (Where Most Needed)",
    notes: "",
  });

  // Generate receipt number and date on client side only
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      receiptNumber: `WWWI-${Date.now().toString().slice(-8)}`,
      donationDate: new Date().toISOString().split("T")[0],
    }));
  }, []);

  const [previewMode, setPreviewMode] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Colors
    const primaryColor: [number, number, number] = [89, 28, 52]; // Primary-900
    const secondaryColor: [number, number, number] = [212, 175, 55]; // Gold/Secondary
    const textColor: [number, number, number] = [51, 51, 51];

    // Header background
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, pageWidth, 50, "F");

    // Organization name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(ORGANIZATION.name, pageWidth / 2, 20, { align: "center" });

    // Tagline
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...secondaryColor);
    doc.text(ORGANIZATION.tagline, pageWidth / 2, 30, { align: "center" });

    // Address
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text(ADDRESSES.us.full, pageWidth / 2, 40, { align: "center" });

    // Receipt Title
    doc.setTextColor(...primaryColor);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("DONATION RECEIPT", pageWidth / 2, 70, { align: "center" });

    // Receipt Number and Date box
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.rect(15, 80, pageWidth - 30, 25, "S");

    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...textColor);
    doc.text("Receipt Number:", 25, 90);
    doc.text("Date:", pageWidth - 80, 90);

    doc.setFont("helvetica", "normal");
    doc.text(formData.receiptNumber, 70, 90);
    doc.text(formatDate(formData.donationDate), pageWidth - 55, 90);

    // Donor Information Section
    doc.setFillColor(245, 245, 245);
    doc.rect(15, 115, pageWidth - 30, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("DONOR INFORMATION", 20, 121);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...textColor);

    let yPos = 135;
    doc.setFont("helvetica", "bold");
    doc.text("Name:", 20, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(formData.donorName, 60, yPos);

    if (formData.donorEmail) {
      yPos += 10;
      doc.setFont("helvetica", "bold");
      doc.text("Email:", 20, yPos);
      doc.setFont("helvetica", "normal");
      doc.text(formData.donorEmail, 60, yPos);
    }

    if (formData.donorAddress) {
      yPos += 10;
      doc.setFont("helvetica", "bold");
      doc.text("Address:", 20, yPos);
      doc.setFont("helvetica", "normal");
      doc.text(formData.donorAddress, 60, yPos);
    }

    // Donation Details Section
    yPos += 20;
    doc.setFillColor(245, 245, 245);
    doc.rect(15, yPos, pageWidth - 30, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("DONATION DETAILS", 20, yPos + 6);

    yPos += 20;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...textColor);

    // Amount (highlighted)
    doc.setFillColor(...secondaryColor);
    doc.rect(15, yPos - 5, pageWidth - 30, 15, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("Amount Received:", 20, yPos + 5);
    doc.text(formatCurrency(formData.amount, formData.currency), pageWidth - 20, yPos + 5, { align: "right" });

    yPos += 25;
    doc.setFontSize(11);
    doc.setTextColor(...textColor);

    doc.setFont("helvetica", "bold");
    doc.text("Payment Method:", 20, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(formData.paymentMethod, 70, yPos);

    yPos += 10;
    doc.setFont("helvetica", "bold");
    doc.text("Designation:", 20, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(formData.designation, 70, yPos);

    if (formData.notes) {
      yPos += 10;
      doc.setFont("helvetica", "bold");
      doc.text("Notes:", 20, yPos);
      doc.setFont("helvetica", "normal");
      const splitNotes = doc.splitTextToSize(formData.notes, pageWidth - 80);
      doc.text(splitNotes, 50, yPos);
      yPos += splitNotes.length * 5;
    }

    // Tax Deductible Notice
    yPos += 20;
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.3);
    doc.rect(15, yPos, pageWidth - 30, 30, "S");

    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 100, 100);
    const taxNotice = "IMPORTANT: Winners Widows & Widowers International is currently awaiting 501(c)(3) tax-exempt status. This donation is NOT tax-deductible at this time. No goods or services were provided in exchange for this contribution. Please retain this receipt for your records. We will notify donors when tax-exempt status is approved.";
    const splitTaxNotice = doc.splitTextToSize(taxNotice, pageWidth - 40);
    doc.text(splitTaxNotice, 20, yPos + 8);

    // Footer
    const footerY = 270;
    doc.setDrawColor(...secondaryColor);
    doc.setLineWidth(1);
    doc.line(15, footerY, pageWidth - 15, footerY);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...primaryColor);
    doc.text("Thank you for your generous support!", pageWidth / 2, footerY + 10, { align: "center" });

    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(`${ORGANIZATION.website} | ${ORGANIZATION.email}`, pageWidth / 2, footerY + 18, { align: "center" });

    return doc;
  };

  const handlePreview = () => {
    if (!formData.donorName || !formData.amount) {
      alert("Please fill in donor name and amount");
      return;
    }
    const doc = generatePDF();
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  const handleDownload = () => {
    if (!formData.donorName || !formData.amount) {
      alert("Please fill in donor name and amount");
      return;
    }
    const doc = generatePDF();
    doc.save(`Receipt-${formData.receiptNumber}.pdf`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: string, currency: string) => {
    const num = parseFloat(amount) || 0;
    if (currency === "KES") {
      return `KES ${num.toLocaleString()}`;
    }
    return `$${num.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-neutral-900">
          Receipt Generator
        </h1>
        <p className="text-neutral-600">
          Generate donation receipts with organization branding
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Donation Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Receipt Number */}
            <div className="space-y-2">
              <Label htmlFor="receiptNumber">Receipt Number</Label>
              <Input
                id="receiptNumber"
                name="receiptNumber"
                value={formData.receiptNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Donor Name */}
            <div className="space-y-2">
              <Label htmlFor="donorName">Donor Name *</Label>
              <Input
                id="donorName"
                name="donorName"
                value={formData.donorName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Donor Email */}
            <div className="space-y-2">
              <Label htmlFor="donorEmail">Donor Email</Label>
              <Input
                id="donorEmail"
                name="donorEmail"
                type="email"
                value={formData.donorEmail}
                onChange={handleInputChange}
                placeholder="john@example.com"
              />
            </div>

            {/* Donor Address */}
            <div className="space-y-2">
              <Label htmlFor="donorAddress">Donor Address</Label>
              <Input
                id="donorAddress"
                name="donorAddress"
                value={formData.donorAddress}
                onChange={handleInputChange}
                placeholder="123 Main St, City, State, ZIP"
              />
            </div>

            {/* Amount and Currency */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="amount">Amount *</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="100.00"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 rounded-md border border-neutral-300 bg-white"
                >
                  <option value="USD">USD</option>
                  <option value="KES">KES</option>
                </select>
              </div>
            </div>

            {/* Donation Date */}
            <div className="space-y-2">
              <Label htmlFor="donationDate">Donation Date</Label>
              <Input
                id="donationDate"
                name="donationDate"
                type="date"
                value={formData.donationDate}
                onChange={handleInputChange}
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full h-10 px-3 rounded-md border border-neutral-300 bg-white"
              >
                <option value="CashApp">CashApp</option>
                <option value="Zelle">Zelle</option>
                <option value="Check">Check</option>
                <option value="M-Pesa">M-Pesa</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Cash">Cash</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <select
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full h-10 px-3 rounded-md border border-neutral-300 bg-white"
              >
                {DESIGNATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full h-20 px-3 py-2 rounded-md border border-neutral-300 bg-white resize-none"
                placeholder="Any additional notes..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                onClick={handlePreview}
                className="flex-1"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview PDF
              </Button>
              <Button
                variant="primary"
                onClick={handleDownload}
                className="flex-1"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview Card */}
        <Card>
          <CardHeader>
            <CardTitle>Receipt Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white border rounded-lg p-6 shadow-inner min-h-[500px]">
              {/* Mini Preview */}
              <div className="bg-primary-900 text-white p-4 rounded-t-lg text-center">
                <h3 className="font-bold text-lg">{ORGANIZATION.name}</h3>
                <p className="text-secondary-400 text-sm">{ORGANIZATION.tagline}</p>
                <p className="text-xs text-white/70 mt-1">{ADDRESSES.us.full}</p>
              </div>

              <div className="p-4 space-y-4">
                <h4 className="text-xl font-bold text-center text-primary-900">
                  DONATION RECEIPT
                </h4>

                <div className="flex justify-between text-sm border-b pb-2">
                  <span><strong>Receipt #:</strong> {formData.receiptNumber}</span>
                  <span><strong>Date:</strong> {formatDate(formData.donationDate)}</span>
                </div>

                <div className="space-y-1 text-sm">
                  <p><strong>Donor:</strong> {formData.donorName || "—"}</p>
                  {formData.donorEmail && <p><strong>Email:</strong> {formData.donorEmail}</p>}
                  {formData.donorAddress && <p><strong>Address:</strong> {formData.donorAddress}</p>}
                </div>

                <div className="bg-secondary-400 text-white p-3 rounded text-center">
                  <p className="text-sm">Amount Received</p>
                  <p className="text-2xl font-bold">
                    {formData.amount ? formatCurrency(formData.amount, formData.currency) : "$0.00"}
                  </p>
                </div>

                <div className="space-y-1 text-sm">
                  <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
                  <p><strong>Designation:</strong> {formData.designation}</p>
                  {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
                </div>

                <div className="text-xs text-neutral-500 border-t pt-3 italic">
                  <strong>Note:</strong> This donation is NOT tax-deductible. 501(c)(3) status pending.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
