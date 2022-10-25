import { Component, OnInit } from '@angular/core';
import { Data } from '../interfaces/interfaces';
import { FeriadosService } from '../services/feriados.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  feriados: Data[] = [];

  constructor( private feriadosService: FeriadosService) { 

  }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp => {
      console.log('feriados', resp);
      this.feriados.push(...resp.data);
    })
  }

}