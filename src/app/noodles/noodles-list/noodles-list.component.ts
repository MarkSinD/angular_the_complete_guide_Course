import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Noodle} from "../noodles.model";

@Component({
  selector: 'app-noodles-list',
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.css']
})
export class NoodlesListComponent implements OnInit {
  @Output() noodleWasSelected = new EventEmitter<Noodle>();

  noodles: Noodle[] = [
    new Noodle('seafood noodles', 'Best seafood', 'https://www.americano-pizza.ru/upload/iblock/ed6/ed63f35cd425ea8aeab76e38659db048.JPG'),
    new Noodle('chicken noodles', 'Best chicken', 'https://i.pinimg.com/736x/b6/fb/23/b6fb2382d52dd25e1322ebea2ff2c604.jpg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onNoodleSelected(noodle: Noodle){
    this.noodleWasSelected.emit(noodle);
  }

}
