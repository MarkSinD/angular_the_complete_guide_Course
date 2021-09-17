import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Burger} from "../../burger.model";

@Component({
  selector: 'app-burgers-item',
  templateUrl: './burgers-item.component.html',
  styleUrls: ['./burgers-item.component.css']
})
export class BurgersItemComponent implements OnInit {
  @Input() burger: Burger;
  @Output() burgerSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.burgerSelected.emit();
  }

}
