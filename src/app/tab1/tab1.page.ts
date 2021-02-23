import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //variables to hold data from api in json
  appointments;
  constructor(private api: AppointmentService, private router:Router){}

  //retrieve api data immediately the page loads/inits
  ngOnInit(){
    this.api.listAppointments().subscribe((data)=>{
      console.log('appointments', data);
      this.appointments=data

    })
  };

  //todo naigate to a url
}
