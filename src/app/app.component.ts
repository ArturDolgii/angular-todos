import {Component} from "@angular/core";
import {TodosFilterType} from "./todo";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styles: []
})
export class AppComponent {
    activeFilter: TodosFilterType;

    onFilterChange(filter: TodosFilterType) {
        this.activeFilter = filter;
    }
}
