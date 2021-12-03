import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'GitHubFinder';

    public username:string = JSON.parse(sessionStorage.getItem('user') as string);
}
