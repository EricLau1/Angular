import { Component, OnInit } from '@angular/core';

//adicionados manualmente
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  //criado manualmente
  produto : Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { 

    this.produto = {
      id : null,
      descricao : '',
      quantidade : null,
      valor : null
    }

    this.route.params.subscribe( param => this.produto.id = param.id );

  }

  ngOnInit() {
    this.produtoService.getProduto(this.produto.id).subscribe(dados => this.produto = dados);
  }

  onEdit(form : FormGroup) {

    if(form.value != null) {
    
      this.produtoService.putProduto(form.value).subscribe(
        resposta => {
          this.produto = form.value;
          console.log('produto atualizado com sucesso!');
          window.location.href = 'http://localhost:4200/detalhe/' + this.produto.id;
        },
        error => {
          console.log('erro ao atualizar...');
          return throwError(error);
        }
      );
    }

  }

}
