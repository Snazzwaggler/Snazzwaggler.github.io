import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
// import emailjs from '@emailjs/browser';

export default class FormComponent extends Component {

    @tracked username = "";
    @tracked user_email = "";
    @tracked message = "";

    // SERVICE_ID = "todo";
    // TEMPLATE_ID = "todod";

    @action sendEmail() {
        console.log("sending");

        // emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, )


    }
}
