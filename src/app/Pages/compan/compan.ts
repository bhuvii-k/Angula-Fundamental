import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compa',
  standalone: true,
  templateUrl: './compan.html',
  styleUrls: ['./compan.css'],
})
export class Compan {
  @Input("title")
   a!: string;
}
