import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'detalles/:id/:pag',component:DetallesComponent},
{path:'search',component:SearchComponent},
{path:'search/:movie',component:SearchComponent},
{path:'**',pathMatch:'full',redirectTo:'home'} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
