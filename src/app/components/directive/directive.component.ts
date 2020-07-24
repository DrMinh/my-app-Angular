import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  public Age: number = 10;
  public ListName: string[] = ['Nguyen Van A','Tran Van B','Phan Thi C','Vo Thi D'];
  public ListProduct: any[]=[
    {
      id: 1,
      name: 'Coffe',
      action: 'drink'
    },
    {
      id: 2,
      name: 'Chicken',
      action: 'eat'
    },
    {
      id: 3,
      name: 'meat',
      action: 'eat'
    },
    {
      id: 4,
      name: 'Tea',
      action: 'drink'
    },
    {
      id: 5,
      name: 'Coke',
      action: 'Nothing'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    //this.Age=20;
  }

}
