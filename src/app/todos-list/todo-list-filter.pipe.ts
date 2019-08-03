import {Pipe, PipeTransform} from "@angular/core";
import {ITodo, TodosFilterType} from "../todo";

@Pipe({
    name: "todosFilter",
    pure: false
})
export class TodosListFilterPipe implements PipeTransform {
    transform(value: ITodo[], filter: TodosFilterType): ITodo[] {
        value.forEach((todo: ITodo) => todo.hidden = false);

        if (filter) {
            value.forEach((todo: ITodo) => {
                switch (filter) {
                    case "ACTIVE":
                        if (todo.completed) {
                            todo.hidden = true;
                        }

                        break;
                    case "COMPLETED":
                        if (!todo.completed) {
                            todo.hidden = true;
                        }

                        break;
                    default:
                        todo.hidden = false;

                        break;
                }
            });
        }

        return value;
    }
}
