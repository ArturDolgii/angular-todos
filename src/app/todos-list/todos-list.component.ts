import {Component, OnInit} from "@angular/core";
import {ITodo} from "../todo";
import {TodosService} from "../todos-service";

@Component({
    selector: "todos-list",
    template: `
        <ul class="list-group pt-md-5">
            <li *ngFor="let todo of todosList; let i = index;" class="list-group-item">
                <div class="form-check text-left">
                    <div class="float-left">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" [(ngModel)]="todo.completed">
                            <span [ngClass]="{'completed': todo.completed}">{{todo.text}}</span>
                        </label>
                    </div>
                    <div class="float-right">
                        <button type="button"
                                class="btn btn-link"
                                (click)="deleteTodo(i)">X</button>
                    </div>
                </div>
            </li>
        </ul>
    `,
    styles: [".completed { text-decoration: line-through; }"]
})
export class TodosListComponent implements OnInit {
    todosList: ITodo[];

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
