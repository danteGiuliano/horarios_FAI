import { Component, OnInit } from '@angular/core';
import { HorariosRestService } from '../servicios/horarios-rest.service';
import { Horarios } from '../interface/horario';
import { DateTime } from "luxon";

import { DateParserModule } from '../modulos/date-parser/date-parser.module';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(private horarioRest: HorariosRestService) { }


  public horarios: Horarios[] = [];
  public dia: string = "";
  public time: number = Date.now();


  ngOnInit(): void {
    this.query()
    this.rutine()
  }
  private query() {
    this.horarioRest.getHorarios().subscribe((data: Horarios[]) => {
      this.horarios = data
      this.materiumFilter()
    })
    this.dia = this.horarioRest.diaSemana()
  }

  private rutine() {
    setInterval(() => {
      this.time = Date.now();
    }, 1000); //1 segundo
    setInterval(() => {
      this.materiumFilter();
    }, 10000) //10 segundos
    setInterval(() => {
      this.query();
    }, 1.8e+7) //Media hora
  }
  /**
   * Filtra las materias por hora fin, para mostrar en la vista las materias actuales 
   * o proximas al horario local
   */
  private materiumFilter() {
    this.horarios = this.horarios.filter(horario => {
      let time = DateTime.local();
      let helper = new DateParserModule();
      return (helper.substractHour(horario.horafin) >= helper.formatFilter(time.hour, time.minute));
    })
  }


}
