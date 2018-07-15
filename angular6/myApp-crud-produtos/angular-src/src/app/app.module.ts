import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';

// adicionado manualmente
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './shared/produto.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListProdutoComponent,
    CreateProdutoComponent,
    DetalheProdutoComponent,
    EditProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // adicionado manualmente
    HttpClientModule // adicionado manualmente
  ],
  providers: [ProdutoService], // adicionado manualmente
  bootstrap: [AppComponent]
})
export class AppModule { }
