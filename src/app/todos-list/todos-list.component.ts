import {Component, Input, OnInit} from "@angular/core";
import {ITodo, TodosFilterType} from "../todo";
import {TodosService} from "../todos-service";

@Component({
    selector: "todos-list",
    templateUrl: "todos-list.component.html",
    styles: [".completed { text-decoration: line-through; }"]
})
export class TodosListComponent implements OnInit {
    todosList: ITodo[];

    @Input() activeFilter: TodosFilterType;

    constructor(private todosService: TodosService) {
        this.todosService = todosService;
    }

    ngOnInit(): void {
        this.todosList = this.todosService.getTodos();
    }

    deleteTodo(index: number): void {
        this.todosService.deleteTodo(index);
    }
}
