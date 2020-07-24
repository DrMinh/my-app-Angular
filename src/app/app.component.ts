import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public StringFromApp: string = "string";
  public StringFromChild: string="old string";
  OnGetString(value){
    this.StringFromChild=value;
  }
}
