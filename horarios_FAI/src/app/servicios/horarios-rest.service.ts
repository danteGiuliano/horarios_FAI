import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Horarios } from '../interface/horario';
import { map, Observable } from 'rxjs';
import { DateTime } from 'luxon';
  
@Injectable({
  providedIn: 'root'
})
export class HorariosRestService {

  private URL:string=environment.URL;

  private date:DateTime= DateTime.local();
  private map:any=new Map().set(1,"lunes").set(2,"martes").set(3,"miercoles")
  .set(4,"jueves").set(5,"viernes").set(6,"sabado").set(7,"domingo")

  constructor(private http:HttpClient) { }

  getHorarios():Observable<Horarios[]>{

    let dia:string="dia="+this.diaSemana()
    let inicio:string="horainicio=8:00"
    let cuatrimestre="cuatrimestre="+this.cuatrimestre()

    let query:string=this.URL+"?"+dia+"&"+cuatrimestre+"&"+inicio
    return this.http.get<Horarios[]>(query)
  }

  /**
   * Funcion generica de dia
   * @returns un string con el dia
   */

  public diaSemana(){ 
    return this.map.get(this.date.weekday)
  }
  private cuatrimestre(){
    return (this.date.month<=7)?1:2;
  }

}
