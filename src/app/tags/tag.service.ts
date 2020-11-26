import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IApiRequestResult } from '../shared/api-request-result';
import { ITag } from './tags';

@Injectable({
    providedIn: 'root'
})
export class TagService {

    // private tagURL = 'api/tags-result.json';
    private tagURL = 'https://backbone-web-api.staging.delcom.nl/public/tags';

    constructor(private http: HttpClient) { }

    getTags(): Observable<IApiRequestResult<ITag>> {
        return this.http.get<IApiRequestResult<ITag>>(this.tagURL).pipe(
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