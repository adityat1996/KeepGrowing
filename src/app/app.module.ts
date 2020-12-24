import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { MotivationalComponent } from './motivational/motivational.component';
import { ThoughtComponent } from './thought/thought.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TravelComponent } from './travel/travel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { KnowledgeSectionComponent } from './knowledge-section/knowledge-section.component';
import { GymComponent } from './gym/gym.component';
import { GroomingComponent } from './grooming/grooming.component';
import { HealthComponent } from './health/health.component';
import { TipsComponent } from './tips/tips.component';
import { MotivationalphotosComponent } from './motivationalphotos/motivationalphotos.component';
import { HealthtabComponent } from './healthtab/healthtab.component';
import { PersonalImpComponent } from './personal-imp/personal-imp.component';
import { WatchDailyComponent } from './watch-daily/watch-daily.component';
import { GroomingDressingComponent } from './grooming-dressing/grooming-dressing.component';
import { GroomingFaceComponent } from './grooming-face/grooming-face.component';
import { GroomingPoseComponent } from './grooming-pose/grooming-pose.component';
import { GroomingTieComponent } from './grooming-tie/grooming-tie.component';
import { GroomingOtherComponent } from './grooming-other/grooming-other.component';
import { GoalComponent } from './goal/goal.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SeeComponent } from './see/see.component';
import { MoComponent } from './mo/mo.component';
import { OtherComponent } from './other/other.component';
import { SketchesComponent } from './sketches/sketches.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowledgeComponent,
    MotivationalComponent,
    ThoughtComponent,
    TravelComponent,
    KnowledgeSectionComponent,
    GymComponent,
    GroomingComponent,
    HealthComponent,
    TipsComponent,
    MotivationalphotosComponent,
    HealthtabComponent,
    PersonalImpComponent,
    WatchDailyComponent,
    GroomingDressingComponent,
    GroomingFaceComponent,
    GroomingPoseComponent,
    GroomingTieComponent,
    GroomingOtherComponent,
    GoalComponent,
    LessonsComponent,
    SeeComponent,
    MoComponent,
    OtherComponent,
    SketchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    FlexLayoutModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
