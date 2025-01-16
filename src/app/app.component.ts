import { Component, OnInit, Renderer2,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ShortPromptComponent } from "./short-prompt/short-prompt.component";
import { TestComponent } from "./test/test.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ShortPromptComponent, TestComponent]
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}


  ngOnInit() {
    this.renderer.listen('window', 'click', (event) => {
      console.log('Focused element:', event.target);
    });
  }
}
