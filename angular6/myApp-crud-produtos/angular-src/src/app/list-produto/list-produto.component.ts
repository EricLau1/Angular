import { Component, OnInit } from '@angular/core';

// adicionado manualmente
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  // criado manualmente
  produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

    this.produtoService.getProdutos().subscribe(
      dados => {
        this.produtos = dados
      }
    );

  }

}
