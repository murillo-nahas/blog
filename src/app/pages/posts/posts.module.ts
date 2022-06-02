import { NgModule } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CommonModule } from '@angular/common';
import { AngularBoilerplateComponent } from './angular-boilerplate/angular-boilerplate.component'

export const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'angular-boilerplate', component: AngularBoilerplateComponent }
];

@NgModule({
  declarations: [BlogComponent, HelloWorldComponent, AngularBoilerplateComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule
  ]
})
export class PostsModule { }
