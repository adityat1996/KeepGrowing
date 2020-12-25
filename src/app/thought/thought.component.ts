import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  basePath: string = "assets/images/thoughts/";
  imgSrc: string = "";
  randomNumber: number = 0;

  constructor(private _ref: ChangeDetectorRef) { }

  ngOnInit() {
    const setInterval = window['__zone_symbol__setInterval'];
    setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * (45 - 1) + 1);
      this.imgSrc = this.basePath + this.thoughtArray[this.randomNumber];
      this._ref.detectChanges();
    }, 60000);

  }

  thoughtArray: Array<string> = [
    "FB_IMG_1461639820986.jpg",
    "FB_IMG_1461639812385.jpg",
    "FB_IMG_1461639801425.jpg",
    "FB_IMG_1461639793992.jpg",
    "FB_IMG_1461639784712.jpg",
    "FB_IMG_1461639776176.jpg",
    "FB_IMG_1461639764764.jpg",
    "FB_IMG_1461639753290.jpg",
    "FB_IMG_1461639742831.jpg",
    "FB_IMG_1461639726690.jpg",
    "FB_IMG_1461639719165.jpg",
    "FB_IMG_1461638456971.jpg",
    "FB_IMG_1461638443144.jpg",
    "FB_IMG_1461638436950.jpg",
    "FB_IMG_1461638430413.jpg",
    "FB_IMG_1461638408235.jpg",
    "FB_IMG_1461638394447.jpg",
    "FB_IMG_1461638385440.jpg",
    "FB_IMG_1461638330081.jpg",
    "FB_IMG_1461638290295.jpg",
    "FB_IMG_1461638268061.jpg",
    "FB_IMG_1461638222008.jpg",
    "FB_IMG_1461638209144.jpg",
    "FB_IMG_1461638201927.jpg",
    "FB_IMG_1461638175988.jpg",
    "FB_IMG_1461638168982.jpg",
    "FB_IMG_1461638156133.jpg",
    "FB_IMG_1461638142698.jpg",
    "FB_IMG_1461638109794.jpg",
    "FB_IMG_1461638077605.jpg",
    "FB_IMG_1461638068718.jpg",
    "FB_IMG_1461638059563.jpg",
    "FB_IMG_1461638052199.jpg",
    "FB_IMG_1461638044852.jpg",
    "FB_IMG_1461638038132.jpg",
    "FB_IMG_1461638026938.jpg",
    "FB_IMG_1461638001006.jpg",
    "FB_IMG_1461637992088.jpg",
    "FB_IMG_1461637972367.jpg",
    "FB_IMG_1461639883785.jpg",
    "FB_IMG_1461639873329.jpg",
    "FB_IMG_1461639863801.jpg",
    "FB_IMG_1461639855914.jpg",
    "FB_IMG_1461639837450.jpg",
    "FB_IMG_1461639828187.jpg"
  ]

}
