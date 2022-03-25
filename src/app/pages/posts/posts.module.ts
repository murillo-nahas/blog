import { NgModule } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'hello-world', component: HelloWorldComponent }
];

@NgModule({
  declarations: [BlogComponent, HelloWorldComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
