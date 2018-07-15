import { Component, OnInit } from '@angular/core';

// adicionados manualmente
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  // criado manualmente
  produto : Produto;

  // modificado manualmente
  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) {

    this.produto = {
      id : null,
      descricao: '',
      quantidade : null,
      valor : null
    };

    this.route.params.subscribe( params => this.produto.id = params.id );

   }

  // modificado manualmente
  ngOnInit() {

    this.produtoService.getProduto(this.produto.id).subscribe(dados => this.produto = dados);

  }

  // criado manualmente
  onDelete() {
    console.log(this.produto);
    if(confirm('Clique em OK para excluir o item permanentemente.') == true) {
      this.produtoService.deleteProduto(this.produto.id).subscribe(
        dados =>  {
          console.log('removido com sucesso!');
          this.produtoService.redirect();
        }
      );
    }

  }

}
