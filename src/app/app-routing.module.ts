import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {FooterComponent} from './footer/footer.component';
import {NameCardComponent} from './name-card/name-card.component';


const routes: Routes = [
  {path: 'article-today', component: ArticleComponent},
  {path: 'login', component: FooterComponent},
  // {path: 'name-card', component: NameCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
