import { Component,HostListener,Inject,PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArrowComponent } from './arrow/arrow.component';
import { ServiceService } from './service/service.service';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, DashboardComponent,ArrowComponent,CommonModule,ProjectsComponent,ContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrgestPortfolio-v2';
  constructor(public Service:ServiceService,@Inject(PLATFORM_ID) private platformId: object){}

  mouseX:number=0;
  mouseY:number=0;



  get adjustedX(): number {
    return this.mouseX + (this.isBrowser() ? window.scrollX : 0);
  }

  get adjustedY(): number {
    return this.mouseY + (this.isBrowser() ? window.scrollY : 0);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBrowser()) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(this.isBrowser()){
      this.mouseX = this.mouseX; 
    this.mouseY = this.mouseY;
    }
    
    
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  }

