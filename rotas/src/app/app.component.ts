import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CRUD APP';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
      this.authService.mostrarMenuEmitter.subscribe(
          mostrar => this.mostrarMenu = mostrar
      );
  }
}
