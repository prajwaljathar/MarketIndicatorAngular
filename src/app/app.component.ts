import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { DebuggingModule } from './debugging/debugging.module'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,CommonModule, DebuggingModule]
})
export class AppComponent {
  title = 'marketindicatorangular';
}
