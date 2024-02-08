import {Component}  from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartService} from "../../../../services/cart.service";

interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent {
  /*import
  cardsDbOriginal = [
    {number: 1, title:"Упаковка", tiraje:"Тираж от 50: штук",
    content: "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.",
    type: "упаковка"},
    {number: 2, title: "Пакеты", tiraje: "Тираж от 200: штук",
    content: "С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.",
    type: "пакеты"},
    {number: 3, title: "Кейсы", tiraje: "Тираж от 30: штук",
    content: "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.",
    type: "кейс"},
    {number: 4, title: "Другие изделия", tiraje: "Тираж от 100: штук",
    content: "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.",
    type: "другое"},
    {number: 1, title:"Упаковка", tiraje:"Тираж от 50: штук",
      content: "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.",
      type: "упаковка"},
    {number: 2, title: "Пакеты", tiraje: "Тираж от 200: штук",
      content: "С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.",
      type: "пакеты"},
    {number: 3, title: "Кейсы", tiraje: "Тираж от 30: штук",
      content: "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.",
      type: "кейс"},
    {number: 4, title: "Другие изделия", tiraje: "Тираж от 100: штук",
      content: "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.",
      type: "другое"},
  ];


  cardsCopy = this.cardsDbOriginal.slice();
  sortCards(sort:string):void {
    this.cardsCopy = this.cardsDbOriginal.slice();
    this.cardsCopy = this.cardsCopy.filter(elem => elem.type.indexOf(sort.toLowerCase()) != -1)
  }
  response: any;
  */
  constructor(private http: HttpClient, private cartService : CartService) {
  }

  products$ = this.http.get<Product[]>("https://fakestoreapi.com/products");


  cardsSortJewelery(){
    this.products$ = this.http.get<Product[]>('https://fakestoreapi.com/products/category/jewelery');
  }
addToCart(item: any){
this.cartService.addToCart(item);
}


}

