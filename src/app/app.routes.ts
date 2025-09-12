import {Routes} from '@angular/router';
import {PatientComponent} from '../components/patient/patient.component';
import {MedicComponent} from '../components/medic/medic.component';
import {ConsultationComponent} from '../components/consultation/consultation.component';

export const routes: Routes = [
  {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'medic',
    component: MedicComponent
  },
  {
    path: 'consultation',
    component: ConsultationComponent
  }
];
