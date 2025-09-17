import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['saurabh.sharma9827@gmail.com'],
      subject: 'this is the a trail messge where i want to know this is the correct mail',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      console.error({ error });
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error({ error });
    return Response.json({ error }, { status: 500 });
  }
}
