import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  students: Observable<string[]> = of(['mark','sita','ram']);
  studentname :Observable<string> = of('ram')
  studentObj ={
    id : 10,
    name : 'ram'
  }

  student$:Observable<any> = of(this.studentObj)
  constructor() { }

  ngOnInit(): void {
    this.students.subscribe(data =>{
      console.log(data);
    });

    this.studentname.subscribe(data =>{
      console.log(data);
    });

    this.student$.subscribe(data =>{
      console.log(data);
    });
  }

}
