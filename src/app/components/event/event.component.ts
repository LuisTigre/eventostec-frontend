import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Input() city: string = '';
  @Input() state: string = '';
  @Input() bannerUrl: string =
    'https://images.sympla.com.br/630305a3009a1-lg.png';
  @Input() url: string = 'https://hacktown.com.br/';
}
