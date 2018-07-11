import { Component, OnInit } from '@angular/core';

// imports adicionados manualmente
import { ProdutoService } from '../shared/produto.service';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Produto } from '../shared/produto.model';
import { ToastrService } from 'ngx-toastr';
import { ProdutoListComponent } from '../produto-list/produto-list.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // variavel criada manualmente
  produto : Produto;

  // parametros criados manualmente
  constructor(private produtoService: ProdutoService, private toastr: ToastrService) { }

  ngOnInit() {
    
    // criado manualmente
    this.produto =  {
      id : null,
      descricao : '',
      quantidade : null,
      valor : null
    };

    this.produtoService.selectedProduto = this.produto;

    // criado manualmente
    this.resetForm();
  }

  // metodo criado manualmente
  resetForm(form? : FormGroup) {

    if(form != null) {
      
      form.reset();

      this.produtoService.selectedProduto = {
        id : null,
        descricao : '',
        quantidade : null,
        valor : null
      }
    }
  }


  // metodo criado manualmente
  onSubmit(form : FormGroup) {

    if(form.value.id != null) {

      // edita o produto
      console.log(form.value.id );
      this.produtoService.putProduto(form.value).subscribe(
        resposta => { 
        console.log(resposta);
        this.resetForm(form);
        this.toastr.info('Item atualizado com sucesso!', 'Produto editado');
        this.toastr.warning('E necessário atualizar a pagina para visualizar o novo produto', 'Aviso');
        //this.produtoService.reloadPage();
        return true },
        error => {
        console.error("Erro ao atualizar produto!");
        return throwError(error);  // Angular 6/RxJS 6
      });

    } else {

      // cria um novo produto
      this.produtoService.postProduto(form.value).subscribe(
        resposta => { 
        console.log(resposta);
        this.produtoService.getProdutos();
        this.resetForm(form);
        this.toastr.success('Novo item adicionado com sucesso!', 'Resgistro de produto');
        this.toastr.warning('E necessário atualizar a pagina para visualizar as modificações', 'Aviso');
        //this.produtoService.reloadPage();
        return true },
        error => {
        console.error("Erro ao salvar produto!");
        return throwError(error);  // Angular 6/RxJS 6
      });
    }

  } // fim metodo

}
