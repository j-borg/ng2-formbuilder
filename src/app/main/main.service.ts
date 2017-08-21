import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
    private entity: any = [];

    constructor() { }

    get list() {
        return this.entity;
    }
}
