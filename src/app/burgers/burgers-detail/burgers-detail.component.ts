import {Component, Input, OnInit} from '@angular/core';
import {Burger} from "../burger.model";

@Component({
  selector: 'app-burgers-detail',
  templateUrl: './burgers-detail.component.html',
  styleUrls: ['./burgers-detail.component.css']
})
export class BurgersDetailComponent implements OnInit {
  @Input() burger: Burger;

  constructor() { }

  ngOnInit(): void {
  }

}
