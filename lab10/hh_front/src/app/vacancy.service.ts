import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Vacancy} from "./vModel";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private URL = 'http://127.0.0.1:8000/api';
  constructor(private client: HttpClient) { }

  getCompanyVacancies(company_id: string): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.URL}/companies/${company_id}/vacancies/`
    );
  }


}
