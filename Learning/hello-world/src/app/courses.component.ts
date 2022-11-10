import { Component, NgModule } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector : 'courses',
    template:`
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img style="width: 100px;" src="{{ image }}" />
        <br/>
        <br/>
        <img style="width: 100px;" [src]="image" />
        <table>
            <td [attr.colspan]="colSpan">Table Value</td>
        </table>

        <button class="btn btn-primary" [class.active]="isActive"> Class Binding </button>
        <br/>
        <br/>
        <button [style.backgroundColor]="isActive ? '#ccc' : 'white'">Style Binding</button>
        <br/>
        <br/>
        <button class="btn btn-success" (click)="onSave($event)" >Event Binding</button>
        <br/>
        <p>Event Filtering</p>
        <input (keyup.enter)="onKeyUp()"/>
        <p>Template Variables</p>
        <input #email (keyup.enter)="onKeyUpT(email.value)"/>

        <p>Two-Way Binding</p>
        <input [(ngModel)]="e_mail" (keyup.enter)="onKeyUpTWB()"/>
    `
})

export class CoursesComponent{
    title = "List of courses";
    image = "https://coreui.io/angular/docs/assets/img/angular.jpg";
    courses;
    colSpan = 2;
    isActive = true;
    e_mail:any = null;

    onKeyUpTWB(){
        console.log(this.e_mail);
    }

    onKeyUp(){
        alert("Enter is press.");
    }

    onKeyUpT(email:any){
        alert(email);
    }
    onSave($event:any){
        //alert("click the button!");
        console.log($event);
    }

    constructor(service:CoursesService){
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }
}
