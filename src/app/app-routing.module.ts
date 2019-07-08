import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path:'blog',
    loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule)
  },
  {
    path:'contact',
    loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule)
  },
  {
    path:'myaccount',
    loadChildren: () => import('./myaccount/myaccount.module').then(module => module.MyaccountModule)
  },
  {
    path:'about',
    loadChildren: () => import('./about/about.module').then(module => module.AboutModule)
  },
  {
    path:'error',
    loadChildren: () => import('./errorpage/errorpage.module').then(module => module.ErrorpageModule)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'error',
    pathMatch:'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
