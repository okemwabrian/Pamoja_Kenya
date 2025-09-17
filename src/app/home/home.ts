import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private router: Router) {}

  // Called when user clicks on "Sign-up Here" button
  goToSignup() {
    this.router.navigate(['/signup']);  // Adjust this route based on your actual routes
  }

  // Called when user clicks on "Buy Shares Here" button
  goToBuyShares() {
    this.router.navigate(['/buy-shares']);  // Adjust this route as well
  }

  // Called when user clicks on "Upgrade Here" button
  goToUpgrade() {
    this.router.navigate(['/upgrade']);  // Change to your actual upgrade route
  }

  // Called when user clicks "Read More"
  goToBenefits() {
    this.router.navigate(['/beneficiaries']);  // Change route accordingly
  }

}
