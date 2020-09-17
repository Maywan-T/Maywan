import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabecreateComponent } from './tabecreate/tabecreate.component';
import { TabereadComponent } from './taberead/taberead.component';
import { TabeupdateComponent } from './tabeupdate/tabeupdate.component';

const routes: Routes = [
  {path:'create', component: TabecreateComponent },
  {path:'read', component: TabereadComponent},
  {path:'',redirectTo: 'read', pathMatch: 'full'},
  {path: 'update/:id', component: TabeupdateComponent},
  //{path: 'update/:id', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
