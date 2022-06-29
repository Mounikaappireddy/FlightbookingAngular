import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {

  flightsearch:any=[];
    errorMessage = '';
  searchForm:any;

//   OnwardtodayISOString: string;
//   ReturntodayISOString: string;
  constructor(private router: Router, private route:ActivatedRoute, private e_userService: UserserviceService) { }
  
  ngOnInit(): void {
 
  this.searchForm = new FormGroup({
      
    Source: new FormControl('', [Validators.required]),
    Destination: new FormControl('', [Validators.required]),
    });
   
  }
search(data:any):void{
  this.e_userService.search(data.Source,data.Destination).subscribe(
    (data:any) => {
     this.flightsearch = data

  },
    error => this.errorMessage = error.message);
}
public myError = (controlName: string, errorName: string) =>{
      return this.searchForm.controls[controlName].hasError(errorName);
      }
BookFlight(data:any)
{
   console.log(data);
     if(data !=null || data != "")
     { 
       var params = {
         "flight" : JSON.stringify(data)
       }

       this.router.navigate(['flightbooking'],
{ 
  queryParams: params});
    } 

}

onSelectionChange() {

} 
   RowSelected(u:any):void{ 
     
     console.log(u);
     if(u !=null || u != "")
     { 
       this.router.navigate(['flightbooking'],{state: {price:u.price,airlineId:u.airlineName,
        startDate:u.startDate,
        endDate:u.endDate,
        flightId:u.flightId}});
    }    
    }
    logout():void{  
    
      this.router.navigate(["login"]);  
    } 
    
  reloadPage(): void {
    window.location.reload();
  }
backtouser():void{
    this.router.navigate(["user"]);  
}
}
