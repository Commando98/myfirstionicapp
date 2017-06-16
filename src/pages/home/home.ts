import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;
password:string;
addcomments:string;
comment:any=["anil","arpan","jayash"];
student_name:string;
student_batch:number;
student_year:string;
students:any=[{"name":"xyz","batch":"2015","year":"second"},{"name":"abc","batch":"2016","year":"first"},
              {"name":"pqr","batch":"2014","year":"third"}];
  constructor(public navCtrl: NavController) {

  }

  addcomment()
  {
    this.comment.push(this.addcomments);
    this.addcomments="";
  }
  removeItem(){
    this.comment.pop(this.addcomments);
    }
  addstudent(){
    this.students.push({"name":this.student_name,"batch":this.student_batch,"year":this.student_year});
  }

  gotosecondpage()
  {
    if(this.username=="anil"&&this.password=="234598")
    this.navCtrl.push(SecondPage,{"username":this.username});
  }

}
