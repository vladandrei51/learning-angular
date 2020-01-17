import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  clickedProduct;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
    {
      this.clickedProduct = products[params.get('productId')];
    });
  }

  addToCart(clickedProduct){
    this.cart.addToCart(this.clickedProduct);
    window.alert('Item added to the cart');
  }

}