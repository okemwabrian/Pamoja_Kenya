import { Component } from '@angular/core';

interface SharePurchase {
  fullName: string;
  email: string;
  shares: number | null;
  paymentMethod: 'paypal' | 'bank' | 'card' | '';
  comments?: string;
}

@Component({
  selector: 'app-shares',
  standalone: false,
  templateUrl: './shares.html',
  styleUrls: ['./shares.css']
})
export class Shares {
  formData: SharePurchase = {
    fullName: '',
    email: '',
    shares: null,
    paymentMethod: '',
    comments: ''
  };

  onSubmit() {
    // Basic validation before submitting
    if (!this.formData.fullName || !this.formData.email || !this.formData.shares || this.formData.shares < 1 || !this.formData.paymentMethod) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    console.log('✅ Form submitted:', this.formData);
    // TODO: Connect to backend to submit data here
  }
}
