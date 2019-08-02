import {Injectable} from "@angular/core";
import {ITodo} from "./todo";

@Injectable()
export class TodosService {
    private todos: ITodo[] = [
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

    private getTodosNextId(): number {
        let id: number;

        if (!this.todos.length) {
            id = -1;
        } else {
            id = this.todos[ this.todos.length - 1 ].id;
        }

        return ++id;
    }

    getTodos(): ITodo[] {
        return this.todos;
    }

    addTodo(todo: ITodo): void {
        this.todos.push(Object.assign(todo, { id: this.getTodosNextId() }));
    }

    deleteTodo(index: number): void {
        this.todos.splice(index, 1);
    }

    getItemsLeft(): number {
        return this.todos.filter(todo => !todo.completed).length;
    }
}
