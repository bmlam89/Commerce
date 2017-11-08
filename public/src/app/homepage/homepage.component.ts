import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
declare var jQuery:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  temp = {
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    confirm:''
  }

  users = [];
  exists = false;
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit() 
  {
    this.service.get_users( (response)=>{
      this.users = response.json()['users'];
    })
  }

  register(form)
  {
    for(var user of this.users)
    {
      if(user.email==form.value.email)
      {
        this.exists = true;
      }
    }
    if(!this.exists)
    {
      this.service.email = form.value.email;
      this.service.create_user(form);
      jQuery(".modal").modal("hide");
      this.router.navigate(['browse']);
    }
    else
    {
      this.router.navigate(['']);
    }
    
  }

}
