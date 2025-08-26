
    import { NextResponse } from "next/server";

    export async function POST(req) {
      try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
          return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
        }

        // === Use Resend (uncomment and add RESEND_API_KEY in .env.local) ===
        // import { Resend } from "resend";
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: "site@theelegantchauffeurs.com",
        //   to: "info@theelegantchauffeurs.com",
        //   subject: "New Contact Form Submission",
        //   text: `From: ${name} <${email}>

${message}`,
        // });

        return NextResponse.json({ ok: true });
      } catch (e) {
        return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
      }
    }
