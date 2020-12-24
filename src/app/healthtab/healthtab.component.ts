import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthtab',
  templateUrl: './healthtab.component.html',
  styleUrls: ['./healthtab.component.css']
})
export class HealthtabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgNameArray: Array<string> = [
    "10527609_10152227206091835_5968247029127158783_n.jpg",
"10565106_10152204958171835_1935898165849708879_n.jpg",
"1601119_10152208117921835_5524969430666207262_n.jpg",
"20155971_1095021657309165_3825599128573229469_n.jpg",
"20156126_1095021667309164_5718187589562042867_n.jpg",
"20228605_1095021503975847_185572092832986429_n.jpg",
"20229351_1095021593975838_6187949730585501513_n.jpg",
"249182_549584928425019_751475821_n.jpg",
"34f8fc310ce6b59d8464808ca73baf80.jpg",
"36689d6b271d91caf9300ff9434e2dfe.jpg",
"75436bc81938638b266f9149db43c6a3.jpg",
"8026a7ffba9ed76197f54cb14136d943.jpg",
"8b684bcb2947cb601f11606abf5d6439.jpg",
"asthma ,eat onions.jpg",
"bladder problem,eat canberry juice.jpg",
"everyday food - blueberry.jpg",
"everyday food - broccoli.jpg",
"everyday food - flaxseeds.jpg",
"everyday food - garlic.jpg",
"everyday food - oats.jpg",
"everyday food - olive oil.jpg",
"everyday food - yogurt.jpg",
"everyday food.jpg",
"FB_IMG_1431430158392.jpg",
"FB_IMG_1433698584771.jpg",
"IMG_1420458475947.jpeg",
"IMG_20180929_105245.png",
"IMG_20181114_223644.png",
"IMG_20190602_185345.png",
"IMG_34053516776962.jpeg",
"IMG_34121332502926.jpeg",
"Screenshot_2017-10-17-10-00-25.png",
"Screenshot_2018-03-03-01-29-59.png",
"Screenshot_2018-04-05-20-59-35.png",
"Screenshot_2018-05-07-23-17-34.png",
"Screenshot_2018-05-11-01-28-53.png",
"Screenshot_2018-05-11-01-38-21.png",
"Screenshot_2018-05-12-00-14-07.png",
"Screenshot_2018-05-12-00-28-20.png",
"Screenshot_2018-05-12-00-35-05.png",
"Screenshot_2018-05-12-00-41-29.png",
"Screenshot_2018-05-13-01-05-22.png",
"Screenshot_2018-05-13-01-07-00.png",
"Screenshot_2018-05-13-01-35-43.png",
"Screenshot_2018-05-19-01-06-58.png",
"Screenshot_2018-05-19-01-10-35.png",
"Screenshot_2018-05-19-01-11-53.png",
"Screenshot_2018-05-19-20-24-17.png",
"Screenshot_2018-06-03-23-46-07.png",
"Screenshot_2018-06-03-23-55-05.png",
"Screenshot_2018-06-07-23-47-09.png",
"Screenshot_2018-06-07-23-49-33.png",
"Screenshot_2018-06-08-22-57-20.png",
"Screenshot_2018-06-16-10-41-38.png",
"Screenshot_2018-06-16-11-29-47.png",
"Screenshot_2018-06-16-11-39-46.png",
"Screenshot_2018-06-16-23-56-11.png",
"Screenshot_2018-06-17-00-04-13.png",
"Screenshot_2018-06-17-00-15-45.png",
"Screenshot_2018-06-17-00-18-03.png",
"Screenshot_2018-07-20-19-27-54.png",
"Screenshot_2018-07-22-15-59-29.png",
"Screenshot_2018-10-14-00-07-26.png",
"Screenshot_2018-10-27-22-33-18.png",
"Screenshot_2018-10-29-11-08-07.png",
"Screenshot_2018-10-30-23-30-38.png",
"Screenshot_2018-10-30-23-41-13.png",
"Screenshot_2018-10-30-23-42-01.png",
"Screenshot_2018-10-30-23-43-37.png",
"Screenshot_2018-10-30-23-43-42.png",
"Screenshot_2018-10-30-23-43-49.png",
"Screenshot_2018-10-30-23-43-56.png",
"Screenshot_2018-10-31-23-01-32.png",
"Screenshot_2018-10-31-23-01-47.png",
"Screenshot_2018-10-31-23-01-54.png",
"Screenshot_2018-10-31-23-02-01.png",
"Screenshot_2018-10-31-23-02-08.png",
"Screenshot_2018-10-31-23-02-12.png",
"Screenshot_2018-10-31-23-02-16.png",
"Screenshot_2018-11-13-21-35-56.png",
"Screenshot_2018-11-13-21-36-05.png",
"Screenshot_2018-11-13-21-36-12.png",
"Screenshot_2018-11-13-21-36-18.png",
"Screenshot_2018-11-13-21-36-23.png",
"Screenshot_2018-11-13-21-36-29.png",
"Screenshot_2018-11-13-21-36-34.png",
"Screenshot_2018-11-13-21-36-39.png",
"Screenshot_2018-11-13-21-37-20.png",
"Screenshot_2018-11-13-21-37-33.png",
"Screenshot_2018-11-13-21-37-45.png",
"Screenshot_2018-11-13-21-37-50.png",
"Screenshot_2018-12-07-16-15-36.png",
"Screenshot_2018-12-11-22-28-50.png",
"Screenshot_2019-01-10-20-55-26.png",
"Screenshot_2019-01-10-20-55-31.png",
"Screenshot_2019-01-10-20-55-42.png",
"Screenshot_2019-02-15-00-44-10.png",
"Screenshot_2019-02-15-23-03-08.png",
"Screenshot_2019-02-15-23-03-16.png",
"Screenshot_2019-02-16-09-39-27.png",
"Screenshot_2019-02-16-11-32-11.png",
"Screenshot_2019-02-18-09-14-39.png",
"Screenshot_2019-02-18-09-14-46.png",
"Screenshot_2019-03-05-02-42-10.png",
"Screenshot_2019-03-05-02-42-55.png",
"Screenshot_2019-03-10-11-59-20.png",
"Screenshot_2019-03-19-09-39-21.png",
"Screenshot_2019-04-19-17-35-26.png",
"Screenshot_2019-05-27-17-48-50.png",
"Screenshot_2019-06-01-01-05-53.png",
"Screenshot_2019-06-25-00-32-05-782_com.instagram.android~2.png",
"Screenshot_2019-07-04-23-01-18.png",
"Screenshot_2019-07-28-08-35-14.png",
"Screenshot_2019-07-28-08-36-20.png",
"Screenshot_2019-07-28-08-36-35.png",
"Screenshot_2019-07-28-08-36-42.png",
"Screenshot_2019-07-30-21-28-38-460_com.instagram.android~2.png",
"Screenshot_20200125-202124.png",
"Screenshot_20200125-202209.png",
"Screenshot_20200216-132003.png"
  ];
}
