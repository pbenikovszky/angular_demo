import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IApiRequestResult } from '../shared/api-request-result';
import { IProduct } from './products';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productURL = "https://backbone-web-api.staging.delcom.nl/public/products"

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IApiRequestResult<IProduct>> {
        return this.http.get<IApiRequestResult<IProduct>>(this.productURL).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProductById(id: string): Observable<IProduct> {
        const prodURL = this.productURL + `/${id}`;
        return this.http.get<IProduct>(prodURL).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );

    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`
        }

        console.error(errorMessage);
        return throwError(errorMessage);

    }
}