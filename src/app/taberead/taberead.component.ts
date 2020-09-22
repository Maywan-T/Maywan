import { Component, OnInit } from '@angular/core';
import {Tabe} from '../tabe';
import {TabeService} from '../tabe.service' 

@Component({
  selector: 'app-taberead',
  templateUrl: './taberead.component.html',
  styleUrls: ['./taberead.component.css']
})
export class TabereadComponent implements OnInit {

  constructor(private tabeService:TabeService) { }

  tabe: Tabe [];


  ngOnInit(): void {
    this.tabe = [
      {"id":1,
     "name": "Jet",
     "description":"tall"
    },
   {
    "id":1,
    "name": "Mawan",
    "description":"tall"
   }
    ];
    this.getAllPeople()
  }
  
   
  ondelete(){
    console.log("deleted")
  }
  onedit(){
    console.log("edited")
  }

  getAllPeople(){
    this.tabeService.getPeople()
    .subscribe(data => {
      console.log(data)
      this.tabe=data; 
    })
  }

  

 
}
