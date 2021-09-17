import { Component, OnInit } from '@angular/core';

import {Roll} from "./roll.model";

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})
export class RollsComponent implements OnInit {
  selectedRoll: Roll;

  constructor() { }

  ngOnInit(): void {
  }

}
