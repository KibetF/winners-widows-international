import { createClient } from "@/lib/supabase/server";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { formatCurrency, formatDateShort } from "@/lib/utils";
import { Plus, FileText, Check, Mail } from "lucide-react";

export default async function AdminDonationsPage() {
  const supabase = await createClient();

  // Fetch donations
  const { data: donations } = await supabase
    .from("donations")
    .select("*")
    .order("created_at", { ascending: false });

  // Fetch pending submissions
  const { data: pendingSubmissions } = await supabase
    .from("donation_submissions")
    .select("*")
    .eq("processed", false)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-neutral-900">
            Donations
          </h1>
          <p className="text-neutral-600">
            Manage donations and generate receipts
          </p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Manual Donation
        </Button>
      </div>

      {/* Pending Submissions */}
      {pendingSubmissions && pendingSubmissions.length > 0 && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-800">
              Pending Verifications ({pendingSubmissions.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-yellow-200"
                >
                  <div>
                    <p className="font-medium text-neutral-900">
                      {submission.donor_name}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {formatCurrency(submission.amount, submission.currency)} via{" "}
                      {submission.payment_method} •{" "}
                      {formatDateShort(submission.donation_date)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Check className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Verified Donations Table */}
      <Card>
        <CardHeader>
          <CardTitle>Verified Donations</CardTitle>
        </CardHeader>
        <CardContent>
          {donations && donations.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Receipt #</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="font-mono text-sm">
                      {donation.receipt_number}
                    </TableCell>
                    <TableCell>
                      {formatDateShort(donation.donation_date)}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{donation.donor_name}</p>
                        <p className="text-sm text-neutral-500">
                          {donation.donor_email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatCurrency(donation.amount, donation.currency)}
                    </TableCell>
                    <TableCell>{donation.payment_method}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{donation.designation}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <Badge
                          variant={donation.verified ? "success" : "warning"}
                        >
                          {donation.verified ? "Verified" : "Pending"}
                        </Badge>
                        {donation.receipt_sent && (
                          <Badge variant="accent">Receipt Sent</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" title="Generate Receipt">
                          <FileText className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Send Receipt">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-12 text-neutral-500">
              <p>No donations recorded yet</p>
              <p className="text-sm mt-2">
                Donations will appear here once verified
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
