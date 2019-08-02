import {Component} from "@angular/core";
import {ITodo} from "../todo";

@Component({
    selector: "todos-list",
    template: `
        <ul class="list-group pt-md-5">
            <li *ngFor="let todo of todosList" class="list-group-item">
                <div class="form-check text-left">
                    <div class="float-left">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" [(ngModel)]="todo.completed">
                            <span [ngClass]="{'completed': todo.completed}">{{todo.text}}</span>
                        </label>
                    </div>
                    <div class="float-right">
                        <a href="">X</a>
                    </div>
                </div>
            </li>
        </ul>
    `,
    styles: [".completed { text-decoration: line-through; }"]
})
export class TodosListComponent {
    todosList: ITodo[] = [
        {
            id: 1,
            completed: false,
            text: "a1"
        },
        {
            id: 2,
            completed: false,
            text: "a2"
        },
        {
            id: 3,
            completed: true,
            text: "a3"
        }
    ];
}
