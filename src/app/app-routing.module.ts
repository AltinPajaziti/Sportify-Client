import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponentComponent } from './Layout/main-layout-component/main-layout-component.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../app/Admin/admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: 'auth', 
    loadChildren: () => import('../app/modules/auth/auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'user',
    loadChildren: () => import('../app/User/user/user.module').then(m => m.UserModule)
  },
  
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'register', redirectTo: 'auth/register', pathMatch: 'full' },

  // Optional wildcard route to handle unmatched routes:
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
