import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatRippleModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AngularSharedModule {}
