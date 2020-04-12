import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _movies:MoviesService) { }

listMovies:any[]=[];
listKids:any[]=[];
listSearching:any[]=[];
  ngOnInit(): void {


    this._movies.getNew().subscribe((res:any)=>{
      this.listMovies=res;
     })

     this._movies.getKids().subscribe((res:any)=>{
      this.listKids=res;
     })
    
  }

  algo(){

  }

}
