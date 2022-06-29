import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html',
  styleUrls: ['./manageschedule.component.css']
})
export class ManagescheduleComponent implements OnInit {

  myForm :any;
  airLogo :any;
  errorMessage = '';
  id: any;
  ReturnData1:any;
  ReturnData:any;
  constructor(private router: Router,private adminservice:AdminserviceService,private userservice:UserserviceService) { }

  ngOnInit(): void {

   
    
    this.myForm = new FormGroup({
      flightNo: new FormControl('', [Validators.required]),
      airlinename: new FormControl(''),
      fromLocation: new FormControl('', [Validators.required]),
      toLocation: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      ScheduleDays: new FormControl('', [Validators.required])
     
     });
     this.adminservice.getflightdetails().subscribe(
          data => {
           this.ReturnData = data
          // console.log(this.ReturnData);
          },
          error => this.errorMessage = error.message);
      this.adminservice.GetAirlineList().subscribe(
             data => {
              this.ReturnData1 = data;
              console.log(this.ReturnData1);
            },
             error => this.errorMessage = error.message);
        }
      
    public myError = (controlName: string, errorName: string) =>{
          return this.myForm.controls[controlName].hasError(errorName);
          }
       RowSelected(id:any):void{
          this.adminservice.deleteflight(id).subscribe(
            data => {
             alert('Schedule flight data deleted successfully.');
            },
            error => this.errorMessage = error.message);
         }
         logout():void{  
     
              this.router.navigate(["login"]);  
            } 
          AddInventory():void {
                this.adminservice.AddInventory(this.myForm.value.flightNo,this.myForm.value.airlinename,this.myForm.value.fromLocation,this.myForm.value.toLocation,
                  this.myForm.value.price,this.myForm.value.startDate,this.myForm.value.endDate,this.myForm.value.ScheduleDays
                 ).subscribe(
                   data => {
                    
                     console.log('Test'+ data)
                     
                      alert('Schedule flight data added successfully!');
                    this.myForm.reset();
                    this.myForm.clearValidators();
                    this.myForm.markAsUntouched();
                  },
                   error => this.errorMessage = error.message);
               }
  }
 

 





