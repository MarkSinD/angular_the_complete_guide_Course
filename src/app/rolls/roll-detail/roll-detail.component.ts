import {Component, Input, OnInit} from '@angular/core';
import {Roll} from "../roll.model";

@Component({
  selector: 'app-roll-detail',
  templateUrl: './roll-detail.component.html',
  styleUrls: ['./roll-detail.component.css']
})
export class RollDetailComponent implements OnInit {
  @Input() roll: Roll;

  constructor() { }

  ngOnInit(): void {
  }

}
