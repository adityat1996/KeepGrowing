import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-imp',
  templateUrl: './personal-imp.component.html',
  styleUrls: ['./personal-imp.component.css']
})
export class PersonalImpComponent implements OnInit {

  basePath: string = "assets/images/perosnalImprovization/";
  imgSrc: string = "";
  randomNumber: number = 0;

  constructor(private _ref: ChangeDetectorRef) { }

  ngOnInit() {
    const setInterval = window['__zone_symbol__setInterval'];
    setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * (24 - 1) + 1);
      this.imgSrc = this.basePath + this.PIArray[this.randomNumber];
      this._ref.detectChanges();
    }, 60000);
  }

  PIArray: Array<string> = [
    "1.jpg",
    "10009908_10151958675836835_979552600_n.jpg",
    "10170695_767535619938350_283317068166021914_n.jpg",
    "10305617_770133749697579_5144870471770343282_n.jpg",
    "15109351_1374588369241455_324385794362874311_n.jpg",
    "15109411_1374588552574770_7175541198706925829_n.jpg",
    "15134760_1374588352574790_4071408904068770924_n.jpg",
    "15135726_1374588295908129_7037151261846189632_n.jpg",
    "15171085_1374588432574782_7796297446726627859_n.jpg",
    "15171090_1374588429241449_8233541426181302848_n.jpg",
    "15171251_1374588562574769_5285772489746228525_n.jpg",
    "15178227_1374588645908094_6828435230699597269_n.jpg",
    "15179164_1374588512574774_9102313791920827344_n.jpg",
    "15181413_1374588509241441_3450012712002275131_n.jpg",
    "15192698_1374588435908115_710659124603668888_n.jpg",
    "15193660_1374588802574745_4644009086857956223_n.jpg",
    "15203287_1374588495908109_6499440191972800655_n.jpg",
    "15219602_1374588559241436_6399759110318100115_n.jpg",
    "15232059_1374588349241457_14193962227640246_n.jpg",
    "15241983_1374588299241462_6380023705331769694_n.jpg",
    "vocab 2.jpg",
    "vocab 3.jpg",
    "vocab 4.jpg",
    "vocab.jpg"
  ];

}
