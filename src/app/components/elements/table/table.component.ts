import { Component } from '@angular/core';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SharedService } from 'src/app/services/shared.service';

export interface PeriodicElement {
  Nombre: string,
  Prefijo: string,
  Ciudad: string,
  Direccion: string,
  Telefono: string,
  Estado: string,

}

const ELEMENT_DATA: PeriodicElement[] = [

  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' },
  { Nombre: 'nombre', Prefijo: 'prefijo', Ciudad: 'ciudad', Direccion: 'dirección', Telefono: 'teléfono', Estado: 'estado' }

];

export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor( private Data: SharedService) {


  }


  //filter
  first: number = 0;

  rows: number = 10;

  value: string | undefined;

  onPageChange(event: PageEvent | any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  //tabla
  displayedColumns: string[] = ['Nombre', 'Prefijo', 'Ciudad', 'Direccion', 'Telefono', 'Estado'];
  dataSource = ELEMENT_DATA;

  //inputs
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();








  //visualizacion del boton
  hoveredRowIndex: number | null = null;

  onMouseEnter(index: number): void {
    this.hoveredRowIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredRowIndex = null;
  }

  isButtonVisible(index: number): boolean {
    return this.hoveredRowIndex === index;
  }



  sendOption(option: string) {
    this.Data.setOption(option);
  }
}
