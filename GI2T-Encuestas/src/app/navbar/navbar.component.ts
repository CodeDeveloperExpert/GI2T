import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterLink],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}