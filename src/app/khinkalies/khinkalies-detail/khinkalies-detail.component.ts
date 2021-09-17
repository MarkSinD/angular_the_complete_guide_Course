import {Component, Input, OnInit} from '@angular/core';
import {Khinkali} from "../khinkali.model";

@Component({
  selector: 'app-khinkalies-detail',
  templateUrl: './khinkalies-detail.component.html',
  styleUrls: ['./khinkalies-detail.component.css']
})
export class KhinkaliesDetailComponent implements OnInit {
  @Input() khinkali: Khinkali;

  constructor() { }

  ngOnInit(): void {
  }

}
