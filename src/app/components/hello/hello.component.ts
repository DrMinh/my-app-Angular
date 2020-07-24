import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public Ten:string='Heo Héo';
  public color:string='red';
  constructor() { }

  ngOnInit(): void {
  }
  showInfo(){
    return `Ten: ${this.Ten}`;
  }
  onKeyUp(event){
    console.log(event.target.value);
    this.color=event.target.value;
  }
}
