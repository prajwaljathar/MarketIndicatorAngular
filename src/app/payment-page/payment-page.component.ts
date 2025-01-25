// src/app/payment-page/payment-page.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common'; // Import CommonModule

// @Component({
//   selector: 'app-payment-page',
//   standalone: true, // Indicate this is a standalone component
//   imports: [CommonModule], // Import CommonModule here
//   templateUrl: './payment-page.component.html',
//   styleUrls: ['./payment-page.component.css']
// })
// export class PaymentPageComponent implements OnInit {
//   offer: any;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       this.offer = params;
//     });
//   }

//   makePayment(provider: string) {
//     // Implement payment logic with the selected provider
//     console.log(`Paying ₹${this.offer.price} for ${this.offer.tokens} tokens using ${provider}`);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-payment-page',
  standalone: true, // Indicate this is a standalone component
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  offer: any;
  selectedProvider: string | null = null; // Track selected provider

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.offer = params;
    });
  }

  makePayment(provider: string) {
    this.selectedProvider = provider; // Set the selected provider to display the scanner
    console.log(`Paying ₹${this.offer.price} for ${this.offer.tokens} tokens using ${provider}`);
  }
}