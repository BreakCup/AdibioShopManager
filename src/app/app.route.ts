import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';

import { NotFountComponent} from "./not_found.component";

//服务
import {AuthGuard} from './public.server/auth-guard.server';

const appRoutes:Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },{
        path: 'board',
        loadChildren: 'app/pages/board/board.module#BoardModule',
        canLoad:[AuthGuard]
    },
    {
        path:'login',
        loadChildren: 'app/pages/login/login.module#LoginModule',
    },{
        path:"**",
        component:NotFountComponent
        
    }
];
@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes,{ 
                
                useHash: true
            } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
      ]
})
export class AppRoutesModule{
}