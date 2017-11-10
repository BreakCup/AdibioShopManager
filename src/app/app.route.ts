import { NgModule } from '@angular/core';
import {  Routes,RouterModule  } from '@angular/router';
// import { LoginModule } from "./pages/login/login.module";
// import { BoardModule } from './pages/board/board.module';
import { NotFountComponent} from "./not_found.component";

//服务
import {AuthGuard} from './pages/board/auth-guard.server';

const appRoutes:Routes = [
    {
        path: 'board',
        loadChildren: 'app/pages/board/board.module#BoardModule',
        // canLoad:[AuthGuard]
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