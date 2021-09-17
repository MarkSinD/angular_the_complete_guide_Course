import {Component, Input, OnInit} from '@angular/core';
import {Steak} from "../steak.model";

@Component({
  selector: 'app-steaks-detail',
  templateUrl: './steaks-detail.component.html',
  styleUrls: ['./steaks-detail.component.css']
})
export class SteaksDetailComponent implements OnInit {
  @Input() steak: Steak;

  constructor() { }

  ngOnInit(): void {
  }

}
