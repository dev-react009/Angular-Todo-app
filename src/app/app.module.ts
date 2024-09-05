import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // Import your TodoComponent
import { FormsModule } from '@angular/forms'; // <-- Import this
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    TodoComponent, // Declare the TodoComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule for browser support
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap with AppComponent
})
export class AppModule {}
