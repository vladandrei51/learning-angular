import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

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

  getTotalPrice(){
    var total = 0;
    for (var i=0; i<this.items.length; i++) {
      total+=this.items[i].price;
    }
    return total;
  }

  constructor() { }

}