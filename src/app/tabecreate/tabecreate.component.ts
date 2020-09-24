import { formatCurrency } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Tabe} from '../tabe';
import {Router} from '@angular/router';
import {TabeService} from '../tabe.service'



@Component({
  selector: 'app-tabecreate',
  templateUrl: './tabecreate.component.html',
  styleUrls: ['./tabecreate.component.css']
})
export class TabecreateComponent implements OnInit {

  constructor(private router: Router,private tabeService: TabeService) { }
  tabes = new Tabe();

  ngOnInit(): void {
    
  }
  

//  tabes: any = {name:"", description:""}

//  onSubmit(){
//   console.log("submitted");
//   console.log(this.tabes.data);
//   this.tabes
//   // this.router.navigate(['/read'])
//  }

 addPerson(){
   this.tabeService.addPerson(this.tabes)
   .subscribe(data => {
     console.log(data)
     this.router.navigate(['/read'])
   })

 }
 


}
