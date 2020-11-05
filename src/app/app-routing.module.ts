import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Day1Component} from './day1/day1.component';
import {KabanaBoardComponent} from './kabana-board/kabana-board.component';

const routes: Routes = [
  { path: 'day1', component: Day1Component },
  { path: 'kabana', component: KabanaBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
