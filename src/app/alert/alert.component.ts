import { Component } from '@angular/core';

@Component({
    selector: 'alert-msg',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent{
    message:string='Warning';
}