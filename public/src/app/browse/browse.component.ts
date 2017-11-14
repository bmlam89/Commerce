import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
declare var jQuery:any;
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  id;
  deletedid = [];
  products = [];
  users = [];
  userid;
  modal = false;
  searchx = false;
  temp;
  seen = {};
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit() 
  {
    this.id = this.service.id;
    this.service.get_products(
      (response)=>{
        this.products = response.json()['products'];
      }
    );
    this.service.get_users(
      (response)=>{
        this.users = response.json()['users'];
      }
    )
  }

  delete_product(id)
  {
    this.service.delete_product(id);
    
        this.deletedid = this.service.deletedid;
        this.service.get_products(
          (response)=>{
            this.products = response.json()['products'];
          }
        )   
  }

  contact_seller(id){
    this.userid = id;
    this.modal = true;
  }

  close(){
    this.modal = false;
  }

  browse(value){
    //console.log(value,"TEST");
    for(var product of this.products){
      if(value == product.title){
        this.seen[value]=value;
        this.searchx = true;
        console.log('inside here');
        /*this.temp = product.title;
        console.log("INSIDE HERE!",value);*/
        jQuery(".testtest").hide();
      }
    }
    if(!(value in this.seen)){
        this.searchx = false;
        jQuery(".testtest").show();
      }
    }
}
