import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CAMPS } from "@/lib/constants";
import {
  FileText,
  Download,
  Calendar,
  DollarSign,
  Wallet,
  Users,
  TrendingUp,
} from "lucide-react";

export default function AdminReportsPage() {
  const campOptions = [
    { value: "all", label: "All Camps" },
    ...CAMPS.map((camp) => ({ value: camp.id, label: camp.name })),
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-neutral-900">
          Reports
        </h1>
        <p className="text-neutral-600">
          Generate and export reports for donations, allocations, and members
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Donations Report */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle>Donations Report</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Start Date" type="date" />
              <Input label="End Date" type="date" />
            </div>
            <Select
              label="Designation"
              options={[
                { value: "all", label: "All Designations" },
                { value: "General Fund", label: "General Fund" },
                { value: "Kasoiyo Camp", label: "Kasoiyo Camp" },
                { value: "Talai Camp", label: "Talai Camp" },
                { value: "Cheburur Camp", label: "Cheburur Camp" },
                { value: "Livestock Program", label: "Livestock Program" },
                { value: "Education Support", label: "Education Support" },
                { value: "Healthcare", label: "Healthcare" },
              ]}
            />
            <div className="flex gap-3">
              <Button variant="primary" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Preview Report
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Allocations Report */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle>Allocations Report</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Start Date" type="date" />
              <Input label="End Date" type="date" />
            </div>
            <Select label="Camp" options={campOptions} />
            <Select
              label="Purpose"
              options={[
                { value: "all", label: "All Purposes" },
                { value: "Livestock Purchase", label: "Livestock Purchase" },
                { value: "Livestock Feed/Care", label: "Livestock Feed/Care" },
                { value: "Veterinary Services", label: "Veterinary Services" },
                { value: "Education - School Fees", label: "School Fees" },
                { value: "Healthcare", label: "Healthcare" },
                { value: "Food Distribution", label: "Food Distribution" },
                { value: "Skills Training", label: "Skills Training" },
              ]}
            />
            <div className="flex gap-3">
              <Button variant="primary" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Preview Report
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Members Report */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle>Members Report</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select label="Camp" options={campOptions} />
            <Select
              label="Status"
              options={[
                { value: "all", label: "All Statuses" },
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
                { value: "Deceased", label: "Deceased" },
              ]}
            />
            <Select
              label="Role"
              options={[
                { value: "all", label: "All Roles" },
                { value: "Member", label: "Member" },
                { value: "Coordinator", label: "Coordinator" },
                { value: "Chairperson", label: "Chairperson" },
                { value: "Secretary", label: "Secretary" },
                { value: "Treasurer", label: "Treasurer" },
              ]}
            />
            <div className="flex gap-3">
              <Button variant="primary" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Preview Report
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary Report */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-900" />
              </div>
              <CardTitle>Summary Dashboard</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Start Date" type="date" />
              <Input label="End Date" type="date" />
            </div>
            <p className="text-sm text-neutral-600">
              Generate a comprehensive summary report including:
            </p>
            <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside">
              <li>Total donations received</li>
              <li>Breakdown by payment method and designation</li>
              <li>Total allocations by camp and purpose</li>
              <li>Unallocated fund balance</li>
            </ul>
            <div className="flex gap-3">
              <Button variant="primary" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Generate Summary
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
