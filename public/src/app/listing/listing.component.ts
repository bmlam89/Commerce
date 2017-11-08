import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  id;
  products = [];
  temp = {
    url:'',
    title:'',
    desc:'',
    price:'',
    location:''
  }
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

  post_product(form)
  {
    this.service.post_product(form);
    this.router.navigate(['listing']);
  }

}
