import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ResultRoutesModule } from './result.route';

import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,

    ResultRoutesModule,
  ],
  declarations: [ResultComponent]
})
export class ResultModule { }
