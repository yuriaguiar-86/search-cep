import { Injectable } from '@angular/core';
import { delay, first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  via_cep = environment.viaCepApi;

  constructor( private http: HttpClient ) { }

  findCep(cep: string): Observable<Cep> {
    return this.http.get<Cep>(this.via_cep + cep + '/json/').pipe(
      first(),
      delay(1000)
    );
  }
}
