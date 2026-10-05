import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { EmailService } from '../../service/servicoEmail';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule], //preciso importar para usar o formGroup no html e puxar a linha 12
  selector: 'app-formulario',
  templateUrl: './formulario.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulario {
  public formulario!: FormGroup;

  mensagemSucesso = false;
  mensagemErro = false;
  mensagemEnviando = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private changeTracker: ChangeDetectorRef,
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

    this.mensagemEnviando = true;

    this.emailService.enviarMensagem(dados).subscribe({
      next: () => {
        this.mensagemSucesso = true;
        console.log(this.mensagemSucesso);
        this.mensagemErro = false;
        this.changeTracker.markForCheck();
      },

      error: (erro) => {
        console.error('Erro ao enviar mensagem:', erro);
        this.mensagemSucesso = false;
        this.mensagemErro = true;
        this.changeTracker.markForCheck();
        return;
      },
    });
  }
}
