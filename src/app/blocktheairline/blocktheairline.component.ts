import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blocktheairline',
  templateUrl: './blocktheairline.component.html',
  styleUrls: ['./blocktheairline.component.css']
})


export class BlocktheairlineComponent implements OnInit {
  id: any;
  result:any;
  myForm:any;
  AirlineList: any;
  errorMessage = '';
  errormessage='';
  AirlineId : any;
  

  constructor(private router: Router,private e_adminService: AdminserviceService) {
 
   }
   title = 'bind-dropdownlist';
   ddlAirline = "";
ngOnInit(): void {
    this.e_adminService.GetAirlineList().subscribe(res=>{
      this.result=res;
          })
  }

  getdata():void{
   
 }

 RowSelected(airLineId:any,airlineName:any,Logo:any,contactNo:any,contactAddress:any,isBlocked:any):void{
  this.e_adminService.UpdateAirline(airLineId,airlineName,Logo,contactNo,contactAddress,isBlocked,this.id).subscribe(
    data => {
     alert('Record updated successfully.')
    },
    error => this.errorMessage = error.message);
 }

  logout():void{  
    console.log('logout');  
    localStorage.removeItem('token');
    this.router.navigate(['/login']);  
  }
}
