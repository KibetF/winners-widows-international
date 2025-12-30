import { createClient } from "@/lib/supabase/server";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DollarSign,
  Users,
  Wallet,
  Clock,
  TrendingUp,
  ArrowRight,
  Plus,
} from "lucide-react";
import { formatCurrency, formatDateShort } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  // Fetch stats
  const [donationsResult, membersResult, allocationsResult, pendingResult] =
    await Promise.all([
      supabase.from("donations").select("amount, currency", { count: "exact" }),
      supabase
        .from("members")
        .select("id", { count: "exact" })
        .eq("status", "Active"),
      supabase.from("allocations").select("amount, currency", { count: "exact" }),
      supabase
        .from("donation_submissions")
        .select("id", { count: "exact" })
        .eq("processed", false),
    ]);

  const totalDonations =
    donationsResult.data?.reduce((sum, d) => sum + Number(d.amount), 0) || 0;
  const totalMembers = membersResult.count || 0;
  const totalAllocations =
    allocationsResult.data?.reduce((sum, a) => sum + Number(a.amount), 0) || 0;
  const pendingSubmissions = pendingResult.count || 0;

  // Fetch recent donations
  const { data: recentDonations } = await supabase
    .from("donations")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  // Fetch recent contact submissions
  const { data: recentContacts } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-neutral-900">
            Dashboard
          </h1>
          <p className="text-neutral-600">
            Welcome back! Here&apos;s an overview of your organization.
          </p>
        </div>
        <Link href="/admin/donations">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Log Donation
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Total Donations</p>
                <p className="text-2xl font-heading font-bold text-neutral-900">
                  {formatCurrency(totalDonations)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Active Members</p>
                <p className="text-2xl font-heading font-bold text-neutral-900">
                  {totalMembers}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">
                  Total Allocated (KES)
                </p>
                <p className="text-2xl font-heading font-bold text-neutral-900">
                  {formatCurrency(totalAllocations, "KES")}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">
                  Pending Verifications
                </p>
                <p className="text-2xl font-heading font-bold text-neutral-900">
                  {pendingSubmissions}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Donations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Donations</CardTitle>
            <Link href="/admin/donations">
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {recentDonations && recentDonations.length > 0 ? (
              <div className="space-y-4">
                {recentDonations.map((donation) => (
                  <div
                    key={donation.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-neutral-50"
                  >
                    <div>
                      <p className="font-medium text-neutral-900">
                        {donation.donor_name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {formatDateShort(donation.donation_date)} •{" "}
                        {donation.designation}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-neutral-900">
                        {formatCurrency(donation.amount, donation.currency)}
                      </p>
                      <Badge
                        variant={donation.verified ? "success" : "warning"}
                      >
                        {donation.verified ? "Verified" : "Pending"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-500 text-center py-8">
                No donations recorded yet
              </p>
            )}
          </CardContent>
        </Card>

        {/* Recent Contact Submissions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            {recentContacts && recentContacts.length > 0 ? (
              <div className="space-y-4">
                {recentContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-3 rounded-lg bg-neutral-50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-neutral-900">
                        {contact.name}
                      </p>
                      <Badge variant={contact.read ? "default" : "primary"}>
                        {contact.read ? "Read" : "New"}
                      </Badge>
                    </div>
                    <p className="text-sm text-neutral-600 mb-1">
                      {contact.subject}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {formatDateShort(contact.created_at)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-500 text-center py-8">
                No messages yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/donations">
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="w-4 h-4 mr-2" />
                Manage Donations
              </Button>
            </Link>
            <Link href="/admin/allocations">
              <Button variant="outline" className="w-full justify-start">
                <Wallet className="w-4 h-4 mr-2" />
                Record Allocation
              </Button>
            </Link>
            <Link href="/admin/members">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Manage Members
              </Button>
            </Link>
            <Link href="/admin/reports">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                Generate Reports
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
