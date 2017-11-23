import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import { ResultDetailComponent } from "./result-detail.component";
import { AnalysisResolver } from './../../../resolve.server/resolve.analysis'


const ResultDetailRoutes:Routes = [
    {
        path: '',
        component: ResultDetailComponent,
        resolve:{analysisResponse:AnalysisResolver}
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(ResultDetailRoutes)
    ],
    exports: [
        RouterModule
      ]
})
export class ResultDetailRoutesModule{}