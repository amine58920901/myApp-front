import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenueComponent } from './revenue.component';

const routes: Routes = [
    {
        path: 'revenue',
        component: RevenueComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RevenueRoutingModule { }