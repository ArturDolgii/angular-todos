import {Component} from "@angular/core";
import {ITodo} from "../todo";
import {TodosService} from "../todos-service";

@Component({
    selector: "todos-input",
    templateUrl: "todos-input.component.html",
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
            text,
            hidden: false
        };

        this.todosService.addTodo(todo);

        this.text = "";
    }
}
