import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private httpClient: HttpClient){}

  addToCart(product){
    this.items.push(product);
  }

  getCart(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.httpClient.get('/assets/shipping.json');
  }

  getTotalPrice(){
    var total = 0;
    for (var i=0; i<this.items.length; i++) {
      total+=this.items[i].price;
    }
    return total;
  }

}