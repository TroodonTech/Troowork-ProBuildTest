import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { CombineQrCodePageComponent } from "./combine-qr-code-page.component";
const routes: Routes = [
  {
    path: '',
    component: CombineQrCodePageComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule,
    FormsModule, ReactiveFormsModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CombineQrCodePageComponent]
})
export class CombineQrCodePageModule { }
