import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Temp} from '../temp';
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
  };

  product = new Temp(this.temp,-1);
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
      this.router.navigate(['browse']);
  }

  update_product(form,product_id)
  {
    this.product.url = form.value.url;
    this.product.title = form.value.title;
    this.product.desc = form.value.desc;
    this.product.price = form.value.price;
    this.product.location = form.value.location;
    this.product.id = this.id;
    this.service.update_product(this.product,product_id);
    this.router.navigate(['browse']);
  }
  delete_product(product_id)
  {
    this.service.delete_product(product_id);
    this.router.navigate(['browse']);
  }

}
