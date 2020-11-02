import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CombinedqrcodeViewModule } from './control-and-view/combinedqrcode-view/combinedqrcode-view.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: './control-and-view/dashboard/login/login.module#LoginModule' // varun- first page to load for lazy loading.... 
  },
  {
    path: 'QRCodeView/:rev_orgid/:room_key/Reviews/:rev_orgid/:room_key',// user review page
    loadChildren: './control-and-view/reviews/reviews.module#ReviewsModule'
  },
  {
    path: 'thankYou/:type',// thank you page 
    loadChildren: './control-and-view/thankyou-page/thankyou-page.module#ThankyouPageModule'
  },
  {
    path: 'QRCodeView/:rev_orgid/:room_key/UserWorkRequest/:rev_orgid/:room_key',// user request page
    loadChildren: './control-and-view/user-work-request/user-work-request.module#UserWorkRequestModule'
  },
  {
    path: 'QRCodeView/:rev_orgid/:room_key/CleaningDetails/:rev_orgid/:room_key',// cleaning details page
    loadChildren: './control-and-view/cleaning-details/cleaning-details.module#CleaningDetailsModule'
  },
  {
    path: 'QRCodeView/:rev_orgid/:room_key',
    loadChildren: './control-and-view/combinedqrcode-view/combinedqrcode-view.module#CombinedqrcodeViewModule'
  },
  {
    path: 'supportYou',
    loadChildren: './control-and-view/support-page/support-page.module#SupportPageModule'
  },
];


@NgModule({
  imports: [
    CommonModule, RouterModule,
    RouterModule.forRoot(routes, {
      // Tell the router to use the HashLocationStrategy.
      useHash: true
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
