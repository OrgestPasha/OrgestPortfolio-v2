import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser,CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { format, toZonedTime } from 'date-fns-tz';
import { ServiceService } from '../service/service.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  title = 'Angular Contact Form';
  contactForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  successMessage: string = '';
  showForm: boolean = true; 
  formattedTime: string = "";
  isBrowser: boolean;

  constructor(
    private fb: FormBuilder,
    public Service: ServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', Validators.required],
    
    })

    
  }
  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateFormattedTime();
      setInterval(() => {
        this.updateFormattedTime();
      }, 1000);
    }      
  }


  onSubmit() {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;
      console.log('Form submitted with values:', formValues);
      

      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('email', formValues.email);
      formData.append('message', formValues.message);

      this.Service.sendEmail(formData).subscribe({
        next: (response: HttpResponse<any>) => {
          if (response.ok) {
            this.successMessage = response.body.message;
            this.showForm = false;
            this.clearSuccessMessage();     
            this.contactForm.reset();
          }
        },
        error: (error: any) => {
          console.error('Error sending email:', error);
        }
      });

    } else {
      // Form is invalid, display error messages
      // Additional validation logic or user feedback here
    }
  }

  
  

  clearSuccessMessage() {
    setTimeout(() => {
      this.successMessage = '';
      this.showForm = true;
    }, 5000);
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }



  private updateFormattedTime(): void {
    const timeZone = 'Europe/Belgrade';
    const now = new Date();
    const zonedTime = toZonedTime(now, timeZone);
    this.formattedTime = format(zonedTime, 'HH:mm:ss', { timeZone });
  }

  
}




  