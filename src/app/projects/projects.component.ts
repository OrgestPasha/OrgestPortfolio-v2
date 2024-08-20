import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(public Service:ServiceService){}


  dynamicHeight: string="";
  project = { activeToggle: true }; // Example project object

  ngOnInit() {
    this.updateHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateHeight();
  }

  updateHeight() {
    if (window.innerWidth < 576) { // 36rem in pixels (assuming 1rem = 16px)
      this.dynamicHeight = '250px'; // Set to your desired height for smaller screens
    } else {
      this.dynamicHeight = '190px'; // Default height
    }

 
    
  }

  projects=[{
    name:"Soma’s Slow Food",
    description:"A project displaying the elegance of a beautiful restaurant <br>The purpouse of its creation was teaching myself different front end effects and animations",
    toolsUsed:"Angular , TypeScript, Scss",
    liveLink:"",
    gitHubLink:"https://github.com/OrgestPasha/somaFood",
    activeToggle:false
  }]
}

