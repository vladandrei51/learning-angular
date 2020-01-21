import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  total;

  constructor(private cart: CartService, private formBuilder: FormBuilder) {
    this.items = this.cart.getCart();
    this.total = this.cart.getTotalPrice();

    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {}

  onSubmit(customerData) {
    //Process the order

    this.items = this.cart.clearCart();
    this.checkoutForm.reset();
  }
}
