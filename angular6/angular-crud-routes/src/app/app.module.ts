import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

// adicionado manualmente
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { FormsModule } from '@angular/forms';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProdutosComponent,
    DetalhesComponent,
    CreateProdutoComponent,
    EditProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // adicionado manualmente
    BrowserAnimationsModule // adicionado manualmente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
