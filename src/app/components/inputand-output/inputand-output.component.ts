import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inputand-output',
  templateUrl: './inputand-output.component.html',
  styleUrls: ['./inputand-output.component.css']
})
export class InputandOutputComponent implements OnInit {
  @Input('StringSend') StringGet : string = 'Old String';
  @Output('StringOut') StringInput=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  updateOutput(event){
    this.StringInput.emit(event.target.value);
  }
}
