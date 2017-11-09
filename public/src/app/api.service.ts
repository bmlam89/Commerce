import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import {Product} from './product';
@Injectable()
export class ApiService {

  constructor(private http:Http) { }
  
  /* user service variables */
  email;
  password;
  id;
  users = []
  /* product service variables */
  products = [];
  deletedid = [];

  /* user service methods */
  
  create_user(form,callback)
  {
    
    var user = new User(form.value.first,form.value.last,form.value.email,form.value.password);
    return this.http.post('/create_user',{user:user}).subscribe(
      (response)=>{
        callback(response);
      }
    )
  }

  get_users(callback)
  {
    return this.http.get('/users').subscribe(
      (response) => {
        callback(response);
      }
    )
  }

  signin(callback)
  {
    return this.http.post('/signin',{email:this.email,password:this.password}).subscribe(
      (response)=>{
        callback(response);
        this.products = response.json()['products'];
      }
    )
  }

  /* product service methods */
  get_products(callback)
  {
    return this.http.get('/products').subscribe(
      (response)=>{
        callback(response);
      }
    )
  }

  post_product(form)
  {
    var product = new Product(form,this.id);
    console.log(product,"INSIDE SERVICE");
    return this.http.post('/post_product',{product:product}).subscribe(
      (response)=>{
        console.log("successfully created product!");
      }
    )
  }

  update_product(form,id)
  {
    return this.http.post('/update_product',{product:form,id:id}).subscribe(
      (response)=>{
        console.log("successfully updated product");
      }
    )
  }

  delete_product(id)
  {
    return this.http.post('/delete_product',{id:id}).subscribe(
      (response)=>{
        console.log("successfully deleted listing");
      }
    )
  }

}

