import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../models/contato';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.contatos = this.contatoService.getContatos();
  }

  remover(id: number) {
    this.contatoService.removerContato(id);
    this.contatos = this.contatoService.getContatos();
  }

  verDetalhe(id: number) {
    
  }
}
