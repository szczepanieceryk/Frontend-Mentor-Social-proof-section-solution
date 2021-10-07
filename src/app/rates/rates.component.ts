import { Component } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})

export class RatesComponent  {

  // content for rates component to loop in ngFor
 clientsRates:Array<any> = [
   {
     rate: 'Rated 5 Stars in Reviews',
   },
   {
    rate: 'Rated 5 Stars in Report Guru',
  },
  {
    rate: 'Rated 5 Stars in BestTech',
  },
 ]
 

}
