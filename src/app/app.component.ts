import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
constructor(public _movies:MoviesService){
this._movies.getKids().subscribe(resp=>{
  console.log(resp);
  console.log('hello')
})
}


}
