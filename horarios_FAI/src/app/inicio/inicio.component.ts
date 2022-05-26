import { Component, OnInit } from '@angular/core';
import { HorariosRestService } from '../servicios/horarios-rest.service';
import {Horarios}  from '../interface/horario';
import { DateTime } from "luxon";

import { DateParserModule } from '../modulos/date-parser/date-parser.module';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(private horarioRest:HorariosRestService) { }


  public horarios:Horarios[]=[];

  public time:number=Date.now();

  private reloadTime:number=DateTime.local().hour;

  ngOnInit(): void {

  this.horarioRest.getHorarios().subscribe((data:Horarios[])=>{
    this.horarios=data
  })

  this.rutine()
}
   rutine(){
       setInterval(() => {
        this.time=Date.now();  
      }, 1000); 
  }
}
