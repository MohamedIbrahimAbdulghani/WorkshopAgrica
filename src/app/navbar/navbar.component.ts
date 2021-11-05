import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ToHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
  ToAbout() {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  ToService() {
    document.getElementById("service")?.scrollIntoView({behavior:"smooth"});
  }
  ToBlog() {
    document.getElementById("blog")?.scrollIntoView({behavior:"smooth"});
  }
  ToContact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }

}
