import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatafetchProvider} from "../../providers/datafetch/datafetch";
import {RequestOptions, Headers, Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  fullname: string;
  city: string;
  password: string;
  addcommentt: string;
  allstudents: any;
  students: any;
  update: any;

  constructor(public navCtrl: NavController, public ddtfth: DatafetchProvider, public http: Http) {
    this.getdata();
  }

  getdata() {
    this.ddtfth.load().then((data) => {
      this.students = data
      this.allstudents = this.students.students;
      console.log(this.allstudents)

    })
  }

  setdata() {
    this.update = {
      fname: this.fullname,
      name: this.username,
      password: this.password,
      fcity: this.city


    }
    console.log("data sending");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({headers: headers});

    this.http.post(' https://rmyfirshtapp.herokuapp.com/insert', JSON.stringify(this.update), options)
      .map(res => res.json()).subscribe(data => {
        console.log(data)
      }, err => {
        console.log("Error:");
      }
    )

  }
}
