import { Component, OnInit } from '@angular/core';
import {Tabe} from '../tabe';
import {Router} from '@angular/router';
import {TabeService} from '../tabe.service'

@Component({
  selector: 'app-tabeupdate',
  templateUrl: './tabeupdate.component.html',
  styleUrls: ['./tabeupdate.component.css']
})
export class TabeupdateComponent implements OnInit {

  constructor(private router: Router,private tabeService: TabeService) { }
  tabes = new Tabe;

  ngOnInit(): void {
  }
  
  onEdit(){
    
  }
}
