import { Injectable } from '@angular/core';

//adicionado manualmente
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // modificado manualmente
  constructor(private http: HttpClient) { }

  // criado manualmente
  getProdutos() {
    return this.http.get('http://localhost:3000/produtos');
  }
  
  // criado manualmente
  getProduto(produtoId) {
    return this.http.get('http://localhost:3000/produtos/' + produtoId);
  }

  // criado manualmente
  postProduto(produto : any) {
    produto.id = this.getRand();

    let dados = {
      "id" : produto.id,
      "descricao": produto.descricao,
      "quantidade" : parseInt(produto.quantidade),
      "valor" : parseFloat(produto.valor)
    }

    return this.http.post('http://localhost:3000/produtos', JSON.stringify(dados));
  }

  // criado manualmente
  putProduto(produto : any) {

    let url = 'http://localhost:3000/produtos/update/' + produto.id;

    let dados = {
      "id" : parseInt(produto.id),
      "descricao": produto.descricao,
      "quantidade" : parseInt(produto.quantidade),
      "valor" : parseFloat(produto.valor)
    }
    return this.http.post(url, JSON.stringify(dados));
  }

  // criado manualmente
  deleteProduto(produto: any) {
    
    if(confirm('Clique em OK para excluir permanentemente') == true) {
      return this.http.get('http://localhost:3000/produtos/delete/' + produto.id); 
    }

  }

  // criado manualmente
  redirect() {
    window.location.href = 'http://localhost:4200/';
  }

  // criado manualmente
  getRand() {
    let r = Math.random() * 100;
    return parseInt(r + "");
  }
}
