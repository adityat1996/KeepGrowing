import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  basePath: string = "assets/images/Health/";
  imgSrc: string = "";
  randomNumber: number = 0;

  constructor(private _ref: ChangeDetectorRef) { }

  ngOnInit() {
    const setInterval = window['__zone_symbol__setInterval'];
    setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * (23 - 1) + 1) ; 
      this.imgSrc = this.basePath + this.healthArray[this.randomNumber];
      this._ref.detectChanges();
    },60000);
   
  }

  healthArray: Array<string> = [
    "10440886_10152101946916835_2440906927735893971_n.jpg",
"10492080_10152224254256835_4800868441698922052_n.jpg",
"11000350_652495218216807_8832421559012318914_n.jpg",
"12032060_891366487616026_2856067982622162241_n.jpg",
"1609867_701105396606304_720149394_n.jpg",
"arthitis pain.jpg",
"corns.png",
"FB_IMG_1420055701840.jpg",
"FB_IMG_1420116265250.jpg",
"FB_IMG_1424956947702.jpg",
"FB_IMG_1425924728187.jpg",
"FB_IMG_1426404200802.jpg",
"FB_IMG_1426404221249.jpg",
"FB_IMG_1428044660761.jpg",
"FB_IMG_1429273602131.jpg",
"FB_IMG_1430846205815.jpg",
"FB_IMG_1432443229427.jpg",
"FB_IMG_1435774273968.jpg",
"FB_IMG_1435840859338.jpg",
"FB_IMG_1435909334936.jpg",
"IMG_15919680306842.jpeg",
"imp 8.jpg",
"mint.png"
  ]


}
