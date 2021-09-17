import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Roll} from "../../roll.model";

@Component({
  selector: 'app-roll-item',
  templateUrl: './roll-item.component.html',
  styleUrls: ['./roll-item.component.css']
})
export class RollItemComponent implements OnInit {

  @Input() roll: Roll;
  @Output() rollSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.rollSelected.emit();
  }

}
