import {Component} from "@angular/core";

@Component({
    selector: "todos-input",
    template: `
        <input type="text"
               class="form-control"
               placeholder="What needs to be done?">
    `,
    styles: []
})
export class TodosInputComponent {
}
