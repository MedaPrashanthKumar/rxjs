import { Component, OnInit } from '@angular/core';
import { first, from, Observable } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   categories = ["Mobiles","Some","Highlight","Chargers","TV","Headphones"];
   category$ : Observable<string> = from(this.categories);
  constructor() { }

  ngOnInit(): void {
    this.category$.pipe(
      first()
    ).subscribe(data =>{
      console.log(data);
      
    });
  }

}
