import { Component, OnInit } from '@angular/core';
import {Burger} from "./burger.model";
import {Roll} from "../rolls/roll.model";

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  selectedBurgers: Burger;

  constructor() { }

  ngOnInit(): void {
  }


}
