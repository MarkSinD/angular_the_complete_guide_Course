import { Component, OnInit } from '@angular/core';
import {Noodle} from "./noodles.model";

@Component({
  selector: 'app-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.css']
})
export class NoodlesComponent implements OnInit {
  selectedNoodle: Noodle;

  constructor() { }

  ngOnInit(): void {
  }

}
