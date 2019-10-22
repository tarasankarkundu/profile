import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.scss']
})
export class MyContactComponent implements OnInit {
  public contactForm: FormGroup;
  lat = 12.9716;
  lng = 77.5946;
  mapType = 'roadmap';
  constructor(public fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: [''],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  submitMessage(event) {
    console.log(event);
  }
}

