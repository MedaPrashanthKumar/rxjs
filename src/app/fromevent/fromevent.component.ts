import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit {

  @ViewChild('validate')
  validate!: ElementRef;

  @ViewChild('getLink')
  getLinkData!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  rxJsEventObservable(){
    const btnObservable = fromEvent(this.validate?.nativeElement,'click')
    btnObservable.subscribe(data=>{
      console.log(data);
    });

  }

  getEventObservable(){
    const btnObservable1 = fromEvent(this.getLinkData?.nativeElement,'mouseover')
    btnObservable1.subscribe(data=>{
      console.log(data);
    });
  }

  
}
