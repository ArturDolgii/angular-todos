import {Component} from "@angular/core";
import {ITodo} from "../todo";
import {TodosService} from "../todos-service";

@Component({
    selector: "todos-input",
    template: `
        <input type="text"
               class="form-control"
               placeholder="What needs to be done?"
               [(ngModel)]="text"
               (keyup.enter)="addTodo(text)">
    `,
    styles: []
})
export class TodosInputComponent {
    text: string;

    constructor(private todosService: TodosService) {
        this.todosService = todosService;
    }

    addTodo(text: string): void {
        if (!text) {
            return;
        }

        const todo: ITodo = {
            id: -1,
            completed: false,
            text
        };

        this.todosService.addTodo(todo);

        this.text = "";
    }
}
