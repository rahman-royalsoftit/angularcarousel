import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Carousel Example with Ng-Bootstrap';

  imageUrl = "assets/images/";
  
  dataSource : SlideImage[]=[
    {imageName : 'royalsoftit-01.gif', caption: 'School Management System', imageDescription:'School Management System'},
    {imageName : 'royalsoftit-02.gif', caption: 'Accounts Management System', imageDescription:'Accounts Management System'},
    {imageName : 'royalsoftit-03.gif', caption: 'HR Management System', imageDescription:'HR Management System'},
    {imageName : 'royalsoftit-04.gif', caption: 'Payroll Management System', imageDescription:'Payroll Management System'},
    
  ];

}


export class SlideImage{
  public imageName : string = '';
  public caption : string = '';
  public imageDescription : string = '';
}