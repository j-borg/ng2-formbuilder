import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable()
export class UserService {
    mockUser: any = [{
        'id': '123',
        'name': 'John Doe',
        'age': 31,
        'mood': 'Goed',
        'hobbies': { 'Films': true, 'Slapen': false, 'Hardlopen': false },
        'married': true
    } as User];

    constructor() { }

    subscribe(id: any) {
        let object = this.mockUser.filter((obj: any) => obj.id === id);
        return new Promise((resolve, reject) => {
            resolve(object.length ? object[0] : {});
        });
    }
}
