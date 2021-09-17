import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Noodle} from "../../noodles.model";

@Component({
  selector: 'app-noodles-item',
  templateUrl: './noodles-item.component.html',
  styleUrls: ['./noodles-item.component.css']
})
export class NoodlesItemComponent implements OnInit {

  @Input() noodle: Noodle;
  @Output() noodleSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.noodleSelected.emit();
  }

}
