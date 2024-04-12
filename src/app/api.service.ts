import { Injectable, Output, EventEmitter } from "@angular/core";
import {map} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";

@Injectable({providedIn : 'root'})

export class APiService{
    redirectUrl: string ='';
    baseUrl:string = "http://localhost/angular_admin/php";
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient: HttpClient){
    }
    public userlogin(username:unknown,password:unknown){
        alert(username);
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { username , password }).pipe(map(Users=>{
            this.setToken(Users[0].name);
            this.getLoggedInName.emit(true);
            return Users;
        }));
    }
    public userregistraction(name:unknown,email:unknown,pwd:unknown){
        return this.httpClient.post<any>(this.baseUrl + '/register.php', {name,email,pwd}).pipe(map(Users=>{
            return Users;
        }));
    }
    setToken(token:string){
        localStorage.setItem('token', token);
    }
    getToken(){
        localStorage.removeItem('token');
    }
    deleteToken(){
        localStorage.removeItem('token');
    }
    isLoggedIn(){
        const usertoken = this.getToken();
        if(usertoken != null){
            return true;
        }
        return false;
    }
}