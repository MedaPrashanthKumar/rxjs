import { Component, OnInit } from '@angular/core';
import {Observable,from} from 'rxjs';
@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  orders:Observable<string> = from(['fashion','Electronics','Mobile','Household']);
  orderName:any;
  constructor() { }

  ngOnInit(): void {
    this.orders.subscribe(data=>{
      console.log(data);
      // setTimeout(()=>{
      //   this.orderName = data;
      // },3000);
    });
  }

}
