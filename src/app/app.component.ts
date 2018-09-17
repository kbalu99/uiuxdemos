import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {  
  title = 'uiuxdemos';
  mockups = [
    {
        "name": "Search Programs",
        "link": "https://kbalu99.github.io/uiux/Search.html",
        "preview":  "./assets/images/Search_Pgms.png"
    },

    {
        "name": "Duplicate",
        "link": "https://kbalu99.github.io/uiux/Search.html",
        "preview":  "./assets/images/Search_Pgms.png"
    }
];
}
