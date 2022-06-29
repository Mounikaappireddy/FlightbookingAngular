import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  data:any;

  constructor(private http: HttpClient) { }
  
 public Register(data:any):Observable<any>
{
  const API='http://localhost:4155/api/Login/UserRegister';
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  return this.http.post(API,JSON.stringify(data),httpOptions);
}
public Login(username:any,password:any):Observable<any>
{
  const API='http://localhost:4155/api/Login/Login?userId='+username+"&password="+password;
  // const httpOption = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
 
  return this.http.get(API);
}

public GetPnrDetails(pnrnumber:any)
{
  
  const API='http://localhost:15684/flight/Ticket/searchpnrnumber?pnrnumber='+pnrnumber;
  console.log(API);
  return this.http.get(API);
}
public getbyemailid(emailId:any)
{
  const API='http://localhost:8000/api/flight/Booking/searchbyemail?emailid='+emailId;
  return this.http.get(API);
}
public cancelticketbypnr(pnrnumber:any)
{
  const API='http://localhost:8000/api/flight/Booking/searchpnrnumber?pnrnumber='+pnrnumber;
  return this.http.delete(API);
}
search(Source:any,Destination:any): Observable<any> {
      const API = 'http://localhost:8000/api/flight/Booking/searchdetails?fromlocation='+Source+"&tolocation="+Destination;
      const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  return this.http.get(API)
    }
  
  //   BookTicket(bookflight:any): Observable<any> {
  //     const API = 'http://localhost:8000/api/flight/Booking/TicketBooking';
  //      const httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  // return this.http.post(API,JSON.stringify(bookflight),httpOptions);
  //   }
  BookTicketNow(data:any): Observable<any> {
        const API = 'http://localhost:8000/api/flight/Booking/TicketBooking';
         const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.post(API,data,httpOptions);
      }
    getdiscount(): Observable<any> {
      const AUTH_API = 'http://localhost:28719/api/flight/Airline/GetDiscount';
      
     return this.http.get(AUTH_API);
    }
    Apply(DiscountCoupon:any): Observable<any> {
      const AUTH_API = 'http://localhost:28719/api/flight/Airline/Getdiscountcoupon?CouponNo='+DiscountCoupon;
      
     return this.http.get(AUTH_API);
    }
}
