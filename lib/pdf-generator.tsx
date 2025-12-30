import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { Donation } from "@/types";
import { formatCurrency, formatDate } from "./utils";
import { ORGANIZATION, ADDRESSES } from "./constants";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: "#1A1918",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#722F37",
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: "#722F37",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#D4AF37",
    fontSize: 24,
    fontWeight: "bold",
  },
  orgInfo: {
    flex: 1,
    marginLeft: 15,
  },
  orgName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#722F37",
    marginBottom: 4,
  },
  orgAddress: {
    fontSize: 9,
    color: "#5C5955",
    lineHeight: 1.4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#722F37",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#722F37",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E6E1",
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    width: 140,
    color: "#5C5955",
    fontWeight: "bold",
  },
  value: {
    flex: 1,
    color: "#1A1918",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#722F37",
  },
  notice: {
    backgroundColor: "#FEF3C7",
    borderWidth: 1,
    borderColor: "#F59E0B",
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  noticeTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#B45309",
    marginBottom: 5,
  },
  noticeText: {
    fontSize: 9,
    color: "#92400E",
    lineHeight: 1.5,
  },
  thankYou: {
    textAlign: "center",
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E8E6E1",
  },
  thankYouText: {
    fontSize: 12,
    color: "#5C5955",
    marginBottom: 20,
    lineHeight: 1.5,
  },
  signature: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  signatureLine: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: "#1A1918",
    marginBottom: 5,
  },
  signatureName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1A1918",
  },
  signatureTitle: {
    fontSize: 9,
    color: "#5C5955",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 9,
    color: "#A8A49C",
    borderTopWidth: 1,
    borderTopColor: "#E8E6E1",
    paddingTop: 10,
  },
});

interface ReceiptDocumentProps {
  donation: Donation;
}

export function ReceiptDocument({ donation }: ReceiptDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>W</Text>
          </View>
          <View style={styles.orgInfo}>
            <Text style={styles.orgName}>{ORGANIZATION.name}</Text>
            <Text style={styles.orgAddress}>
              {ADDRESSES.us.street}
              {"\n"}
              {ADDRESSES.us.city}, {ADDRESSES.us.state} {ADDRESSES.us.zip}
            </Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>DONATION RECEIPT</Text>

        {/* Receipt Info */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Receipt Number:</Text>
            <Text style={styles.value}>{donation.receipt_number}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date Issued:</Text>
            <Text style={styles.value}>{formatDate(new Date())}</Text>
          </View>
        </View>

        {/* Donor Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DONOR INFORMATION</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{donation.donor_name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{donation.donor_email}</Text>
          </View>
        </View>

        {/* Donation Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DONATION DETAILS</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Amount:</Text>
            <Text style={styles.amount}>
              {formatCurrency(donation.amount, donation.currency)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date Received:</Text>
            <Text style={styles.value}>{formatDate(donation.donation_date)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Payment Method:</Text>
            <Text style={styles.value}>{donation.payment_method}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Designation:</Text>
            <Text style={styles.value}>{donation.designation}</Text>
          </View>
        </View>

        {/* Important Notice */}
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>IMPORTANT NOTICE</Text>
          <Text style={styles.noticeText}>
            {ORGANIZATION.name} is a registered nonprofit organization. Our
            501(c)(3) tax-exempt status is currently PENDING. This receipt is
            provided for your personal records and MAY NOT currently be used for
            tax deduction purposes.
          </Text>
        </View>

        {/* Thank You */}
        <View style={styles.thankYou}>
          <Text style={styles.thankYouText}>
            Thank you for your generous support! Your kindness brings hope and
            empowerment to widows and widowers in Kenya.
          </Text>
          <View style={styles.signature}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureName}>Mary Kipchilis</Text>
            <Text style={styles.signatureTitle}>Founder & President</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          {ORGANIZATION.website} | {ORGANIZATION.email}
        </Text>
      </Page>
    </Document>
  );
}
