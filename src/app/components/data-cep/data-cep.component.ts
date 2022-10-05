import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/cep';
import { CepService } from 'src/app/cep.service';

@Component({
  selector: 'app-data-cep',
  templateUrl: './data-cep.component.html',
  styleUrls: ['./data-cep.component.css']
})
export class DataCepComponent implements OnInit {
  information!: Cep;
  not_found!: boolean;

  constructor( private service: CepService ) { }

  ngOnInit(): void { }

  getCepSend(value: string) {
    let cep = this.checkLenghtCep(value);

    this.service.findCep(cep).subscribe(
      success => { this.information = success },
      error => { this.not_found = true }
    );
  }

  private checkLenghtCep(value: string) {
    if(value.length == 9) {
      value.replace(value, '-');
    }
    return value;
  }
}
