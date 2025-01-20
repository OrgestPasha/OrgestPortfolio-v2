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
    name: "Bytely Url Shortener",
    description: "A project for shortening urls <br> Created as a project for the university of business and technology, a simple and easy to use url shortener",
    toolsUsed: "DotNet , PHP, Javascript, HTML, CSS",
    liveLink: "http://bytely.xyz/",
    gitHubLink: "https://github.com/genc-v/url-shortener-web-sem-3-ubt",
    activeToggle: false,
    isHovered:false,
  },
  {
    name: "Data Structures and Algorithms",
    description: "A project deeper knowledge of this subject, a project where i implemented different data structures and algorithms",
    toolsUsed: "Java , JavaScript, TypeScript",
    liveLink: "https://github.com/OrgestPasha/Data-Structures---Algorithms",
    gitHubLink: "https://github.com/OrgestPasha/Data-Structures---Algorithms",
    activeToggle: false,
    isHovered:false
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
    gitHubLink: "https://github.com/OrgestPasha/FestivaliKompozitoreveKosovare",
    activeToggle: false,
    isHovered:false
  }, 
  {
    name: "Simple HTTP Server",
    description: "Implemented a http sratch using java. Created for enhancing my deep knowledge of http, a fun project where i learned a lot about low level programming and networks",
    toolsUsed: "Java , JSON Parsing Library",
    liveLink: "https://github.com/OrgestPasha/HTTPServer",
    gitHubLink: "https://github.com/OrgestPasha/HTTPServer",
    activeToggle: false,
    isHovered:false
  }]
}
