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
    
    
    
    
    /*for(var user of this.users)
    {
      if(user.email==form.value.email)
      {
        this.exists = true;
        this.router.navigate(['register']);
        console.log("email exists",form.value.email)
      }
    }
    if(!this.exists)
    {
      console.log('made it inside here')
      this.service.email = form.value.email;
      this.service.create_user(form);
      jQuery(".modal").modal("hide");
      this.router.navigate(['browse']);
    }
    /*else
    {
      this.router.navigate(['']);
    }*/
    
  }

}




      /*(response) => {
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
      }*/