import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: false,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss'
})
export class ProfileCard {
  @Input() user: any;

}
