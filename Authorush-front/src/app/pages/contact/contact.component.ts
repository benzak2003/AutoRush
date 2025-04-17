import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

interface SocialLink {
  icon: string;
  url: string;
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Location',
      details: ['123 Business Street', 'New York, NY 10001', 'United States']
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['info@autorush.com', 'support@autorush.com']
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed']
    }
  ];

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-facebook-f', url: 'https://facebook.com', name: 'Facebook' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com', name: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', name: 'Instagram' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com', name: 'LinkedIn' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  // Getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // TODO: Implement form submission logic here
    console.log('Form submitted:', this.contactForm.value);
    
    // Reset form after successful submission
    this.contactForm.reset();
    this.submitted = false;
  }

  // Helper method to check if a field has errors
  hasError(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.errors && (control.dirty || control.touched || this.submitted));
  }

  // Helper method to get error message
  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);
    
    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    if (control.errors['email']) {
      return 'Please enter a valid email address';
    }

    if (control.errors['minlength']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${control.errors['minlength'].requiredLength} characters`;
    }

    if (control.errors['pattern']) {
      return 'Please enter a valid phone number (10 digits)';
    }

    return '';
  }
}
