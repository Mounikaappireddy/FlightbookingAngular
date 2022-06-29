import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  myForm:any;
  cancelpnr:any;
  constructor(private router: Router,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      
      pnrnumber: new FormControl('', [Validators.required]),
      });
  }

  
 cancelBookingDetailsemailid(data:any):void{
   
  this.userservice.cancelticketbypnr(data.pnrnumber).subscribe(data=>
   {
     this.cancelpnr=data;
    alert("Successfully cancelled the ticket");
   })
  this.myForm.reset();
}

  

 logout():void{  
  this.router.navigate(["login"]);
}
 reloadPage(): void {
 
}
    


}
