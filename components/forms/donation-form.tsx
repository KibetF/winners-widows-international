"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DESIGNATIONS, PAYMENT_METHODS, CAMPS } from "@/lib/constants";
import { CheckCircle, Heart } from "lucide-react";

const donationSchema = z.object({
  donor_name: z.string().min(2, "Name must be at least 2 characters"),
  donor_email: z.string().email("Please enter a valid email address"),
  donor_phone: z.string().optional(),
  amount: z.coerce.number().positive("Please enter a valid amount"),
  currency: z.enum(["USD", "KES"]),
  payment_method: z.string().min(1, "Please select a payment method"),
  donation_date: z.string().min(1, "Please select the donation date"),
  designation: z.string().min(1, "Please select a designation"),
  message: z.string().optional(),
});

type DonationFormData = z.infer<typeof donationSchema>;

const currencyOptions = [
  { value: "USD", label: "USD ($)" },
  { value: "KES", label: "KES (KSh)" },
];

const paymentOptions = PAYMENT_METHODS.map((method) => ({
  value: method,
  label: method,
}));

const designationOptions = DESIGNATIONS.map((d) => ({
  value: d,
  label: d,
}));

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      currency: "USD",
      designation: "General Fund (Where Most Needed)",
      donation_date: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donation confirmation");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError("Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 text-accent-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
          Thank You for Your Generosity!
        </h3>
        <p className="text-neutral-600 mb-4">
          Your donation confirmation has been received. Our team will verify
          your donation and send your official receipt within 48 hours.
        </p>
        <p className="text-sm text-neutral-500 mb-6">
          If you have any questions, please contact us at{" "}
          <a
            href="mailto:info@winnerswidows.org"
            className="text-primary-900 hover:underline"
          >
            info@winnerswidows.org
          </a>
        </p>
        <p className="text-lg font-heading font-semibold text-primary-900">
          God bless you for your kindness.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="mt-6"
        >
          Submit Another Donation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name *"
          placeholder="John Doe"
          error={errors.donor_name?.message}
          {...register("donor_name")}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="john@example.com"
          error={errors.donor_email?.message}
          {...register("donor_email")}
        />
      </div>

      <Input
        label="Phone Number"
        type="tel"
        placeholder="+1 (555) 123-4567"
        helperText="Optional - for receipt delivery"
        {...register("donor_phone")}
      />

      <div className="grid md:grid-cols-3 gap-6">
        <Input
          label="Amount Donated *"
          type="number"
          step="0.01"
          min="1"
          placeholder="100.00"
          error={errors.amount?.message}
          {...register("amount")}
        />
        <Select
          label="Currency *"
          options={currencyOptions}
          error={errors.currency?.message}
          {...register("currency")}
        />
        <Input
          label="Date of Donation *"
          type="date"
          error={errors.donation_date?.message}
          {...register("donation_date")}
        />
      </div>

      <Select
        label="Payment Method Used *"
        placeholder="Select payment method..."
        options={paymentOptions}
        error={errors.payment_method?.message}
        {...register("payment_method")}
      />

      <Select
        label="Designation *"
        placeholder="Select where to direct your gift..."
        options={designationOptions}
        error={errors.designation?.message}
        {...register("designation")}
      />

      <Textarea
        label="Message/Notes"
        placeholder="Any additional information about your donation (optional)"
        rows={4}
        {...register("message")}
      />

      {error && (
        <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        <CheckCircle className="w-5 h-5 mr-2" />
        Confirm My Donation
      </Button>
    </form>
  );
}
