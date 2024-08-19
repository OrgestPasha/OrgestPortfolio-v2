import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(public Service:ServiceService){}

  projects=[{
    name:"Soma’s Slow Food",
    description:"A project displaying the elegance of a beautiful restaurant <br>The purpouse of its creation was teaching myself different front end effects and animations",
    toolsUsed:"Angular , TypeScript, Scss",
    liveLink:"",
    gitHubLink:"https://github.com/OrgestPasha/somaFood"
  }]
    
  }


