import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HomeComponent } from "./core/layout/home/home.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NzButtonModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
}
