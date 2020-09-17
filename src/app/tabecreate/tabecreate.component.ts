import { formatCurrency } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Tabe} from '../Tabe';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tabecreate',
  templateUrl: './tabecreate.component.html',
  styleUrls: ['./tabecreate.component.css']
})
export class TabecreateComponent implements OnInit {

  constructor(private router: Router,) { }
  @Input() tabe: Tabe;

  ngOnInit(): void {
    
  }
  

 tabes: any = {name:"", description:""}

 onSubmit(){
  console.log("submitted");
  console.log(this.tabes.data);
  this.tabes
  // this.router.navigate(['/read'])
  
  
 }

}
