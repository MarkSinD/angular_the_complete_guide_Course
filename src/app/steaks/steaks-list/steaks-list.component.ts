import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Steak} from "../steak.model";

@Component({
  selector: 'app-steaks-list',
  templateUrl: './steaks-list.component.html',
  styleUrls: ['./steaks-list.component.css']
})
export class SteaksListComponent implements OnInit {
  @Output() steakWasSelected = new EventEmitter<Steak>();

  steaks: Steak[] = [
    new Steak('rib eye steak', 'Best rib eye', 'https://to2directory.com/media/djmediatools/cache/4-restaurant/300x300-towidth-100-steak.jpg'),
    new Steak('tibon', 'Best tibon', 'https://beeyor.tj/wp-content/uploads/2020/03/t-bon-stolichnyy-300x300.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSteakSelected(steak: Steak){
    this.steakWasSelected.emit(steak);
  }

}
