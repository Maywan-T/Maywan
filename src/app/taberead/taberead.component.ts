import { Component, OnInit } from '@angular/core';
import {Tabe} from '../Tabe';

@Component({
  selector: 'app-taberead',
  templateUrl: './taberead.component.html',
  styleUrls: ['./taberead.component.css']
})
export class TabereadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.tabe = [
      {"id":1,
     "name": "Jet",
     "description":"tall"
    
  }
    ]
  }
  tabe: Tabe [
    
  ];
   ChildCurrentValue:string;
   
  ondelete(){
    console.log("deleted")
  }
  onedit(){
    console.log("edited")
  }

  

 
}
