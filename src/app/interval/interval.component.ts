import { Component, OnInit } from '@angular/core';
import { from, Observable ,interval} from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  orders:Observable<string> = from(['fashion','Electronics','Mobile','Household']);
  orderName:any;
  constructor() { }

  ngOnInit(): void {
    this.orders.subscribe(data=>{
      const seqNum$ = interval(2000);
        seqNum$.subscribe(num =>{

          if(num<5){
            console.log(data + num);
          }
        });
      
    });
  }

}
