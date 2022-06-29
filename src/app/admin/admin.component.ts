import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
id:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('token');
    if(this.id==null)
    {
      this.router.navigate(["login"]);
    }
  }
  logout():void{  
  console.log('logout');
  localStorage.removeItem('token');
  this.router.navigate(["login"])
  }
}
