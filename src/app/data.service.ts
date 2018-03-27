import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    private some_cats = new BehaviorSubject<any>(['this 1', 'this 2']);
    some_cat = this.some_cats.asObservable();

    constructor() {}

    changeGoal(some_cat) {
//        this.some_cats.next(some_cat);
        console.log(some_cat);
    }

}
