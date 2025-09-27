import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from "./layout/sidenav/sidenav";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
