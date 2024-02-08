import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItemList : any = [];
    private productList = new BehaviorSubject<any>([]);
  constructor() { }
    getProducts(){
      return this.productList.asObservable();
    }

  setProducts(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product:any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList);
  }




  removeCartItem(product:any){
    for(let i =0; i <this.cartItemList.length; i++) {
      if (product.id === this.cartItemList[i].id){
        if(this.cartItemList.length == 1){
          this.cartItemList = [];
          this.productList.next(this.cartItemList);
          break;
        }
        this.cartItemList.splice(i,1);
        this.productList.next(this.cartItemList);
        break;
      }
      }
    }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
