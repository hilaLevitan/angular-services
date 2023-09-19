import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipe } from '../classes/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  url: string = 'https://localhost:7030/api/Recipe/';
  constructor(public http: HttpClient) {}
  GetAll(): Observable<Array<recipe>> {
    return this.http.get<Array<recipe>>(this.url + 'GetAll');
  }
  delete(id: number): Observable<Array<recipe>> {
    return this.http.delete<Array<recipe>>(this.url + 'Delete?id=' + id);
  }
  add(recipe: recipe | undefined): Observable<recipe> {
    return this.http.post<recipe>(this.url + 'Add', recipe);
  }
  edit(id: number | undefined, recipe: recipe | undefined): Observable<recipe> {
    return this.http.patch<recipe>(this.url + 'Update/' + id, recipe);
  }
}
