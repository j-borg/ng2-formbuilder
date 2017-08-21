import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class MainService {
    private entity: any = [];

    constructor(private apiService: ApiService) { }

    get list() {
        return this.entity;
    }

    getList() {
        return this.apiService.get('list');
    }
}
