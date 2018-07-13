import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.scss']
})
export class CreateProdutoComponent implements OnInit {

  produto: any;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

    this.produto = {
      id : null,
      descricao : '',
      quantidade : null,
      valor : null
    }
  }

  onSubmit(form : FormGroup) {

    console.log(form.value);
    
    if(form.value != null) {
      this.produtoService.postProduto(form.value).subscribe(
        resposta => {
          console.log(resposta);
          console.log('novo item adicionado com sucesso!');
          this.produtoService.redirect();
          return true
        },
        error => {
          console.log('Erro ao salvar...');
          return throwError(error);
        }
      );
    }
  }

}
