import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TagsComponent } from './pages/tags/tags/tags.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'blog', loadChildren: () => import('./pages/posts/posts.module').then(p => p.PostsModule)
  },
  {
    path: 'tags', loadChildren: () => import('./pages/tags/tags.module').then(t => t.TagsModule)
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'error-page', component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: 'error-page'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
