import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
