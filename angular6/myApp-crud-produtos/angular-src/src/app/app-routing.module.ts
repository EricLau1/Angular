import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// adicionados manualmente
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';

// modificado manualmente
const routes: Routes = [
  {
    path: '',
    component: ListProdutoComponent 
  },
  {
    path: 'detalhe/:id',
    component: DetalheProdutoComponent
  },
  {
    path: 'create_produto',
    component: CreateProdutoComponent
  },
  {
    path: 'editar/:id',
    component: EditProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
