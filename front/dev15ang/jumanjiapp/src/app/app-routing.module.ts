import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingkebabComponent } from './bindingkebab/bindingkebab.component';
import { AttributacosComponent } from './attributacos/attributacos.component';
import { DirectiveburgerComponent } from './directiveburger/directiveburger.component';
import { PipesaucisseComponent } from './pipesaucisse/pipesaucisse.component';
import { UsersushiComponent } from './usersushi/usersushi.component';
import { UserbananeComponent } from './userbanane/userbanane.component';


// On fait ici les chemins entre les menus.
const routes: Routes = [
  {path: 'kebab', component: BindingkebabComponent},
  {path: 'tacos', component: AttributacosComponent},
  {path: 'burger', component: DirectiveburgerComponent},
  {path: 'saucisse', component: PipesaucisseComponent},
  {path: 'sushi', component: UsersushiComponent},
  {path: 'banane', component: UserbananeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
