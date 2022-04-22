import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  logged = false;

  constructor() { }

  ngOnInit(): void {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   this.logged = true;
    // }
    const log = localStorage.getItem('log');
    if(log) {
      this.logged = true;
    }
  }

  logout() {
    localStorage.removeItem('log');
    // localStorage.removeItem('token');
    window.location.reload();
  }

}
