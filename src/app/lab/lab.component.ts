import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  // styleUrls: ['./lab.component.css']
  styles: [`
    .pastFive { color: white }
    
  `]
})
export class LabComponent implements OnInit {

  showP: boolean = true;
  clickTracker: number = 0;
  clickArray = [];
  theDateTime: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateDisplay() {
    this.showP = !this.showP;
    this.clickTracker++;
    this.theDateTime = new Date().toLocaleString();
    this.clickArray.push(this.theDateTime);
  }

  getBgColor() {
    return this.clickTracker >= 5 ? 'blue' : ''
  }

}
