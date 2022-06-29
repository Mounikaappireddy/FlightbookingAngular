import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-manageairline',
  templateUrl: './manageairline.component.html',
  styleUrls: ['./manageairline.component.css']
})
export class ManageairlineComponent implements OnInit {

  myForm :any;
  airLogo :any;
  errorMessage = '';
  id: any;
  ReturnData:any;
  constructor(private router: Router,private adminservice:AdminserviceService) { }

  ngOnInit(): void {

    this.id = localStorage.getItem('token');
    if(this.id == null)
    {
      this.router.navigate(['/login']);  
    }
    
    this.myForm = new FormGroup({
      airLineName: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      contactAddress: new FormControl('', [Validators.required]),
      IsBlocked: new FormControl('', [Validators.required]),
     });
     this.adminservice.GetAirlineList().subscribe(
      data => {
       this.ReturnData = data
       console.log(this.ReturnData);
      },
      error => this.errorMessage = error.message);
  }
  RowSelected(airLineId:any):void{
    this.adminservice.deleteairline(airLineId).subscribe(
      data => {
        this.ReturnData = data
        console.log(this.ReturnData);
       alert('Airline deleted successfully.')
      },
      error => this.errorMessage = error.message);
   }
 
 public myError = (controlName: string, errorName: string) =>{
      return this.myForm.controls[controlName].hasError(errorName);
      }

  AddNewAirline(data:any) : void {
    data.IsBlocked=0;
    this.adminservice.addairline(data)
    .subscribe(res => {
         var data=res;
         alert("Airline Data Added Sucessfully");
     this.myForm.reset();
     this.myForm.clearValidations();
     },
     error => this.errorMessage = error.message);
     console.log(this.errorMessage);
   
    
  }

logout():void{
  this.router.navigate(["login"])
}

}
