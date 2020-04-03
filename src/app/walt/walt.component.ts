import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walt',
  templateUrl: './walt.component.html',
  styleUrls: ['./walt.component.css']
})
export class WaltComponent implements OnInit {

  userName: string = 'username'

  constructor() { }

  ngOnInit(): void {
  }

  checkUsername() {
    return !this.userName;

    // if (this.userName == '') {
    //   return true;
    // }
    //
    // return false;
  }

  resetUsername() {
    this.userName = ''
  }

}
