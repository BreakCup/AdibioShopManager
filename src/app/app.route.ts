import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
import { LoginComponent} from "./pages/login/login.component";
import { BoardComponent} from "./pages/board/board.component";
import { NotFountComponent} from "./not_found.component";

//服务
import {AuthGuard} from './pages/board/auth-guard.server';

const appRoutes:Routes = [
    {
        path: 'board',
        loadChildren: 'app/pages/board/board.module#BoardModule',
        canLoad:[AuthGuard]
    },
    {
        path:'login',
        component:LoginComponent
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