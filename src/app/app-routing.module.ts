import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { GroomingDressingComponent } from './grooming-dressing/grooming-dressing.component';
import { GroomingFaceComponent } from './grooming-face/grooming-face.component';
import { GroomingOtherComponent } from './grooming-other/grooming-other.component';
import { GroomingPoseComponent } from './grooming-pose/grooming-pose.component';
import { GroomingTieComponent } from './grooming-tie/grooming-tie.component';
import { GroomingComponent } from './grooming/grooming.component';
import { GymComponent } from './gym/gym.component';
import { HealthComponent } from './health/health.component';
import { HealthtabComponent } from './healthtab/healthtab.component';
import { HomeComponent } from './home/home.component';
import { KnowledgeSectionComponent } from './knowledge-section/knowledge-section.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MoComponent } from './mo/mo.component';
import { OtherComponent } from './other/other.component';
import { SeeComponent } from './see/see.component';
import { SketchesComponent } from './sketches/sketches.component';
import { TipsComponent } from './tips/tips.component';
import { TravelComponent } from './travel/travel.component';
import { WatchDailyComponent } from './watch-daily/watch-daily.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'healthSection', component: HealthtabComponent },
  { path: 'groomingSection', component: GroomingComponent },
  { path: 'gymSection', component: GymComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'knowledgeSection', component: KnowledgeSectionComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'watchDaily', component: WatchDailyComponent },
  { path: 'groomingDressing', component: GroomingDressingComponent },
  { path: 'groomingFace', component: GroomingFaceComponent },
  { path: 'groomingPose', component: GroomingPoseComponent },
  { path: 'groomingTie', component: GroomingTieComponent },
  { path: 'groomingOther', component: GroomingOtherComponent },
  { path: 'goal', component: GoalComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'see', component: SeeComponent },
  { path: 'mo', component: MoComponent },
  { path: 'other', component: OtherComponent },
  { path: 'sketches', component: SketchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
