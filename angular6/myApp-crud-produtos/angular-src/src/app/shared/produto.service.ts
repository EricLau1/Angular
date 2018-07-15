import { Injectable } from '@angular/core';

// adicionado manualmente
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // criado manualmente
  produtosUrl = 'http://localhost:3000/produtos';

  // modificado manualmente
  constructor(private http: HttpClient) { }

  // criado manualmente
  getProdutos() {
    return this.http.get<Array<Produto>>(this.produtosUrl);
    
  }

  // criado manualmente
  getProduto(id) {

    let url = this.produtosUrl + '/' + id;
    return this.http.get<Produto>(url);

  }

  // criado manualmente
  postProduto(produto: Produto) {

    produto.id = this.idGenerator();

    let dados = {
      "id" : produto.id,
      "descricao" : produto.descricao,
      "quantidade" : parseInt(produto.quantidade + ""),
      "valor" : parseFloat(produto.valor + "")
    }

    return this.http.post(this.produtosUrl, JSON.stringify(dados));
  }

  // criado manualmente
  putProduto(produto : Produto) {

    let url = this.produtosUrl + '/update/' + produto.id;

    let dados = {
      "id" : parseInt(produto.id +""),
      "descricao" : produto.descricao,
      "quantidade" : parseInt(produto.quantidade + ""),
      "valor" : parseFloat(produto.valor + "")
    }

    return this.http.post(url, JSON.stringify(dados));

  }

  // criado manualmente
  deleteProduto(id) {

    let url = this.produtosUrl + '/delete/' + id;
    console.log(url);
    return this.http.get(url);
  }

  // criado manualmente
  redirect() {
    window.location.href = 'http://localhost:4200';
  }

  // criado manualmente
  idGenerator() {
    let r = 10 + Math.random() * (1000 - 10);
    return parseInt(r + "");
  }
}
