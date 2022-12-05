import { MailTemplate } from "./MailTemplate";

export abstract class Mailer {
    public abstract generateMailTemplate():MailTemplate;

    public sendMail():string {
        const mailTempalte = this.generateMailTemplate()
        return `Sending the following mail: ${mailTempalte.generate()}`
    }
}