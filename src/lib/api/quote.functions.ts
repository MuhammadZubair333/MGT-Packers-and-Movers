import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

export const sendQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name:    z.string().min(1, "Name is required"),
      phone:   z.string().min(1, "Phone is required"),
      from:    z.string().min(1, "Moving from is required"),
      to:      z.string().min(1, "Moving to is required"),
      date:    z.string().optional(),
      type:    z.string().optional(),
      message: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from:    "MGT Website <onboarding@resend.dev>",
      to:      ["mgtpackersmovers@gmail.com"],
      replyTo: data.phone ? undefined : undefined,
      subject: `New Quote Request: ${data.type || "General"} - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #b01f27; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">MGT Packers & Movers Website</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 140px;">Customer Name</td>
                <td style="padding: 10px 0; font-weight: bold; color: #111827;">${data.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone Number</td>
                <td style="padding: 10px 0; font-weight: bold; color: #111827;">${data.phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Moving From</td>
                <td style="padding: 10px 0; color: #111827;">${data.from}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Moving To</td>
                <td style="padding: 10px 0; color: #111827;">${data.to}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Move Date</td>
                <td style="padding: 10px 0; color: #111827;">${data.date || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Service Type</td>
                <td style="padding: 10px 0; color: #111827;">${data.type || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Message</td>
                <td style="padding: 10px 0; color: #111827;">${data.message || "No message"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; font-size: 14px; color: #92400e;">
                <strong>Action Required:</strong> Call or WhatsApp <strong>${data.name}</strong> at <strong>${data.phone}</strong> to confirm their quote.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return { ok: true };
  });
