import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  source = interval(10000);
  basePath: string = "../../assets/images/thoughts/";
  imgSrcPath: string;
  imgPath: string;

  constructor() {
  }
  ngOnInit(): void {
    this.subscription = this.source.subscribe(val => this.opensnack());
  }

  opensnack() {
    // this.imgSrcPath = this.basePath + this.thoughtArray[Math.floor(Math.random() * (9 - 1) + 1)] ; 
    // console.log(this.imgSrcPath);
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
    "FB_IMG_1461639726690.jpg"
  ]

  //image: '../../assets/images/homeImages/naturalDoctors.png',
  //thumbImage: '../../assets/images/homeImages/naturalDoctors.png',
  imageObject: Array<object> = [
    {
      image: 'assets/images/homeImages/naturalDoctors.png',
      thumbImage: 'assets/images/homeImages/naturalDoctors.png',
    }, {
      image: '../../assets/images/homeImages/eatingTime.png',
      thumbImage: '../../assets/images/homeImages/eatingTime.png'
    }, {
      image: '../../assets/images/homeImages/ayurvedicDietPlan.png',
      thumbImage: '../../assets/images/homeImages/ayurvedicDietPlan.png'
    }, {
      image: '../../assets/images/homeImages/IdealFoodQualities.png',
      thumbImage: '../../assets/images/homeImages/IdealFoodQualities.png'
    }, {
      image: '../../assets/images/homeImages/prohibitedAfterSunset.png',
      thumbImage: '../../assets/images/homeImages/prohibitedAfterSunset.png'
    }, {
      image: '../../assets/images/homeImages/waterInfo.jpg',
      thumbImage: '../../assets/images/homeImages/waterInfo.jpg'
    }, {
      image: '../../assets/images/homeImages/BestFoodMO.jpg',
      thumbImage: '../../assets/images/homeImages/BestFoodMO.jpg'
    }, {
      image: '../../assets/images/homeImages/benefitsOfAlcohol.png',
      thumbImage: '../../assets/images/homeImages/benefitsOfAlcohol.png'
    }, {
      image: '../../assets/images/homeImages/FoodIsHealth.png',
      thumbImage: '../../assets/images/homeImages/FoodIsHealth.png'
    }, {
      image: '../../assets/images/homeImages/woman1920-1148923.png',
      thumbImage: '../../assets/images/homeImages/woman1920-1148923.png'
    }, {
      image: '../../assets/images/homeImages/organicFood.jpg',
      thumbImage: '../../assets/images/homeImages/organicFood.jpg'
    }, {
      image: '../../assets/images/homeImages/CRAP.jpg',
      thumbImage: '../../assets/images/homeImages/CRAP.jpg'
    }, {
      image: '../../assets/images/homeImages/RulesForHealth.png',
      thumbImage: '../../assets/images/homeImages/RulesForHealth.png'
    }, {
      image: '../../assets/images/homeImages/FoodMO.png',
      thumbImage: '../../assets/images/homeImages/FoodMO.png'
    }, {
      image: '../../assets/images/homeImages/BestHabits.png',
      thumbImage: '../../assets/images/homeImages/BestHabits.png'
    }, {
      image: '../../assets/images/homeImages/bestTimeForVitaminD.png',
      thumbImage: '../../assets/images/homeImages/bestTimeForVitaminD.png'
    }, {
      image: '../../assets/images/homeImages/curdMistakes.png',
      thumbImage: '../../assets/images/homeImages/curdMistakes.png'
    }, {
      image: '../../assets/images/homeImages/NutritionQuote.png',
      thumbImage: '../../assets/images/homeImages/NutritionQuote.png'
    }, {
      image: '../../assets/images/homeImages/reconnect.png',
      thumbImage: '../../assets/images/homeImages/reconnect.png'
    }, {
      image: '../../assets/images/homeImages/SunBath.png',
      thumbImage: '../../assets/images/homeImages/SunBath.png'
    }, {
      image: '../../assets/images/homeImages/waterIntake.png',
      thumbImage: '../../assets/images/homeImages/waterIntake.png'
    }, {
      image: '../../assets/images/homeImages/RunningBenefit.png',
      thumbImage: '../../assets/images/homeImages/RunningBenefit.png'
    }, {
      image: '../../assets/images/homeImages/3hobbiesForLife.png',
      thumbImage: '../../assets/images/homeImages/3hobbiesForLife.png'
    }, {
      image: '../../assets/images/homeImages/FastingBenefits.jpg',
      thumbImage: '../../assets/images/homeImages/FastingBenefits.jpg'
    }, {
      image: '../../assets/images/homeImages/EmotionsForHeart.jpg',
      thumbImage: '../../assets/images/homeImages/EmotionsForHeart.jpg'
    }, {
      image: '../../assets/images/homeImages/waterIntakeWithTime.png',
      thumbImage: '../../assets/images/homeImages/waterIntakeWithTime.png'
    }, {
      image: '../../assets/images/homeImages/FoodOrgans.png',
      thumbImage: '../../assets/images/homeImages/FoodOrgans.png'
    }, {
      image: '../../assets/images/homeImages/PartsRegeneration.png',
      thumbImage: '../../assets/images/homeImages/PartsRegeneration.png'
    }, {
      image: '../../assets/images/homeImages/ageWiseSleepHours.png',
      thumbImage: '../../assets/images/homeImages/ageWiseSleepHours.png'
    }, {
      image: '../../assets/images/homeImages/walkingBenefitsMinute.png',
      thumbImage: '../../assets/images/homeImages/walkingBenefitsMinute.png'
    }
    , {
      image: '../../assets/images/homeImages/lifeLesson.png',
      thumbImage: '../../assets/images/homeImages/lifeLesson.png'
    }, {
      image: '../../assets/images/homeImages/Defloat.png',
      thumbImage: '../../assets/images/homeImages/Defloat.png'
    }, {
      image: '../../assets/images/homeImages/nostril.png',
      thumbImage: '../../assets/images/homeImages/nostril.png'
    }, {
      image: '../../assets/images/homeImages/ShowerMeditation.png',
      thumbImage: '../../assets/images/homeImages/ShowerMeditation.png'
    }
    , {
      image: '../../assets/images/homeImages/sunSulatation.jpg',
      thumbImage: '../../assets/images/homeImages/sunSulatation.jpg'
    }, {
      image: '../../assets/images/homeImages/acupressureRemdey.png',
      thumbImage: '../../assets/images/homeImages/acupressureRemdey.png'
    }, {
      image: '../../assets/images/homeImages/bellyButtonRemedy.png',
      thumbImage: '../../assets/images/homeImages/bellyButtonRemedy.png'
    }, {
      image: '../../assets/images/homeImages/FoodOrganRel.png',
      thumbImage: '../../assets/images/homeImages/FoodOrganRel.png'
    }, {
      image: '../../assets/images/homeImages/FoodOrganRel2.png',
      thumbImage: '../../assets/images/homeImages/FoodOrganRel2.png'
    }, {
      image: '../../assets/images/homeImages/FoodOvercomeSymptoms2.png',
      thumbImage: '../../assets/images/homeImages/FoodOvercomeSymptoms2.png'
    }, {
      image: '../../assets/images/homeImages/FoodOvercomeSymptons.png',
      thumbImage: '../../assets/images/homeImages/FoodOvercomeSymptons.png'
    }, {
      image: '../../assets/images/homeImages/InstantReliefFromDigestiveProblems.png',
      thumbImage: '../../assets/images/homeImages/InstantReliefFromDigestiveProblems.png'
    }
    , {
      image: '../../assets/images/homeImages/LifeStyleChangesforDigestiveProblems.png',
      thumbImage: '../../assets/images/homeImages/LifeStyleChangesforDigestiveProblems.png'
    }
    , {
      image: '../../assets/images/homeImages/FB_IMG_1428157625848.png',
      thumbImage: '../../assets/images/homeImages/FB_IMG_1428157625848.png'
    }
    , {
      image: '../../assets/images/homeImages/FB_IMG_1420000004968.png',
      thumbImage: '../../assets/images/homeImages/FB_IMG_1420000004968.png'
    }
  ];


}
