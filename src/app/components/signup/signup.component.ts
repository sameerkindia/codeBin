import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private route: Router) {}

  register(regForm: NgForm) {
    console.log(regForm.value);
    this.route.navigate(['/login']);
  }

  reset(regForm: NgForm) {
    regForm.reset();
  }
}
