import { Mailer } from "./Mailer";
import { MailTemplate } from "./MailTemplate";
import { WelcomeMailTemplate } from "./WelcomeMailTemplate";

export class WelcomeMailGenerator extends Mailer {
    public generateMailTemplate(): MailTemplate {
        return new WelcomeMailTemplate();
    }

}