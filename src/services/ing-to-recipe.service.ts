import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IngToRecipeService {
  url: string = 'https://localhost:7030/';
  constructor(private http: HttpClient) {}
}
