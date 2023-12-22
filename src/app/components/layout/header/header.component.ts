import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../../service/service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  public TotalItem : number = 0;
constructor(private serviceService: ServiceService) {}
  ngOnInit() {
  this.serviceService.getProducts().subscribe(res=>{
  this.TotalItem = res.length;
  })
  }
}
