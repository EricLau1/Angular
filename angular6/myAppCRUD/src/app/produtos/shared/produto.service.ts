import { Injectable } from '@angular/core';

// imports adicionados manualmente
import { Produto } from './produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // variáveis adicionadas manualmente
  produtosUrl = 'http://localhost:3000/produtos';

  selectedProduto : Produto;

  // parametro adicionado manualmente
  constructor(private httpClient : HttpClient) { }

  // metodo criado manualmente
  getProdutos() {
    return this.httpClient.get<Array<Produto>>(this.produtosUrl);
  }

  // metodo criado manualmente
  postProduto(produto : Produto) {

    produto.id = this.gerarId();

    let dados = {
      "id" : produto.id,
      "descricao" : produto.descricao,
      "quantidade" : parseInt(produto.quantidade + ""),
      "valor" : parseFloat(produto.valor + "")
    }

    this.selectedProduto = dados;

    return this.httpClient.post(this.produtosUrl, JSON.stringify(dados));
  }

    // metodo criado manualmente
  putProduto(produto : Produto) {

      let url = this.produtosUrl + '/update/' + produto.id;

      console.log(url);
  
      let dados = {
        "id" : parseInt(produto.id + ""),
        "descricao" : produto.descricao,
        "quantidade" : parseInt(produto.quantidade + ""),
        "valor" : parseFloat(produto.valor + "")
      }
  
      this.selectedProduto = dados;
      
      // foi usado post pois ocorreu um problema com o put
      return this.httpClient.post(url, JSON.stringify(dados));
    }

    deleteProduto(id) {
      let url = this.produtosUrl + '/delete/' + id;
      console.log(url);
      return this.httpClient.get(url);
    }

  // metodo criado manualmente
  gerarId() {
    let r = Math.random() * 100;
    return parseInt(r + "");
  }

  reloadPage() {
    window.location.href = 'http://localhost:4200';
  }
}
