import { Component, OnInit } from '@angular/core';

// adicionados manualmente
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.scss']
})
export class EditProdutoComponent implements OnInit {

    // criado manualmente
    produto$: Object;

    // modificado manualmente
    constructor(private produtoService: ProdutoService, private route : ActivatedRoute) { 
      this.route.params.subscribe( params => this.produto$ = params.id );
  
    }

  ngOnInit() {
    this.produtoService.getProduto(this.produto$).
      subscribe(dados => this.produto$ = dados);
  }

  onEdit(form: FormGroup) {

    if(form.value != null) {
      console.log(form.value);
      this.produtoService.putProduto(form.value).subscribe(
        resposta => {
          console.log(resposta);
          console.log('item atualizado com sucesso!');
          this.produtoService.redirect();
          return true
        },
        error => {
          console.log('Erro ao salvar...');
          return throwError(error);
        }
      );
    } // fim if
  } // fim function

}
