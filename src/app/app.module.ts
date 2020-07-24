import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { SamplecComponent } from './components/samplec/samplec.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { InputandOutputComponent } from './components/inputand-output/inputand-output.component';
import { PipeComponent } from './components/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SamplecComponent,
    TwoWayBindingComponent,
    DirectiveComponent,
    InputandOutputComponent,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
