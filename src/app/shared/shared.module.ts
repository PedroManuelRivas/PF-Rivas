import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NameTransformPipe } from './pipes/name-transform.pipe';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    NameTransformPipe,
    FormFieldValidationErrorsPipe,
    ResaltadoDirective,
    FontSizeDirective
  ],
  imports: [
    CommonModule
  ], exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    FormFieldValidationErrorsPipe,
    NameTransformPipe,
    ResaltadoDirective,
    FontSizeDirective,
    MatListModule
  ]
})
export class SharedModule { }
