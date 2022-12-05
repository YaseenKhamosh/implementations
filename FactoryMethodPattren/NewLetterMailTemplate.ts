import { MailTemplate } from "./MailTemplate";

export class NewLetterMailTemplate implements MailTemplate{
    generate(): string {
        return "Please enjoy our news letter..."
    }
}