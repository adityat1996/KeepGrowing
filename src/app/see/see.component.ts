import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css']
})
export class SeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgNameArray: Array<string> = [
    "10376330_10152474758320485_1139424954500395148_n.jpg",
    "10420321_550597125052515_963081314743683984_n.jpg",
    "1533806_754642627894316_1724105906_n.jpg",
    "FB_IMG_1435299576379.jpg",
    "IMG-20140617-WA0026.jpg",
    "IMG_20181114_222649.png",
    "Mo1.png",
    "Mo2.png",
    "peaceOfMind.PNG",
    "yellowColorInfo.png"
  ];
}
