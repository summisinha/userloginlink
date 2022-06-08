import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { Userlog } from '../userlog';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  loginuser:any;

  userlog:Userlog = new Userlog();

  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit() {


  }
  userLogin(){
    console.log(this.userlog)
   this.loginuserservice.loginuser(this.userlog).subscribe(data1=>{
    alert("Login Successfuly")
   },error=>alert("Sorry, Please use correct username and password"))

   }
  

  }


