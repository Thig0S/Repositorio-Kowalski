import { Component } from '@angular/core';
import { EmailService } from '../../service/email';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule], //preciso importar para usar o formGroup no html e puxar a linha 12
  selector: 'app-formulario',
  templateUrl: './formulario.html',
})
export class Formulario {
  public formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
  ) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required],
    });
  }

  //funcao de validar o formulario
  enviarFormulario(): void {
    if (this.formulario.invalid) {
      return;
    }

    const dados = this.formulario.value;

    this.emailService.enviarMensagem(dados).subscribe({
      next: () => {
        console.log('Mensagem enviada com sucesso!');
        return;
      },

      error: (erro) => {
        console.error('Erro ao enviar mensagem:', erro);
        return;
      },
    });
  }
}
