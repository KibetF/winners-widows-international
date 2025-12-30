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
import { CAMPS } from "@/lib/constants";
import { Plus, Edit, Image, Trash2 } from "lucide-react";

export default async function AdminAllocationsPage() {
  const supabase = await createClient();

  // Fetch allocations
  const { data: allocations } = await supabase
    .from("allocations")
    .select("*")
    .order("allocation_date", { ascending: false });

  // Calculate totals by camp
  const totalsByCamp = CAMPS.map((camp) => {
    const campAllocations = allocations?.filter((a) => a.camp === camp.id) || [];
    const total = campAllocations.reduce((sum, a) => sum + Number(a.amount), 0);
    return { ...camp, total, count: campAllocations.length };
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-neutral-900">
            Fund Allocations
          </h1>
          <p className="text-neutral-600">
            Track how funds are allocated to camps and programs
          </p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Record Allocation
        </Button>
      </div>

      {/* Summary by Camp */}
      <div className="grid md:grid-cols-3 gap-6">
        {totalsByCamp.map((camp) => (
          <Card key={camp.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-neutral-900">{camp.name}</h3>
                <Badge variant="secondary">{camp.count} allocations</Badge>
              </div>
              <p className="text-2xl font-heading font-bold text-primary-900">
                {formatCurrency(camp.total, "KES")}
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                {camp.members} members
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Allocations Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Allocations</CardTitle>
        </CardHeader>
        <CardContent>
          {allocations && allocations.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Camp</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Beneficiaries</TableHead>
                  <TableHead>Proof</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allocations.map((allocation) => (
                  <TableRow key={allocation.id}>
                    <TableCell>
                      {formatDateShort(allocation.allocation_date)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="primary">
                        {CAMPS.find((c) => c.id === allocation.camp)?.name ||
                          allocation.camp}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{allocation.purpose}</p>
                        {allocation.description && (
                          <p className="text-sm text-neutral-500 line-clamp-1">
                            {allocation.description}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatCurrency(allocation.amount, allocation.currency)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {allocation.beneficiary_type === "all"
                          ? "All Members"
                          : "Specific"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {allocation.photo_url ? (
                        <a
                          href={allocation.photo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary-900 hover:underline text-sm"
                        >
                          <Image className="w-4 h-4" />
                          View
                        </a>
                      ) : (
                        <span className="text-neutral-400 text-sm">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" title="Edit">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          title="Delete"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-12 text-neutral-500">
              <p>No allocations recorded yet</p>
              <p className="text-sm mt-2">
                Click &quot;Record Allocation&quot; to add the first one
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
