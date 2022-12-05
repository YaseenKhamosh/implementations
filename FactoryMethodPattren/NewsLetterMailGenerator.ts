import { Mailer } from "./Mailer";
import { MailTemplate } from "./MailTemplate";
import { NewLetterMailTemplate } from "./NewLetterMailTemplate";

export class NewsLetterMailGenerator extends Mailer {
    public generateMailTemplate(): MailTemplate {
    return new NewLetterMailTemplate()
    }
}