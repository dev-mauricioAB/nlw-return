import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "./../mail-adapter";

export class NodemailerMailAdapter implements MailAdapter {
  private transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5b1da54dd06239",
      pass: "3b91316b06bb4a",
    },
  });

  async sendMail({ subject, body }: SendMailData) {
    await this.transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Mauricio Barroso <dev.mauricioalezandre@gmail.com>",
      subject,
      html: body,
    });
  }
}
