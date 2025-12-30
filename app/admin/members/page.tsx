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
import { formatDateShort } from "@/lib/utils";
import { CAMPS } from "@/lib/constants";
import { Plus, Edit, UserX } from "lucide-react";

export default async function AdminMembersPage() {
  const supabase = await createClient();

  // Fetch members
  const { data: members } = await supabase
    .from("members")
    .select("*")
    .order("name", { ascending: true });

  // Group by camp
  const membersByCamp = CAMPS.map((camp) => ({
    ...camp,
    members: members?.filter((m) => m.camp === camp.id) || [],
  }));

  // Count by status
  const activeCount = members?.filter((m) => m.status === "Active").length || 0;
  const inactiveCount = members?.filter((m) => m.status === "Inactive").length || 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-neutral-900">
            Member Registry
          </h1>
          <p className="text-neutral-600">
            Manage beneficiary members across all camps
          </p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-heading font-bold text-neutral-900">
              {members?.length || 0}
            </p>
            <p className="text-neutral-600">Total Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-heading font-bold text-green-600">
              {activeCount}
            </p>
            <p className="text-neutral-600">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-heading font-bold text-yellow-600">
              {inactiveCount}
            </p>
            <p className="text-neutral-600">Inactive</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-heading font-bold text-primary-900">
              {CAMPS.length}
            </p>
            <p className="text-neutral-600">Camps</p>
          </CardContent>
        </Card>
      </div>

      {/* Members by Camp */}
      {membersByCamp.map((camp) => (
        <Card key={camp.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{camp.name}</CardTitle>
              <p className="text-sm text-neutral-500">{camp.location}</p>
            </div>
            <Badge variant="primary">{camp.members.length} members</Badge>
          </CardHeader>
          <CardContent>
            {camp.members.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {camp.members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">
                        {member.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            member.role === "Member" ? "default" : "secondary"
                          }
                        >
                          {member.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {member.join_date
                          ? formatDateShort(member.join_date)
                          : "-"}
                      </TableCell>
                      <TableCell>{member.phone || "-"}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            member.status === "Active"
                              ? "success"
                              : member.status === "Inactive"
                              ? "warning"
                              : "error"
                          }
                        >
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" title="Edit">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            title="Archive"
                            className="text-yellow-600 hover:text-yellow-700"
                          >
                            <UserX className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-neutral-500">
                <p>No members in this camp yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
