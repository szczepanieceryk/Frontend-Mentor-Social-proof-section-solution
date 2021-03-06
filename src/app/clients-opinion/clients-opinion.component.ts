import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-opinion',
  templateUrl: './clients-opinion.component.html',
  styleUrls: ['./clients-opinion.component.scss']
})
export class ClientsOpinionComponent implements OnInit {


// data for clients component to loop in ngFor  
clientsData:Array<any> = [
  {
    image:'../../assets/images/image-colton.jpg',
    name: 'Colton Smith',
    opinion:'"We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!"'
  },
  {
    image:'../../assets/images/image-irene.jpg',
    name:'Irene Roberts',
    opinion:'"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
  },
  {
    image:'../../assets/images/image-anne.jpg',
    name:'Anne Wallace ',
    opinion:' "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
