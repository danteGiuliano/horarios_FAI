import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Horarios } from '../interface/horario';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class HorariosRestService {
  private URL:string=environment.URL;
  constructor(private http:HttpClient) { }
  
  getHorarios():Observable<Horarios[]>{
    return this.http.get<Horarios[]>(this.URL)
  }
}
