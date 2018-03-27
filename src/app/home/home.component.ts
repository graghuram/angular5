import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    add_cat_btn: string = 'add Cat';
    cat_name: string = 'cat Namesss';
    cat_length: number = 4;
    categories = [];
    constructor(private _data: DataService) {}

    ngOnInit() {
        this.cat_length = this.categories.length;
        this._data.some_cat.subscribe(res => this.categories = res);
        this._data.changeGoal(this.categories)
    }
    
    add_cat() {
        this.categories.push(this.cat_name);
        this.cat_name = '';
        this.cat_length = this.categories.length;
        
        
        this._data.changeGoal(this.categories);
    }
    
    remove_cat(i) {
        this.categories.splice(i, 1);
        this.cat_length = this.categories.length;
        
        this._data.changeGoal(this.categories)
    }

}
