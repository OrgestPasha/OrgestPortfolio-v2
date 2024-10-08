import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service/service.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public Service: ServiceService, @Inject(PLATFORM_ID) private platformId: Object) {}

  dynamicHeight: string = "";
  dynamicHeightClosed: string = "";
  project = { activeToggle: true }; // Example project object
  windowWidth:number=0;
  ngOnInit() {
    this.updateHeight();
    if(isPlatformBrowser(this.platformId)){
      this.windowWidth=window.innerWidth;
    }
    
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateHeight();
    if(isPlatformBrowser(this.platformId)){
      this.windowWidth=window.innerWidth;
    }
   
  }

  updateHeight() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 576) { // 36rem in pixels (assuming 1rem = 16px)
        this.dynamicHeight = '240px'; // Set to your desired height for smaller screens
        this.dynamicHeightClosed = '30px';
      } else {
        this.dynamicHeight = '190px'; // Default height
        this.dynamicHeightClosed = '50px';
      }
    }
  }

  projects = [{
    name: "Soma’s Slow Food",
    description: "A project displaying the elegance of a beautiful restaurant <br>The purpouse of its creation was teaching myself different front end effects and animations",
    toolsUsed: "Angular , TypeScript, Scss",
    liveLink: "https://soma.orgestpasha.tech/",
    gitHubLink: "https://github.com/OrgestPasha/somaFood",
    activeToggle: false,
    isHovered:false,
  },
  {
    name: "Shega Marketing",
    description: "Shega Marketing <br> Created as a freelance project for ShegaMarketing Agency displaying their motives,services and contact",
    toolsUsed: "Angular , SCSS, TypeScript",
    liveLink: "https://shegamarketing.com",
    gitHubLink: "https://github.com/OrgestPasha/ShegaMarketing",
    activeToggle: false,
    isHovered:false
  }, 
  {
    name: "Kosovo Composers Festival",
    description: "A project for the Kosovo Composers Festival, an event celebrating Kosovo’s rich musical heritage. The site features an engaging design with event schedules and composer profiles",
    toolsUsed: "HTML , CSS, JavaScript",
    liveLink: "https://kosovocomposersfest.com/kryefaqja",
    gitHubLink: "https://github.com/OrgestPasha/Festivali-Kompozitoreve-Kosovare",
    activeToggle: false,
    isHovered:false
  }, 
  {
    name: "Snake",
    description: "Snake, the game <br> Created for enhancing my programing fundementals, a fun project where i learned rendering and game logic",
    toolsUsed: "HTML , CSS, JavaScript",
    liveLink: "https://snake.orgestpasha.tech",
    gitHubLink: "https://github.com/OrgestPasha/Snake",
    activeToggle: false,
    isHovered:false
  }]
}
