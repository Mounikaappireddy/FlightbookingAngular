import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Login } from '../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm :any;
  errorMessage = '';
   Login : Login | undefined;
   
  constructor(private router: Router,private loginservice:UserserviceService) {}
  
    ngOnInit(): void {
      this.myForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        });
    }
   
    public myError = (controlName: string, errorName: string) =>{
      return this.myForm.controls[controlName].hasError(errorName);
      }
     
      login(data:any) : void {
       this.loginservice.Login(data.username,data.password).subscribe(
        (data:any) => {
         this.Login = data

        if(data.hasOwnProperty("token"))
        {
             localStorage.setItem('isLoggedIn',"true");
            localStorage.setItem('token', data.token);

          if(data.hasOwnProperty("isAdmin") && data.isAdmin)
          {            
            this.router.navigate(["admin"]);
          }
          else
          {
            this.router.navigate(["user"]); 
          }
        }
        else{
          alert('Invalid Username and password');
        }

         
        
      },
        error => this.errorMessage = error.message);
    }
  
   NewUser():void{
     this.router.navigate(["userregistration"]);
   }
    reloadPage(): void {
      window.location.reload();
    }

}
