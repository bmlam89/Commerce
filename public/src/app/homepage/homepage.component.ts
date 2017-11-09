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

  blam;
  users = [];
  exists = false;
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit() 
  {
    this.service.get_users( (response)=>{
      this.users = response.json()['users'];
      console.log("inside registration component",this.users);
    })
  }

  register(form)
  {
    this.service.create_user(form,
      (response)=>{
        
        if(response.json()['users'].length == 1)
        {
          this.exists = false;
          this.service.id = response.json()['users'][0]._id;
          console.log(this.service.id,"user id that we're hoping successfully created");
          jQuery(".modal").modal("hide");
          this.router.navigate(['browse']);          
        }
        else
        {
          this.exists = true;
          this.router.navigate(['register']);
        }
    })
  }
}