import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArrowComponent } from './arrow/arrow.component';
import { ServiceService } from './service/service.service';
import { CommonModule } from '@angular/common';
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
  constructor(public Service:ServiceService){}
}
