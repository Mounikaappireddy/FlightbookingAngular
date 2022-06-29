import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  baseUrl : string;
  token:any;
  constructor(private http: HttpClient) { 
    this.baseUrl='http://localhost:28719/api/flight/Airline/Get'
   
  }
  
  GetAirlineList():Observable<any>
{
  this.baseUrl='http://localhost:28719/api/flight/Airline/Get';
  console.log(this.baseUrl);
  return this.http.get(this.baseUrl);
}
getflightdetails():Observable<any>
{
  this.baseUrl='http://localhost:28719/api/flight/Airline/InventoryAdd';
  console.log(this.baseUrl);
  return this.http.get(this.baseUrl);
}
deleteflight(id:any): Observable<any> {
  const AUTH_API = 'http://localhost:28719/api/flight/Airline/inventorydelete?Id='+id;
 
 return this.http.delete(AUTH_API);
}
AddInventory(FlightId :any, AirLineName :any,FromLocation:string,ToLocation:string, Price:any,StartDate:any,
  returnDate:any,ScheduleDays:string): Observable<any> {
const AUTH_API = 'http://localhost:28719/api/flight/Airline/InventoryAdd';
// httpOptions.headers.set("Authorization", "Bearer " + access_token);
// httpOptions.headers.set('Access-Control-Allow-Origin', '*');
return this.http.post(AUTH_API , {
FlightId,
AirLineName,
FromLocation,
ToLocation,
Price,
StartDate,
returnDate,

ScheduleDays

}, httpOptions);
}
public Register(data:any):Observable<any>
{
  const API='http://localhost:28719/api/flight/Airline/Get';
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  return this.http.post(API,JSON.stringify(data),httpOptions);
}
public addairline(data:any):Observable<any>
{
  const API='http://localhost:28719/api/flight/Airline/AddAirLine';
  this.token=localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',"Authorization": "Bearer "+this.token })}
  return this.http.post(API,JSON.stringify(data),httpOptions);
}
deleteairline(airLineId:any): Observable<any> {
  const AUTH_API = 'http://localhost:28719/api/flight/Airline/deleteairline?AirlineId='+airLineId;
 
 return this.http.delete(AUTH_API);
}

UpdateAirline(airlineId:any,AirlineName: string, Logo: string,ContactNo:any,ContactAddress:string,IsBlocked:any,access_token:any): Observable<any> {
  const AUTH_API = 'http://localhost:28719/api/flight/Airline/BlockAirline';
  httpOptions.headers.set("Authorization", "Bearer " + access_token);
  httpOptions.headers.set('Access-Control-Allow-Origin', '*');
  return this.http.put(AUTH_API , {
    airlineId,
    AirlineName,
    Logo,
    ContactNo,
    ContactAddress,
    IsBlocked
  }, httpOptions);
}
public scheduleflight(data:any):Observable<any>
{
  const API='http://localhost:28719/api/flight/Airline/InventoryAdd';
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  return this.http.post(API,JSON.stringify(data),httpOptions);
}
// public Blockairline(airlineName:any):Observable<any>
// {
//   const API='http://localhost:28719/api/flight/Airline/BlockAirline?airlinename='+airlineName;
//   this.token=localStorage.getItem('token');
//   const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',"Authorization": "Bearer "+this.token })}
//     return this.http.put(API,httpOptions);
// }
public Blockairline(airlineId:any):Observable<any>
{
  const API='http://localhost:28719/api/flight/Airline/BlockAirline?airlinename='+airlineId;
  this.token=localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',"Authorization": "Bearer "+this.token })}
    return this.http.put(API,httpOptions);
}
getdiscount(): Observable<any> {
  const AUTH_API = 'http://localhost:28719/api/flight/Airline/GetDiscount';
  
 return this.http.get(AUTH_API , httpOptions);
}

deleteDiscount(DiscountNo:any): Observable<any> {
  const AUTH_API = 'http://localhost:28719/api/flight/Airline/searchbydiscountno?DiscountNo='+DiscountNo;
 
 return this.http.delete(AUTH_API);
}
AddDiscountCoupon(DisCoupon :string,Price:any): Observable<any> {
const AUTH_API = 'http://localhost:28719/api/flight/Airline/Discount';

return this.http.post(AUTH_API,
  {
    DisCoupon,
    Price
  },httpOptions);
}
public unBlockairline(airlineName:any):Observable<any>
{
  const API='http://localhost:28719/api/flight/Airline/unBlockAirline?airlinename='+airlineName;
  this.token=localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',"Authorization": "Bearer "+this.token })}
    return this.http.put(API,httpOptions);
}
}
