import { Component, OnInit } from '@angular/core';

// adicionados manualmente
import { ProdutoService } from '../produto.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  animations:[
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', 
        [
          style({ opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style( {opacity: 1, transform: 'translateY(0px)'} )))
        ], { optional: true } ),
        query(':leave', animate('550ms ease-out', style( { opacity: 0 } )), { 
          optional: true 
        })
      ])
    ])
  ]
})
export class ProdutosComponent implements OnInit {

  // criado manualmente
  produtos$: Object;

  // modificado manualmente
  constructor(private produtoService: ProdutoService) { }

  // modificado manualmente
  ngOnInit() {

    this.produtoService.getProdutos().subscribe(
      dados => this.produtos$ = dados
    );

  }

}
