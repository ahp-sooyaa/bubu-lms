import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({
    email,
    userName,
    classId,
}: {
    email: string;
    userName: string;
    classId: number;
}) {
    try {
        const { data, error } = await resend.emails.send({
            from: "BUBU LMS <onboarding@resend.dev>",
            to: [email],
            subject: "Hello world",
            html: `
                <h1>Welcome to ${classId}!</h1>
                <p>Hi ${userName},</p>
                <p>Your enrollment has been confirmed!</p>
                <h2>Class Details:</h2>
                <ul>
                    <li><strong>Class:</strong> ${classId}</li>
                    <li><strong>Schedule:</strong> ${classId}</li>
                    <li><strong>Location:</strong> ${classId}</li>
                </ul>
                <p>We look forward to seeing you in class!</p>
            `,
        });
        // FIXME

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
