import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User, userFormSettings } from './user.model';
import { UserService } from './user.service';

@Component({
    selector: 'user-component',
    template: require('./user.component.html')
})
export class UserComponent implements OnInit, OnDestroy {
    sub: any;
    user: User;
    settings: any = userFormSettings;

    constructor(private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params
            .switchMap((params: Params) => this.userService.subscribe(params.id))
            .subscribe((result: any) => this.user = result);
    }

    saveForm($event: User) {
        console.log($event);
    }

    ngOnDestroy() {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}
