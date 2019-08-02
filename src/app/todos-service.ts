import {Injectable} from "@angular/core";
import {ITodo} from "./todo";

@Injectable()
export class TodosService {
    private todos: ITodo[];

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
        if (!this.todos) {
            this.todos = [];
        }

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

    clearCompleted(): void {
        let i = this.todos.length;

        while (--i) {
            const todo = this.todos[ i ];

            if (todo.completed) {
                this.todos.splice(i, 1);
            }
        }
    }
}
