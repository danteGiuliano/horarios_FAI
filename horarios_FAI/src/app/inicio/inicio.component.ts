import { Component, OnInit } from '@angular/core';
import { HorariosRestService } from '../servicios/horarios-rest.service';
import {Horarios}  from '../interface/horario';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(private horarioRest:HorariosRestService) { }

  public horarios:Horarios[]=[];
  public tiempo:number=Date.now();

  ngOnInit(): void {
  this.horarioRest.getHorarios().subscribe((data:Horarios[])=>{
    this.horarios=data
    console.log()
  })
  this.time()
  }
  
   time(){
       setInterval(() => {
        this.tiempo=Date.now();  
      }, 1000); 
  }

}
