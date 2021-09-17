import { Component, OnInit } from '@angular/core';
import {Noodle} from "../noodles/noodles.model";

@Component({
  selector: 'app-khinkalies',
  templateUrl: './khinkalies.component.html',
  styleUrls: ['./khinkalies.component.css']
})
export class KhinkaliesComponent implements OnInit {
  selectedKhinkali: Noodle;

  constructor() { }

  ngOnInit(): void {
  }

}
