
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // Validate
    const required = ["name","phone","date","pickup","dropoff"];
    for (const k of required) if (!data[k]) return NextResponse.json({ ok:false, error:`Missing ${k}` }, { status:400 });

    // TODO: send email via Resend or integrate your booking system
    // Example Resend usage (requires RESEND_API_KEY):
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "site@theelegantchauffeurs.com",
    //   to: "info@theelegantchauffeurs.com",
    //   subject: "New Booking Request",
    //   text: JSON.stringify(data, null, 2),
    // });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
