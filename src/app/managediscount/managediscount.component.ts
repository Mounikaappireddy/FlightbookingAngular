import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managediscount',
  templateUrl: './managediscount.component.html',
  styleUrls: ['./managediscount.component.css']
})
export class ManagediscountComponent implements OnInit {

  myForm :any;
  errorMessage='';
  id: any;
  ReturnData:any=[];
  constructor(private router: Router,private e_adminService: AdminserviceService) { }

  ngOnInit(): void {
   // this.getdata();
    this.myForm = new FormGroup({
      DiscountCoupon: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required])
      });
      this.e_adminService.getdiscount().subscribe(
        data => {
         this.ReturnData = data
         console.log(this.ReturnData);
        },
        error => this.errorMessage = error.message);
  }

 

 RowSelected(DiscountNo:any):void{
  this.e_adminService.deleteDiscount(DiscountNo).subscribe(
    data => {
      this.ReturnData = data
     alert('Coupon deleted successfully.');
    },
    error => this.errorMessage = error.message);
 }
 
  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
    }

  AddDiscountCoupon():void {
    this.e_adminService.AddDiscountCoupon(this.myForm.value.DiscountCoupon,this.myForm.value.Price).subscribe(
       data => {
       
         console.log('Test'+ data)
       
         
        this.myForm.reset();
        this.myForm.clearValidators();
        this.myForm.markAsUntouched();
        alert('Discount Coupon added successfully!');
      },
       error => this.errorMessage = error.message);
   }

   logout():void{  
   
    this.router.navigate(["login"]);  
  }
 
   reloadPage(): void {
     window.location.reload();
   }

}
