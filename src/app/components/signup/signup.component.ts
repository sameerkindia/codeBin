import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService, private route: Router) {}

  register(regForm: NgForm) {
    this.authService.registerUser(regForm.value.email, regForm.value.password);
    // this.route.navigate(['/login']);
  }

  reset(regForm: NgForm) {
    regForm.reset();
  }
}
