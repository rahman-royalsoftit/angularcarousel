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
    {imageName : 'royalTech-05.gif', caption: 'Full Stack Web Development', imageDescription:'Full Stack Web Development'},
    {imageName : 'royalTech-02.gif', caption: 'Accounts Management System', imageDescription:'Accounts Management System'},
    {imageName : 'royalTech-01.gif', caption: 'School Management System', imageDescription:'School Management System'},   
    {imageName : 'royalTech-03.gif', caption: 'HR Management System', imageDescription:'HR Management System'},
    {imageName : 'royalTech-04.gif', caption: 'Payroll Management System', imageDescription:'Payroll Management System'},
  
    
  ];

}


export class SlideImage{
  public imageName : string = '';
  public caption : string = '';
  public imageDescription : string = '';
}