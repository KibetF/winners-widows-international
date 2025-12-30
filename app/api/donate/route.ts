import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      donor_name,
      donor_email,
      donor_phone,
      amount,
      currency,
      payment_method,
      donation_date,
      designation,
      message,
    } = body;

    // Validate required fields
    if (
      !donor_name ||
      !donor_email ||
      !amount ||
      !payment_method ||
      !donation_date ||
      !designation
    ) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Create Supabase client
    const supabase = await createClient();

    // Insert donation submission
    const { error } = await supabase.from("donation_submissions").insert({
      donor_name,
      donor_email,
      donor_phone: donor_phone || null,
      amount: parseFloat(amount),
      currency: currency || "USD",
      payment_method,
      donation_date,
      designation,
      message: message || null,
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save donation submission" },
        { status: 500 }
      );
    }

    // TODO: Send confirmation email to donor
    // TODO: Send notification to admin

    return NextResponse.json(
      { message: "Donation submission received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Donation submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
