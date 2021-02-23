import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Appointment} from 'src/app/models/appointment.model';

const base_url = "http://localhost:8000/api/appointments";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  create(data: any): Observable<any>{
    return this.http.post(base_url, data);
  }

  listAppointments(){
    return this.http.get(base_url);
  }
}
// insert ngrok here