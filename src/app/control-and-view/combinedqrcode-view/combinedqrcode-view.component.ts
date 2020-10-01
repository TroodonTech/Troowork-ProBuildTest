import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-combinedqrcode-view',
  templateUrl: './combinedqrcode-view.component.html',
  styleUrls: ['./combinedqrcode-view.component.scss']
})
export class CombinedqrcodeViewComponent implements OnInit {

  OrgId;
  rKey;


  constructor(private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.OrgId = params.rev_orgid);
    this.route.params.subscribe(params => this.rKey = params.room_key);
  }

  ngOnInit() {
  }

  // feedback() {
  //   this.router.navigate('/Reviews', this.OrgId, this.rKey);

  // }

  // worequest() {
  //   this.router.navigate('UserWorkRequest', this.OrgId, this.rKey);
  // }

  // cleaningDetails() {
  //   this.router.navigate('CleaningDetails', this.OrgId, this.rKey);
  // }
}
