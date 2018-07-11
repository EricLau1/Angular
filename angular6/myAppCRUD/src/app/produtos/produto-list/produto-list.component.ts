import { Component, OnInit } from '@angular/core';

// adicionado manualmente
import { ProdutoService } from '../shared/produto.service';
import { Produto } from '../shared/produto.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  // adicionado manualmente
  produtos : Array<Produto>

  // adicionado manualmente
  constructor(private produtoService: ProdutoService,  private toastr: ToastrService) { }

  ngOnInit() {

    // adicionado manualmente
    this.produtoService.getProdutos().subscribe(dados => this.produtos = dados);

  }

  // adicionado manualmente
  showForEdit(produto : Produto) {

    this.produtoService.selectedProduto = {
      "id" : produto.id,
      "descricao" : produto.descricao,
      "quantidade" : produto.quantidade,
      "valor": produto.valor
    };

    console.log(this.produtoService.selectedProduto);
  }

  onDelete(produto : Produto) {

    if(confirm('Clique em OK para excluir o item.') == true) {
      this.produtoService.deleteProduto(produto.id).subscribe(
        resposta => {
          this.toastr.error('Item deletado com sucesso!', 'Produto deletado');
          this.produtos = this.produtos.filter(p => p !== produto);
          console.log(resposta);
        } 
      );
    } 
  }


}
