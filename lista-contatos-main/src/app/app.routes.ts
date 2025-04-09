import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalheComponent } from './detalhe/detalhe.component';

export const appRoutes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'detalhe/:id', component: DetalheComponent },
];
