import { NgModule } from '@angular/core';
//table module

import {MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';


@NgModule({
    imports:[
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,

    ],
    providers:[
        
    ],
    declarations: [ 

    ],
    exports:[
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
    ]
})
export class TableModule{} 