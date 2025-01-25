import { Component } from '@angular/core';

@Component({
  selector: 'app-debugging', // Use this selector in HTML to include the header
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.css']
})
export class DebuggingComponent {
  title: string = 'My Application Debugging'; // Example property for dynamic content
}