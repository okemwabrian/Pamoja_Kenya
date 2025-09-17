import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration';

@Component({
  selector: 'app-payments',
  standalone: false,
  templateUrl: './payments.html',
  styleUrls: ['./payments.css']
})
export class Payments implements OnInit {
  registrationData: any = null;
  paymentCompleted: boolean = false;

  constructor(private router: Router, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    console.log('✅ Payments component loaded');

    this.registrationData = this.registrationService.getData();

    if (!this.registrationData) {
      console.warn('No registration data found, redirecting...');
      this.router.navigate(['/single-application']);
      return;
    }

    this.loadPayPalScript().then(() => {
      (window as any).paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: '627.30' }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            this.onPaymentSuccess(details);
          });
        },
        onError: (err: any) => {
          console.error('PayPal error:', err);
        }
      }).render('#paypal-button-container');
    }).catch(err => {
      console.error('Failed to load PayPal SDK script', err);
    });
  }

  loadPayPalScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).paypal) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=AcKeWOPTHodpfp9ana6qegVblvkw5AlwDZb-iTlvzTQHPADeoNjkV9w8ChY2khzu59kuHaBlshC33yMg&currency=USD';
      script.onload = () => resolve();
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  }

  onPaymentSuccess(details: any): void {
    console.log('Payment successful!', details);
    this.paymentCompleted = true;

    // TODO: send registrationData + payment details to your backend here
  }
}
