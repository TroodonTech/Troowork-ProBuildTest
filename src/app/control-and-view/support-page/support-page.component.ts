import { Component, OnInit } from '@angular/core';
import { ConectionSettings } from '../../service/ConnectionSetting';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.scss']
})
export class SupportPageComponent implements OnInit {
  EmailID;
  comments;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  Submit() {
    if (!(this.EmailID)) {
      alert("Please enter your email id"); return;
    } else if (this.EmailID) {
      if (!(this.EmailID.trim())) {
        alert("Please enter your email id"); return;
      }
    }

    if (!(this.comments)) {
      alert("Please enter your query"); return;
    } else if (this.comments) {
      if (!(this.comments.trim())) {
        alert("Please enter your query"); return;
      }
    }

    this.comments = this.comments.trim();

    const tomail = "troodonits@gmail.com"
    const obj = {
      from: this.EmailID,
      to: tomail,
      subject: 'Troowork Support Mail',
      text: this.comments
    };
    const url = ConectionSettings.Url + "/sendmail";
    this.callalert();
    return this.http.post(url, obj)
      .subscribe(res => console.log("Mail sent")
      );

  }
  callalert() {
    console.log("Mail sent");
    alert("Mail sent to support team successfully");
    this.router.navigate(['']);
  }

}
