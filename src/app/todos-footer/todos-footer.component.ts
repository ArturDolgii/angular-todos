import {Component} from "@angular/core";

@Component({
    selector: "todos-footer",
    template: `
        <small>
            <div class="row">
                <div class="col-md-3">
                    <span>2 items left</span>
                </div>
                <div class="col-md-6">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="">All</a></li>
                        <li class="list-inline-item"><a href="">Active</a></li>
                        <li class="list-inline-item"><a href="">Completed</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <a href="">Clear completed</a>
                </div>
            </div>
        </small>
    `,
    styles: []
})
export class TodosFooterComponent {
}
