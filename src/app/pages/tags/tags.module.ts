import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { PersonalLifeComponent } from './components/personal-life/personal-life.component';
import { TechComponent } from './components/tech/tech.component';
import { LayoutModule } from 'src/app/layout/layout.module';

export const routes: Routes = [
  { path: '', component: TagsComponent },
  { path: 'personal-life', component: PersonalLifeComponent },
  { path: 'tech', component: TechComponent }
]

@NgModule({
  declarations: [TagsComponent, PersonalLifeComponent, TechComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule
  ]
})
export class TagsModule { }
