import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
pelicula:any;
  constructor(private route:ActivatedRoute, public _peliculas:MoviesService) {
    this.route.params.subscribe(params=>{
    console.log(params);
     
    this._peliculas.getPelicula(params['id']).subscribe(peli=>{

      this.pelicula=peli;
      console.log(this.pelicula);
    })

    })
    
       }

  ngOnInit(): void {
  }

}
