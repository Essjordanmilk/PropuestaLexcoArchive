import { Component, computed, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sevenet-archivo';
  collapsed = signal(true);

  sidenavWidth = computed(() => this.collapsed() ? '80px' : '250px');

}
