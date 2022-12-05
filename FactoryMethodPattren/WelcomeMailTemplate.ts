import { MailTemplate } from "./MailTemplate";

export class WelcomeMailTemplate implements MailTemplate{
    generate(): string {
       return "Welocem Aboard, Thanks for signing..."
    }

}