import {Component, OnInit, OnChanges} from '@angular/core';
import {ServiceService} from "../../../service/service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public product:any = [];
  public Total:number = 0;
  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceService.getProducts().
    subscribe(res=> {
      this.product = res;
          this.Total = 0;
        for (let i = 0; i < this.product.length; i++) {
          this.Total += this.product[i].price;
        }

    })
  }

  removeCartItem(item:any) {
    this.serviceService.removeCartItem(item);
  }
  emptyCart(){
    this.serviceService.removeAllCart();
  }
}
