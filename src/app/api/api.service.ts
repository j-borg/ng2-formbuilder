import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiService {
    private url: string = process.env.API;

    constructor(private http: Http) { }

    get headers() {
        return new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
    }

    get options() {
        return new RequestOptions({ headers: this.headers });
    }

    public get(endpoint: string) {
        return this.promise(this.http.get(`${this.url + endpoint}`, this.options));
    }

    public delete(endpoint: string, body: any) {
        let options = new RequestOptions({ headers: this.headers, body: body });
        return this.promise(this.http.delete(`${this.url + endpoint}`, options));
    }

    private promise(request: any): Promise<any> {
        return request.toPromise()
            .then((response: any) => response.json())
            .catch(this.handleError.bind(this));
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}
