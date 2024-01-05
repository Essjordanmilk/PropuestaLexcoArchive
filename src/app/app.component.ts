import { Component, computed, signal } from '@angular/core';
import { state, style, transition, trigger, animate } from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateX(-10px)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hover', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', animate('350ms ease-out')),
      transition('* => void', animate('350ms ease-in')),
      transition('* => hover', animate('1000ms ease-out')),
      transition('hover => *', animate('350ms ease-in')),
    ])
  ]
})
export class AppComponent {
  title = 'sevenet-archivo';
  collapsed = signal(true);

  sidenavWidth = computed(() => this.collapsed() ? '80px' : '250px');


}
