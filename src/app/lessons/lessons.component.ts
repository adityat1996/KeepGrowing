import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgNameArray: Array<string> = [
    "IMG_20180929_104930.png",
    "IMG_20180929_105118.png",
    "IMG_20180929_123936.png",
    "IMG_20180930_194141.png",
    "IMG_20181004_132754.png",
    "Screenshot_2018-07-07-10-19-25.png",
    "Screenshot_2019-01-03-08-25-09.png"
  ];
}
