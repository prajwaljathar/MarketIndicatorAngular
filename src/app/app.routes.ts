
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

export const routes: Routes = [
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: '', redirectTo: '/payment-gateway', pathMatch: 'full' }
];
