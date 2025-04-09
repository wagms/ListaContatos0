import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../models/contato';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
})
export class DetalheComponent implements OnInit {
  contato?: Contato;

  constructor(private route: ActivatedRoute, private contatoService: ContatoService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contato = this.contatoService.obterContatoPorId(id);
  }
}
