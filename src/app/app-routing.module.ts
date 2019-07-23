import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {AuthGuard} from './auth/auth.guard';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
    data: { preload: true }
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategyService
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
