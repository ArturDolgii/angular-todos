import {Component, EventEmitter, Output} from "@angular/core";
import {TodosService} from "../todos-service";
import {TodosFilterType} from "../todo";

@Component({
    selector: "todos-footer",
    templateUrl: "todos-filter.component.html",
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
