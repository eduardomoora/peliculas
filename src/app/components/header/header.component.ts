import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
    words:string;

  ngOnInit(): void {
  }


buscarPelicula(buscar:string){

if (buscar.length==0) {
return;  
}

this.router.navigate(["search",buscar]);


}

}
