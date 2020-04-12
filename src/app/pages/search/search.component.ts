import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
buscar:string='';
  constructor(private route:ActivatedRoute, public _peliculas:MoviesService) {
this.route.params.subscribe(params=>{
  if (params['movie']) {
    this.buscar=params['movie'];
    this.buscarPelicula();
  }
})

   }

  ngOnInit(): void {


   
  }


  buscarPelicula(){

    console.log('dentro');
    if (this.buscar.length==0) {
      return;
      
    }
    this._peliculas.buscarPelicula(this.buscar).subscribe();

  }
}
