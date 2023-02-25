import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {
  searchForm!: FormGroup;
  name!: FormControl;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name : new FormControl('start search')
    });
   this.searchForm.get('name')?.valueChanges.pipe(
    debounceTime(3000)
   ).subscribe(data =>{
    console.log(data);
    
   });
  }

  readValue(){

  }

}
