import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Burger} from "../burger.model";

@Component({
  selector: 'app-burgers-list',
  templateUrl: './burgers-list.component.html',
  styleUrls: ['./burgers-list.component.css']
})
export class BurgersListComponent implements OnInit {
  @Output() burgerWasSelected = new EventEmitter<Burger>()

  burgers: Burger[] = [
    new Burger('beef burger', 'Best beef burger', 'https://taste.co.za/wp-content/uploads/2018/08/Double-beef-burger.png'),
    new Burger('fish burger', 'Best fish burger', 'http://ketchuproom.com/wp-content/uploads/2019/08/fishburger-min-300x300.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onBurgerSelected(burger: Burger){
    this.burgerWasSelected.emit(burger);
  }

}
