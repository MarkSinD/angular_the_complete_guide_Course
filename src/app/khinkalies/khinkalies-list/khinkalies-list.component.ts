import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Khinkali} from "../khinkali.model";

@Component({
  selector: 'app-khinkalies-list',
  templateUrl: './khinkalies-list.component.html',
  styleUrls: ['./khinkalies-list.component.css']
})
export class KhinkaliesListComponent implements OnInit {
  @Output() khinkaliWasSelected = new EventEmitter<Khinkali>()

  khinkalies: Khinkali[] = [
    new Khinkali('khinkali with lamb', 'Best seafood', 'https://beeyor.tj/wp-content/uploads/2020/11/2.png'),
    new Khinkali('khinkali with beef', 'Best seafood', 'http://traktir-tbilisi.ru/images/stories/virtuemart/product/resized/ХИНКАЛИ_350x350.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onKhinkaliSelected(khinkali : Khinkali){
    this.khinkaliWasSelected.emit(khinkali);
  }

}
