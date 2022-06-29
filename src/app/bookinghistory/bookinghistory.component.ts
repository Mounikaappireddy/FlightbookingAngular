import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import jspdf from 'jspdf';
import 'jspdf-autotable'
@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  myForm :any;
   id: any;
   PnrNo:any;
   ticketpnr:any;
   ticketemail:any;
   myFormName:any;
 
  head = [['Airline Name', 'Flight Number', 'PNR Number', 'Passenger Name','Gender','Age',
  'Contact-No','Email Id','Total Price','Onward SeatNo','Return SeatNo','Onward Date','Return Date']]
   rows:any;
  constructor(private router: Router,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      pnrnumber: new FormControl('', [Validators.required]),
    
      });
      this.myFormName = new FormGroup({
      
        emailId: new FormControl('', [Validators.required]),
        });
   
  
  }

 

 GetBookingDetailsPnrNo(data:any):void{
   console.log(data.pnrnumber);
     this.userservice.GetPnrDetails(data.pnrnumber).subscribe(data=>

      {
     console.log(data);
     this.ticketpnr=data;
     console.log(this.ticketpnr);
      })
    
  }
  GetBookingDetailsemailid(data:any):void{
    this.userservice.getbyemailid(data.emailId).subscribe(data=>
     {
    console.log(data);
    this.ticketemail=data;
    console.log(this.ticketemail);
     })
   
 }

  RowSelected(data1:any):void{
    var doc = new jspdf();
    doc.setFontSize(18);
    doc.text('Booked Ticket Details', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);
   
    this.rows = [[data1.airlinename,data1.flightId,data1.pnrNumber,data1.firstName + ' ' +
      data1.lastName,data1.gender,data1.age,data1.contactNo,data1.emailId,data1.totalPrice,data1.onwardseat,data1.returnseat,
      data1.onwardDate,data1.returnDate]];

   (doc as any).autoTable({
      head: this.head,
      body: this.rows,
      theme: 'grid',
      startY: 20,
     columnStyles:{  
            0: {cellWidth: 15, },  
            1: {cellWidth: 15, },  
            2: {cellWidth: 15, },
            3: {cellWidth: 15, },  
            4: {cellWidth: 15, },  
            5: {cellWidth: 10, },
            6: {cellWidth: 15, },  
            7: {cellWidth: 15, },  
            8: {cellWidth: 15, },
            9: {cellWidth: 15, },  
            10: {cellWidth: 15, },
            11: {cellWidth: 15, },
            12: {cellWidth: 15, }
                 },  
        styles: {minCellHeight: 20 },
      didDrawCell:( rows:{column:{ index:any;};}) => {
        console.log(rows.column.index)
      }
    })
       
    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // below line for Download PDF document  
    doc.save('BookingTicket.pdf');
 }

 logout():void{  
  
  this.router.navigate(['/login']);  
}
 reloadPage(): void {
 
}
    


}