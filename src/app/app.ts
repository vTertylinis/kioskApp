import { Component } from '@angular/core';
import { KioskMenu } from './kiosk-menu/kiosk-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KioskMenu],
  template: '<app-kiosk-menu />',
  styles: [':host { display: block; width: 100%; height: 100vh; }'],
})
export class App {}
