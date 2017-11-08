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

  /* user service methods */
  create_user(form)
  {
    var user = new User(form.value.first,form.value.last,form.value.email,form.value.password);
    return this.http.post('/create_user',{'user':user}).subscribe(
      (response)=>{
        console.log("successfully created user");
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
    /*return this.http.post('/post_product',{product:product,id:this.id}).subscribe(
      (response)=>{
        console.log("successfully created product!");
      }
    )*/
  }

}
