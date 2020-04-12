import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  peliculas:any[] = [];
  private urlMoviedb: string = 'https://api.themoviedb.org/3/';
  private apikey: string ='c3ae491873c58ea09ff6e19468a70315';

  constructor(private http: HttpClient) {

  }

  getNew() {
            
    let url = `${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => res.results));
    
  }

  getKids(){
    let url = `${this.urlMoviedb}discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${this.apikey}&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => res.results));

  }
  

buscarPelicula( texto: string ) {
let url = `${ this.urlMoviedb }search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
// &callback=JSONP_CALLBACK
return this.http.get( url ).pipe(map( (res: any)  =>{
  this.peliculas = res.results;
  console.log(this.peliculas);
  console.log('buscando el destino');
  return res.results}));
}


getPelicula( id:string){
let url = `${ this.urlMoviedb }movie/${id}?api_key=${this.apikey}&language=es`;

return this.http.get( url )
                .pipe(map( (res: any) => res));
}

}


