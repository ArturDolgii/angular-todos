import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {TodosInputComponent} from "./todos-input/todos-input.component";
import {FormsModule} from "@angular/forms";
import {TodosListComponent} from "./todos-list/todos-list.component";
import {TodosFooterComponent} from "./todos-footer/todos-footer.component";
import {TodosService} from "./todos-service";
import {TodosListFilterPipe} from "./todos-list/todo-list-filter.pipe";

@NgModule({
    declarations: [
        AppComponent,
        TodosInputComponent,
        TodosListComponent,
        TodosFooterComponent,
        TodosListFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        TodosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
