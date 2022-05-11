import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { SobreComponent } from "./views/sobre/sobre.component";
import { CadastroComponent } from "./views/cadastro/cadastro.component";
import { RestritoComponent } from "./views/restrito/restrito.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "sobre",
    component: SobreComponent,
  },
  {
    path: "cadastro",
    component: CadastroComponent,
  },
  {
    path: "restrito",
    component: RestritoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
