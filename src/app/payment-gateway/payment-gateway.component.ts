// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-payment-gateway',
//   standalone: true,
//   imports: [],
//   templateUrl: './payment-gateway.component.html',
//   styleUrl: './payment-gateway.component.css'
// })
// export class PaymentGatewayComponent {

// }


// src/app/payment-gateway/payment-gateway.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-payment-gateway',
  standalone: true, // Indicate this is a standalone component
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent {
  offers = [
    { price: 100, tokens: 5 },
    { price: 200, tokens: 10 },
    { price: 500, tokens: 25 },
    { price: 1000, tokens: 50 },
  ];

  constructor(private router: Router) {}

  selectOffer(offer: any) {
    // Redirect to the payment page with the selected offer details
    this.router.navigate(['/payment'], { queryParams: offer });
  }
}


