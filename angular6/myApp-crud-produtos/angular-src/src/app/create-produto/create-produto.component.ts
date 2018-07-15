import { Component, OnInit } from '@angular/core';

//adicionados manualmente
import { Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {


  // criado manualmente
  produto : Produto;

  // modificado manualmente
  constructor(private produtoService: ProdutoService) { }

  // modificado manualmente
  ngOnInit() {

    this.produto = {
      id : null,
      descricao: '',
      quantidade : null,
      valor : null
    };

  }

  onSubmit(form: FormGroup) {

    console.log(form.value);

    if(form.value != null) {
      
      this.produtoService.postProduto(form.value).subscribe(

        resposta => {
          console.log('produto criado com sucesso!');
          console.log(resposta);
          this.produtoService.redirect();
        },
        error => {
          console.log('Erro ao salvar...');
          return throwError(error);
        }
        
      );

    }

  }

}
