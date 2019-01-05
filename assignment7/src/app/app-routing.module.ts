import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component'



const routes: Routes = [
  {path : 'books', component:BooksComponent},
  {path : 'Technology' ,component:TechnologyComponent},
  {path : '* *',component:InvalidPageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
