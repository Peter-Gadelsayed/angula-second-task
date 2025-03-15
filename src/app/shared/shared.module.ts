import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DetailsCardComponent } from './details-card/details-card.component';



@NgModule({
  declarations: [
    CardComponent,
    DetailsCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    DetailsCardComponent,

  ]
})
export class SharedModule { }
