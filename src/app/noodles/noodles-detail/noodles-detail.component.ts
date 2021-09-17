import {Component, Input, OnInit} from '@angular/core';
import {Noodle} from "../noodles.model";

@Component({
  selector: 'app-noodles-detail',
  templateUrl: './noodles-detail.component.html',
  styleUrls: ['./noodles-detail.component.css']
})
export class NoodlesDetailComponent implements OnInit {
  @Input() noodle: Noodle;

  constructor() { }

  ngOnInit(): void {
  }

}
