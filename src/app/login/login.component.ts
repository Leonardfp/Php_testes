import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { APiService } from '../api.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  angForm:FormGroup;
  constructor(private fb: FormBuilder, private dataServive: APiService,  private router:Router){
    this.angForm = this.fb.group({
      email: ['',[Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
      
  }
  postdata(angForm1){
    this.dataServive.userlogin(angForm1.value.email,angForm1.value.password).pipe(first()).subscribe(
      data =>{
        const redirect = this.dataServive.redirectUrl ? this.dataServive.redirectUrl: '/dashboard';
        this.router.navigate([redirect]);
      },
      error => {
        alert("User name or password is incorret")
      }
    );
  }
  get email(){return this.angForm.get('email');}
  get password(){return this.angForm.get('password');}

}
