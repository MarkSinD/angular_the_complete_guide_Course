import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Steak} from "../../steak.model";

@Component({
  selector: 'app-steaks-item',
  templateUrl: './steaks-item.component.html',
  styleUrls: ['./steaks-item.component.css']
})
export class SteaksItemComponent implements OnInit {

  @Input() steak: Steak;
  @Output() steakSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.steakSelected.emit();
  }

}
