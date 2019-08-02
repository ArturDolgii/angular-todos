import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <main role="main">
            <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">TODOS</h1>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <todos-input></todos-input>
                            <todos-list></todos-list>
                            <todos-footer></todos-footer>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `,
    styles: []
})
export class AppComponent {
}
