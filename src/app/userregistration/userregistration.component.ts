import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  myForm :any;
  id: any;
  errorMessage = '';
  today = new Date();
  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      UserID: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      EmailID: new FormControl('', [Validators.required]),
      Isadmin: new FormControl('', [Validators.required]),
      Role: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Gender:new FormControl('', [Validators.required])
    });
  }
 
  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
    }

     AddNewUser(userdata:any):void{
      userdata.Isadmin=false;
      userdata.Role="User";
      this.userservice.Register(userdata)
        .subscribe(res => {
             alert("User Registered Sucessfully");
           //console.log(data);
         
         this.myForm.reset();
         },
         error => this.errorMessage = error.message);
         console.log(this.errorMessage);
       }
       
       login():void{  

        this.router.navigate(["login"]);
        }
}
