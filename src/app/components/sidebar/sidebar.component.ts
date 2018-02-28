import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isAdmin: boolean;

  ngOnInit() {
   this.authService.checkAdmin().subscribe(response => {
      this.isAdmin = response;
    });
  }

}
