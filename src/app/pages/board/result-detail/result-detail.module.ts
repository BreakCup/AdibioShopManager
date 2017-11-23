import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ResultDetailComponent } from './result-detail.component';

import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

import { ResultDetailRoutesModule } from "./result-detail.route"

//服务
import { AnalysisResolver } from "./../../../resolve.server/resolve.analysis"

@NgModule({
  imports: [
    // CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,

    ResultDetailRoutesModule
  ],
  declarations: [ResultDetailComponent],
  providers:[
    AnalysisResolver
  ]
})
export class ResultDetailModule { }
