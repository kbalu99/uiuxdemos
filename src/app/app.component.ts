import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
