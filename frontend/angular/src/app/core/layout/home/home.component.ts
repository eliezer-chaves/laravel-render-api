import { Component } from '@angular/core';
import { CreateAccountFormComponent } from "../../../shared/create-account-form/create-account-form.component";

@Component({
  selector: 'app-home',
  imports: [CreateAccountFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
