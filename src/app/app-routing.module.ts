import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistryComponent } from './registry/registry.component';
import { ShowerComponent } from './shower/shower.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'shower', component: ShowerComponent },
  { path: 'registry', component: RegistryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
