import {Component, EventEmitter, Output} from "@angular/core";
import {TodosService} from "../todos-service";
import {TodosFilterType} from "../todo";

@Component({
    selector: "todos-footer",
    template: `
        <ul class="list-inline" [ngClass]="{ 'd-none': getTodosCount() === 0 }">
            <li class="list-inline-item float-left">
                <span class="btn">{{itemsLeft}} {{itemsLeft === 1 ? "item left" : "items left"}}</span>
            </li>
            <li class="list-inline-item">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <button type="button"
                                class="btn btn-link"
                                [ngClass]="{'active': !activeFilter || activeFilter === 'ALL'}"
                                (click)="renderTodosByFilter('ALL')">All</button>
                    </li>
                    <li class="list-inline-item">
                        <button type="button"
                                class="btn btn-link"
                                [ngClass]="{'active': activeFilter === 'ACTIVE'}"
                                (click)="renderTodosByFilter('ACTIVE')">Active</button>
                    </li>
                    <li class="list-inline-item">
                        <button type="button"
                                class="btn btn-link"
                                [ngClass]="{'active': activeFilter === 'COMPLETED'}"
                                (click)="renderTodosByFilter('COMPLETED')">Completed</button>
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
    styles: [".active { color: dimgray; text-decoration: none; }"]
})
export class TodosFooterComponent {
    private _itemsLeft: number;

    activeFilter: TodosFilterType;

    @Output() onFilterChange: EventEmitter<TodosFilterType> = new EventEmitter<TodosFilterType>();

    constructor(private todosService: TodosService) {
        this.todosService = todosService;
    }

    get itemsLeft(): number {
        return this._itemsLeft = this.todosService.getItemsLeft();
    }

    clearCompleted(): void {
        this.todosService.clearCompleted();
    }

    renderTodosByFilter(filter: TodosFilterType): void {
        this.activeFilter  = filter;
        this.onFilterChange.emit(filter);
    }

    getTodosCount(): number {
        return this.todosService.getTodos().length;
    }
}
