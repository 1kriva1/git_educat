import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
import { BoldDirective} from './bold.directive';
import { WhileDirective} from './while.directive';
import { DataComponent }   from './data.component';
import {DataService} from './data.service';
import {LogService} from './log.service';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, DataComponent, ChildComponent, BoldDirective, WhileDirective ],
    providers: [DataService, LogService], // регистрация сервисов
    bootstrap:    [ AppComponent ],
})
export class AppModule { }