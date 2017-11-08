import { Component, OnInit, ViewChild } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
declare var jQuery:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  temp = {
    email:'',
    password:''
  }
  
  users = [];
  user;
  attempt = false;
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit() 
  {
  }

  login(form)
  {
    this.service.email = this.temp.email;
    this.service.password = this.temp.password;
    this.service.signin(
      (response) => {
        this.users = response.json()['user'];
        if(this.users.length==0)
        {
          this.attempt = true;
          this.router.navigate(['']);
        }
        else
        {
          this.service.id = this.users[0]._id;
          this.attempt = true;
          jQuery(".modal").modal("hide");
          this.router.navigate(['browse']); 
        }
      }
    )
  }
}
