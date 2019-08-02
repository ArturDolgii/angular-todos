import {Component} from "@angular/core";
import {TodosService} from "../todos-service";

@Component({
    selector: "todos-footer",
    template: `
        <ul class="list-inline">
            <li class="list-inline-item float-left">
                <span class="btn">{{itemsLeft}} {{itemsLeft === 1 ? "item left" : "items left"}}</span>
            </li>
            <li class="list-inline-item">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <button type="button"
                                class="btn btn-link">
                            <span class="footer-text-small">All</span>
                        </button>
                    </li>
                    <li class="list-inline-item">
                        <button type="button"
                                class="btn btn-link">Active</button>
                    </li>
                    <li class="list-inline-item">
                        <button type="button"
                                class="btn btn-link">Completed</button>
                    </li>
                </ul>
            </li>
            <li class="list-inline-item float-right">
                <button type="button"
                        class="btn btn-link"
                        (click)="clearCompleted()">Clear completed</button>
            </li>
        </ul>
    `,
    styles: []
})
export class TodosFooterComponent {
    private _itemsLeft: number;

    constructor(private todosService: TodosService) {
        this.todosService = todosService;
    }

    get itemsLeft(): number {
        return this._itemsLeft = this.todosService.getItemsLeft();
    }

    clearCompleted(): void {
        this.todosService.clearCompleted();
    }
}
