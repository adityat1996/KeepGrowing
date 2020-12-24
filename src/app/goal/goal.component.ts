import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgNameArray: Array<string> = [
    "IMG_20181108_214657.png",
    "IMG_20181111_152216.png"
  ];
}
