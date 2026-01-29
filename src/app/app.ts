import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./Pages/home/home";
import { About } from "./Pages/about/about";
import { Contact } from "./Pages/contact/contact";
import { Compan } from "./Pages/compan/compan";

@Component({
  selector: 'app-compo',
  imports: [RouterOutlet, Home, About, Contact, Compan],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My-project');
}
