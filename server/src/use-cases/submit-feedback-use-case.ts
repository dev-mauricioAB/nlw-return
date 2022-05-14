import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "./../repositories/Feedbacks-repository";
interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) throw new Error("Invalid type");
    if (!comment) throw new Error("Invalid comment");
    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}<p/>`,
        `<p>Comentario: ${comment}</p>`,
        `</div>`,
        `<p>Print da tela: <img src="${screenshot}"/></p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
