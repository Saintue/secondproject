import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent {
  cards = [
    {number: 1, title:"Упаковка", tiraje:"Тираж от 50: штук",
    content: "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ." },
    {number: 2, title: "Пакеты", tiraje: "Тираж от 200: штук",
    content: "С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн." },
    {number: 3, title: "Кейсы", tiraje: "Тираж от 30: штук",
    content: "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага."},
    {number: 4, title: "Другие изделия", tiraje: "Тираж от 100: штук",
    content: "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."},
  ];
}
