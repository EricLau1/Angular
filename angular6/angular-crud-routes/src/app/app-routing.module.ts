import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// adicionado manualmente
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';

const routes: Routes = [ 
  {
    path: '',
    component: ProdutosComponent
  },
  {
    path: 'detalhes/:id',
    component: DetalhesComponent
  },
  {
    path: 'create_produto',
    component: CreateProdutoComponent
  },
  {
    path: 'edit_produto/:id',
    component: EditProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
