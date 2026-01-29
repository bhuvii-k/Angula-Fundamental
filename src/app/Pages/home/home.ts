import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'], 
})
export class Home implements OnInit {

  formg!:FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formg = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
     confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  
  onSubmit(): void {
    
      console.log(this.formg.value);
     
   
    }
  
}
