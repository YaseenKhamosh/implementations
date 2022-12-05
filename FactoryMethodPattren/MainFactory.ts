import { Mailer } from "./Mailer";
import { NewsLetterMailGenerator } from "./NewsLetterMailGenerator";
import { WelcomeMailGenerator } from "./WelcomeMailGenerator";

function clinetCode(mailer:Mailer){
    console.log(mailer.sendMail());
}


clinetCode(new WelcomeMailGenerator)
clinetCode(new NewsLetterMailGenerator)