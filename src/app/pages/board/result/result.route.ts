import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import { ResultComponent } from "./result.component"

const ResultRoutes:Routes = [
    {
        path: '',
        component: ResultComponent,
        // canActivate:[AuthGuard],
       
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(ResultRoutes)
    ],
    exports: [
        RouterModule
      ]
})
export class ResultRoutesModule{}