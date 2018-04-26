import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MatModule { }
