import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public product:any = [];
  public total:number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getProducts().
    subscribe(res=> {
      this.product = res;
          this.total = 0;
        for (let i = 0; i < this.product.length; i++) {
          this.total += this.product[i].price;
        }

    })
  }

  removeCartItem(item:any) {
    this.cartService.removeCartItem(item);
  }
  clearCart(){
    this.cartService.removeAllCart();
  }
}
