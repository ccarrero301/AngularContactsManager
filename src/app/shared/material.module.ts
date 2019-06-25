import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenav, MatSidenavModule, MatSidenavContainer, MatToolbarModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenav,
    MatSidenavContainer,
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModule { }
