import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  id;
  deletedid = [];
  products = [];
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit() 
  {
    this.id = this.service.id;
    this.service.get_products(
      (response)=>{
        this.products = response.json()['products'];
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

}
