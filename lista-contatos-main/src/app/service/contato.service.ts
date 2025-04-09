import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', phone: '11999999999' },
    { id: 2, name: 'Maria Souza', email: 'maria@email.com', phone: '11988888888' },
  ];

  getContatos(): Contato[] {
    return this.contatos;
  }

  adicionarContato(contato: Contato): void {
    contato.id = this.gerarId();
    this.contatos.push(contato);
  }

  removerContato(id: number): void {
    this.contatos = this.contatos.filter(c => c.id !== id);
  }

  obterContatoPorId(id: number): Contato | undefined {
    return this.contatos.find(c => c.id === id);
  }

  private gerarId(): number {
    return this.contatos.length > 0 ? Math.max(...this.contatos.map(c => c.id)) + 1 : 1;
  }
}
