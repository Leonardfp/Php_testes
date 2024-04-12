import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { APiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  loginbtn: boolean;
 logoutbtn: boolean;

 constructor(private dataService:APiService){
  dataService.getLoggedInName.subscribe(name=> this.changeName(name));
  if(this.dataService.isLoggedIn()){
    console.log("Loggedin");
    this.loginbtn=false;
    this.logoutbtn=true;
  }
  else{
    this.loginbtn=true;
    this.logoutbtn=false;
  }
 }
 private changeName(name:boolean):void
{
  this.loginbtn = name;
  this.logoutbtn= !name;
}
logout(){
  this.dataService.deleteToken();
  window.location.href = window.location.href;
}
}