import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn!: boolean;
  constructor( private router: Router) {}
}
