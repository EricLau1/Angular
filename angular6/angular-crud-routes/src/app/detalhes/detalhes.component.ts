import { Component, OnInit } from '@angular/core';

// adicionados manualmente
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  // criado manualmente
  produto$: Object;

  // modificado manualmente
  constructor(private produtoService: ProdutoService, private route : ActivatedRoute) { 
    this.route.params.subscribe( params => this.produto$ = params.id );
  }

  // modificado manualmente
  ngOnInit() {

    this.produtoService.getProduto(this.produto$).
      subscribe(dados => this.produto$ = dados);
  }

  onDelete() {
    if(this.produto$ != null) {
      this.produtoService.deleteProduto(this.produto$).subscribe(
        data => {
          console.log('removido com sucesso!');
          this.produtoService.redirect();
        }
      );
    }
  }


}
