import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedbacks = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendEmailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbacks.execute({
        type: "BUG",
        comment: "exemple comment",
        screenshot: "data:image/png;base64/fdsfdsfsd",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
  });

  it("should not be able send feedback image format invalid", async () => {
    await expect(
      submitFeedbacks.execute({
        type: "BUG",
        comment: "exemple comment",
        screenshot: "data:image/png",
      })
    ).rejects.toThrow();
  });
});
