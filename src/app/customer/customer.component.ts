import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title: any = 'Rock \"n Roll Hall of Fame';
  customers: Customer[] = [
    {
      customerNo: 1,
      name: 'Paul Mccartney',
      address: '21st Jump Street',
      city: 'Liverpool',
      country: 'England'
    },
    {
      customerNo: 2,
      name: 'George Harrison',
      address: '22nd Jump Street',
      city: 'Liverpool',
      country: 'England'
    },
    {
      customerNo: 3,
      name: 'CM Punk',
      address: '23rd Bakery',
      city: 'Liverpool',
      country: 'England'
    },
    {
      customerNo: 4,
      name: 'Daniel Brian',
      address: 'WEE',
      city: 'Liverpool',
      country: 'England'
    },
    {
      customerNo: 5,
      name: 'Roger Waters',
      address: 'Abbey Road',
      city: 'Washington DC',
      country: 'England'
    }
  ];

  employees = [
    {
      name: 'Rahul', email: 'rahul@gmail.com',
      skills: [{skill: 'Angular', exp: '2'}, {skill: 'Javascript', exp: '7'}, {skill: 'TypeScript', exp: '3'}
      ]
    },
    {
      name: 'Sachin', email: 'sachin@gmail.com',
      skills: [{skill: 'Angular', exp: '1'}, {skill: 'Android', exp: '3'}, {skill: 'React', exp: '2'}
      ]
    },
    {
      name: 'Laxman', email: 'laxman@gmail.com',
      skills: [{skill: 'HTML', exp: '2'}, {skill: 'CSS', exp: '2'}, {skill: 'Javascript', exp: '1'}
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
