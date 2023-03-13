import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

//array de rotas
export const routes: Routes = [
    {path: '', redirectTo: 'nova-transferencia', pathMatch: 'full'},
    {path: 'extrato', component: ExtratoComponent},
    {path: 'nova-transferencia', component: NovaTransferenciaComponent},
]

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
 })

export class AppRoutingModule {}
