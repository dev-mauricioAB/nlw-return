import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();
app.use(express.json());

app.get('feedbacks', () => {

});

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5b1da54dd06239",
    pass: "3b91316b06bb4a"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Mauricio Barroso <dev.mauricioalezandre@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}<p/>`,
      `<p>Comentario: ${comment}</p>`,
      `</div>`
    ].join('\n')
  });

  return res.status(201).json({ data: feedback });
})

app.listen(3333, () => console.log('Bombo 💣 '));