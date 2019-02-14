import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { WeatherComponent } from './weather/weather.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent},
  { path: 'seattle', component: SeattleComponent},
  { path: 'sanjose', component: SanJoseComponent},
  { path: 'burbank', component: BurbankComponent},
  { path: 'dallas', component: DallasComponent},
  { path: 'dc', component: DcComponent},
  { path: 'chicago', component: ChicagoComponent},
  { path: '', redirectTo: '/weather', pathMatch: 'full'},
  { path: '**', redirectTo: '/weather', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
