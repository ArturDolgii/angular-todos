import {Component} from "@angular/core";
import {TodosFilterType} from "./todo";

@Component({
    selector: "app-root",
    template: `
        <main role="main">
            <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">TODOS</h1>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <todos-input></todos-input>
                            <todos-list [activeFilter]="activeFilter"></todos-list>
                            <todos-footer (onFilterChange)="onFilterChange($event)"></todos-footer>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `,
    styles: []
})
export class AppComponent {
    activeFilter: TodosFilterType;

    onFilterChange(filter: TodosFilterType) {
        this.activeFilter = filter;
    }
}
