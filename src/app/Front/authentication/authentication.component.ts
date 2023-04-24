import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationHttpService } from './authentication-http.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
username: string ='';
userPassword: string ='';
isSignIn: boolean = false;
  constructor(public authService: AuthenticationHttpService,
    public router: Router) { }

  ngOnInit(): void {
  }
  signIn() {
    console.log("user is ", this.username, this.userPassword);
    
        this.authService.signIn(this.username, this.userPassword).subscribe((tokenDto) => {
          
                 localStorage.setItem('authToken', tokenDto);
                 this.router.navigateByUrl('/nav');

             }, (error: HttpErrorResponse) => {
                 console.error(error);
                 this.isSignIn = true;
             }, 
        
        );

    }


  }
