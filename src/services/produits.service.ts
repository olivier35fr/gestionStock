import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProduitsService {

    private baseUrl: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) {

    }

    public getProduits() {
        const url = this.baseUrl;
        return this.http.get(url)
            .map(res => res.json());
    }
}