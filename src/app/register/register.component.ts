import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, Form } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { APiService } from '../api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  angForm:FormGroup;
  constructor(private fb:FormBuilder, private dataService: APiService, private router:Router){
    this.angForm = this.fb.group({
      emial:['',[Validators.required,Validators.minLength(1),Validators.email]],
      password: ['',Validators.required],
      name: ['',Validators.required],
      mobile:['',Validators.required]
    });
  }

  ngOnInit() {
      
  }
  postdata(angForm1){
    this.dataService.userregistraction(angForm1.value.name,angForm1.value.email,angForm1.value).pipe(first()).subscribe(
      data=>{
        this.router.navigate(['login']);
      },
      error=>{

      }
    );
  }

  get email() {return this.angForm.get('email');}
  get password() {return this.angForm.get('password');}
  get name() {return this.angForm.get('name');}
}
