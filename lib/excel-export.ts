import * as XLSX from "xlsx";
import { Donation, Allocation, Member } from "@/types";
import { formatCurrency, formatDate } from "./utils";

export function exportDonationsToExcel(donations: Donation[]): Buffer {
  const data = donations.map((d) => ({
    "Receipt #": d.receipt_number,
    "Donor Name": d.donor_name,
    "Donor Email": d.donor_email,
    "Donor Phone": d.donor_phone || "",
    Amount: d.amount,
    Currency: d.currency,
    "Amount Formatted": formatCurrency(d.amount, d.currency),
    "Payment Method": d.payment_method,
    "Donation Date": formatDate(d.donation_date),
    Designation: d.designation,
    "Designated Camp": d.designated_camp || "",
    Verified: d.verified ? "Yes" : "No",
    "Receipt Sent": d.receipt_sent ? "Yes" : "No",
    Notes: d.notes || "",
    "Created At": formatDate(d.created_at),
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Donations");

  // Auto-size columns
  const colWidths = Object.keys(data[0] || {}).map((key) => ({
    wch: Math.max(key.length, 15),
  }));
  ws["!cols"] = colWidths;

  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
}

export function exportAllocationsToExcel(allocations: Allocation[]): Buffer {
  const data = allocations.map((a) => ({
    Date: formatDate(a.allocation_date),
    Camp: a.camp,
    Purpose: a.purpose,
    Amount: a.amount,
    Currency: a.currency,
    "Amount Formatted": formatCurrency(a.amount, a.currency),
    Description: a.description || "",
    "Beneficiary Type": a.beneficiary_type === "all" ? "All Members" : "Specific",
    "Has Photo": a.photo_url ? "Yes" : "No",
    Notes: a.notes || "",
    "Created At": formatDate(a.created_at),
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Allocations");

  const colWidths = Object.keys(data[0] || {}).map((key) => ({
    wch: Math.max(key.length, 15),
  }));
  ws["!cols"] = colWidths;

  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
}

export function exportMembersToExcel(members: Member[]): Buffer {
  const data = members.map((m) => ({
    Name: m.name,
    Camp: m.camp,
    Role: m.role,
    "Join Date": m.join_date ? formatDate(m.join_date) : "",
    Status: m.status,
    Phone: m.phone || "",
    Notes: m.notes || "",
    "Created At": formatDate(m.created_at),
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Members");

  const colWidths = Object.keys(data[0] || {}).map((key) => ({
    wch: Math.max(key.length, 15),
  }));
  ws["!cols"] = colWidths;

  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
}

interface SummaryReportData {
  donations: Donation[];
  allocations: Allocation[];
  members: Member[];
  startDate: string;
  endDate: string;
}

export function exportSummaryToExcel({
  donations,
  allocations,
  members,
  startDate,
  endDate,
}: SummaryReportData): Buffer {
  const wb = XLSX.utils.book_new();

  // Summary sheet
  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalAllocations = allocations.reduce((sum, a) => sum + a.amount, 0);

  const summaryData = [
    { Metric: "Report Period", Value: `${startDate} to ${endDate}` },
    { Metric: "Total Donations (USD)", Value: formatCurrency(totalDonations) },
    { Metric: "Total Allocations (KES)", Value: formatCurrency(totalAllocations, "KES") },
    { Metric: "Number of Donations", Value: donations.length },
    { Metric: "Number of Allocations", Value: allocations.length },
    { Metric: "Active Members", Value: members.filter((m) => m.status === "Active").length },
  ];

  const summaryWs = XLSX.utils.json_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");

  // Donations by designation
  const byDesignation: Record<string, number> = {};
  donations.forEach((d) => {
    byDesignation[d.designation] = (byDesignation[d.designation] || 0) + d.amount;
  });
  const designationData = Object.entries(byDesignation).map(([designation, amount]) => ({
    Designation: designation,
    Total: formatCurrency(amount),
    Count: donations.filter((d) => d.designation === designation).length,
  }));
  const designationWs = XLSX.utils.json_to_sheet(designationData);
  XLSX.utils.book_append_sheet(wb, designationWs, "By Designation");

  // Allocations by camp
  const byCamp: Record<string, number> = {};
  allocations.forEach((a) => {
    byCamp[a.camp] = (byCamp[a.camp] || 0) + a.amount;
  });
  const campData = Object.entries(byCamp).map(([camp, amount]) => ({
    Camp: camp,
    Total: formatCurrency(amount, "KES"),
    Count: allocations.filter((a) => a.camp === camp).length,
  }));
  const campWs = XLSX.utils.json_to_sheet(campData);
  XLSX.utils.book_append_sheet(wb, campWs, "By Camp");

  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
}
