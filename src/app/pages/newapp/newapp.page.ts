import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import {Appointment} from 'src/app/models/appointment.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newapp',
  templateUrl: './newapp.page.html',
  styleUrls: ['./newapp.page.scss'],
})
export class NewappPage implements OnInit {
  appointment: Appointment = {
    user : '',
    description:'',
    published:false,
    appointment_date:new Date,
  } ;
  submitted=false;

  constructor( private appointmentSevice:AppointmentService, private router:Router) { }

  ngOnInit() {
  }
  saveAppointment():void{
    const data = {
      user : this.appointment.user, 
      description: this.appointment.description,
      appointment_date:this.appointment.appointment_date,
    };
    this.appointmentSevice.create(data).subscribe(res=>{
      console.log(res);
      //send alert
      alert('New Appointment created!')
      //navigate to list page
      this.router.navigateByUrl('/tabs/tab1');
      // this.submitted = true;
    },
    err=>{
      console.log(err);
    }
    );
  }
  
  newAppointment(): void {
    this.submitted = false;
    this.appointment = {
      user: '',
      description: '',
      published: false
    };
  }
}
