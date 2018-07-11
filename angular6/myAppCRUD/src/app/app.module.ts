import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';

// imports adicionados manualmente
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // adicionado manualmente
    FormsModule, //adicionado manualmente
    BrowserAnimationsModule, // adicionado manualmente
    ToastrModule.forRoot() // adicionado manualmente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
