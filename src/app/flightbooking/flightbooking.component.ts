import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-flightbooking',
  templateUrl: './flightbooking.component.html',
  styleUrls: ['./flightbooking.component.css']
})
export class FlightbookingComponent implements OnInit {
 
  
  ReturnData1:any;
    myForm :any;
   errorMessage='';
    MealOpt :any;
    genderOpt:any;
  totalprice:any;
   MealOption = [
      { id: 1, name: "None" },
      { id: 2, name: "Veg" },
      { id: 3, name: "Non-Veg" }
    ];
    selectedMeal: number = 1;
    gender = [
      { id: 1, name: "None" },
      { id: 2, name: "Male" },
      { id: 3, name: "Female" }
    ];
    selectedGen: number = 1;
    seatOnwardjrny = [
      { id: 1, name: "1A" },
      { id: 2, name: "1B" },
      { id: 3, name: "1C" },
      { id: 4, name: "2A" },
      { id: 5, name: "2B" },
      { id: 6, name: "2C" },
      { id: 7, name: "3A" },
      { id: 8, name: "3B" },
      { id: 9, name: "3C" }
    ];
    SelectcOnwardjrny: number = 1;
    seatreturnjrny = [
      { id: 1, name: "1A" },
      { id: 2, name: "1B" },
      { id: 3, name: "1C" },
      { id: 4, name: "2A" },
      { id: 5, name: "2B" },
      { id: 6, name: "2C" },
      { id: 7, name: "3A" },
      { id: 8, name: "3B" },
      { id: 9, name: "3C" }
    ];
    Selectcreturnjrny: number = 1;
    returnOpt:any;
    onwardOpt:any;
    onwardOption:any;
    flight:any;
    price:any; airlineId:any;startDate:any;endDate:any;flightId:any;
    id: any; 
    constructor(private router: Router,private e_userService: UserserviceService, private route:ActivatedRoute) {
    route.queryParams.subscribe((data) => {
      if(data.hasOwnProperty("flight"))
      {
        this.flight = JSON.parse(data["flight"]);
      }
    });
   }
  
    ngOnInit(): void {
      this.id = localStorage.getItem('token');
      if(this.id == null)
      {
        this.router.navigate(['/login']);  
      }
     
  
      this.myForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        contactNo: new FormControl('', [Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        emailId: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        onwardseat: new FormControl('', [Validators.required]),
       ScheduleDays: new FormControl('', [Validators.required]),
        returnseat :new FormControl(),
       DiscountCoupon :new FormControl(),
  //        totalPrice :new FormControl(),
        MealOption :new FormControl(),
        Gender :new FormControl(),
  Price :new FormControl()
      });
    this.route.queryParams.subscribe((data) => {
    if(data.hasOwnProperty("flight"))
    {
      this.flight = JSON.parse(data["flight"]);
    }
  });
    this.e_userService.getdiscount().subscribe(
         data => {
          this.ReturnData1 = data;
          console.log(this.ReturnData1);
        },
         error => this.errorMessage = error.message);
    }
    
    public myError = (controlName: string, errorName: string) =>{
      return this.myForm.controls[controlName].hasError(errorName);
      }
  
    selectOption(id: number) {
      this.MealOpt = id;
      console.log(this.MealOpt); 
    }
    selectGen(id: number) {
     this.genderOpt = id;
      console.log(this.genderOpt); 
    }
    selectonward(id: number) {
      this.onwardOpt = id;
       console.log(this.onwardOpt); 
     }
     selectreturn(id: number) {
      this.returnOpt = id;
       console.log(this.returnOpt); 
     }
  
    BookTicket(data:any):void{
         var data1 = {
           "firstName" : data.firstName,
           "lastName" : data.lastName,
           "gender" : data.Gender,
           "scheduleDays" : data.ScheduleDays,
           "age" : data.age,
           "airlineName" : this.flight.airlinename,
           "FlightId" : this.flight.flightId,
           "contactNo" : data.contactNo,
           "emailId" : data.emailId,
           "onwardDate" : this.flight.startDate,
           "returnDate" : this.flight.returnDate,
           "mealOption" : data.MealOption,
           "price" : this.flight.price,
           "totalPrice" : data.Price,
           "disCoupon" : data.DiscountCoupon,
           "onwardseat" : data.onwardseat,
           "returnseat" : data.returnseat,
           "fromLocation" : this.flight.fromLocation,
           "toLocation" :this.flight.toLocation,
         };

        this.e_userService.BookTicketNow(data1).subscribe(
         data => {
           console.log(data);
          alert('Ticket booked successfully. PNR number='+data.pnrNumber
);
    this.router.navigate(["bookinghistory"]);  
  //         this.myForm.reset();
  //         this.myForm.clearValidators();
  //         this.myForm.markAsUntouched();
         },
         error => this.errorMessage = error.message);
         console.log(this.errorMessage);
      }
  
     Apply(data:any):void{
      this.e_userService.Apply(data.DiscountCoupon).subscribe(
       data => {
    this.ReturnData1 = data;

      this.totalprice=this.flight.price-this.ReturnData1.price;
  
  this.myForm.controls['Price'].setvalue(this.totalprice)
        console.log(this.totalprice);
  
      },
       error => this.errorMessage = error.message);
 

 
   }
   logout():void{  
    
    this.router.navigate(["login"]);  
  } 
}
