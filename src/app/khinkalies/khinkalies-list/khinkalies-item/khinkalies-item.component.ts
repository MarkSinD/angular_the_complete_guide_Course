import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Khinkali} from "../../khinkali.model";

@Component({
  selector: 'app-khinkalies-item',
  templateUrl: './khinkalies-item.component.html',
  styleUrls: ['./khinkalies-item.component.css']
})
export class KhinkaliesItemComponent implements OnInit {
  @Input() khinkali: Khinkali;
  @Output() khinkaliSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.khinkaliSelected.emit();
  }
}
