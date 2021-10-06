import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

headerContent:Array<any> = [
  {
    title:'10,000+ of our users love our products.',
    text:'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
