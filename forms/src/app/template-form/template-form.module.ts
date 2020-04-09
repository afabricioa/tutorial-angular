import { ConsultaCepService } from './consulta-cep.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ConsultaCepService
  ]
})
export class TemplateFormModule { }
