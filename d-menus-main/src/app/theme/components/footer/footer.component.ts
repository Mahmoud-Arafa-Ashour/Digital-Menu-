import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { emailValidator } from "../../utils/app-validators";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  public feedbackForm!: UntypedFormGroup;
  public subscribeForm!: UntypedFormGroup;

  constructor(public formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      name: ["", Validators.required],
      message: ["", Validators.required],
    });
    this.subscribeForm = this.formBuilder.group({
      name: ["", Validators.required],
    });
  }

  public onFeedbackFormSubmit(values: any): void {
    if (this.feedbackForm.valid) {
      const message = `Feedback from: ${values.name}\nMessage: ${values.message}`;
      const phoneNumber = '201270888338'; // Replace with your WhatsApp number
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
    }
  }

  makeCall() {
    window.location.href = "tel:+201270888338";
  }

  public onSubscribeFormSubmit(values: any): void {
    if (this.subscribeForm.valid) {
      console.log(values);
      const message = `'${values.name}' Need To Subscribe`;
      const phoneNumber = '201270888338'; // Replace with your WhatsApp number
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
    }
  }
}