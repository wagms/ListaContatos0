import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from '../models/contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  contato: Contato = {
    id: 0,
    name: '',
    email: '',
    phone: '',
  };

  constructor(private contatoService: ContatoService, private router: Router) {}

  salvar() {
    this.contatoService.adicionarContato(this.contato);
    this.router.navigate(['/']);
  }
}
