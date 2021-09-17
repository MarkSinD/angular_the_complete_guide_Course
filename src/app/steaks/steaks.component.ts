import { Component, OnInit } from '@angular/core';
import {Steak} from "./steak.model";

@Component({
  selector: 'app-steaks',
  templateUrl: './steaks.component.html',
  styleUrls: ['./steaks.component.css']
})
export class SteaksComponent implements OnInit {
  selectedSteak: Steak;

  constructor() { }

  ngOnInit(): void {
  }

}
