import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/posts/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TagsComponent } from './pages/tags/tags.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'blog', loadChildren: () => import('./pages/posts/posts.module').then(p => p.PostsModule)
  },
  {
    path: 'tags', component: TagsComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'about', component: AboutComponent
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
