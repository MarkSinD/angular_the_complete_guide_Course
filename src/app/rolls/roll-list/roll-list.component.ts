import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Roll} from "../roll.model";

@Component({
  selector: 'app-roll-list',
  templateUrl: './roll-list.component.html',
  styleUrls: ['./roll-list.component.css']
})
export class RollListComponent implements OnInit {
  @Output() rollWasSelected = new EventEmitter<Roll>();
  rolls: Roll[] = [
    new Roll('California', 'Best California', 'https://sushidom31.ru/media/cache/6e/43/6e431835d0a2f69396d25353bc99b377.jpg'),
    new Roll('Philadelphia', 'Best Philadelphia', 'https://sun1-99.userapi.com/KK88f0NIAP2R6LLYqnYPwNAnor5gD_dgAb73oA/PR3E-B4u7Ik.jpg')
  ]


  array: Number[] = [1,2,3,4,5,6,7,8,9,0];

  constructor() { }

  ngOnInit(): void {
  }

  onRollSelected(roll: Roll){
    this.rollWasSelected.emit(roll);
  }

}
