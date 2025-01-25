import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DebuggingModule } from './debugging/debugging.module';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule ,
    DebuggingModule
        
  ],
  providers: [],
  bootstrap: [] 
})
export class AppModule { }