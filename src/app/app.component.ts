import { Component, VERSION } from '@angular/core';
import { AppChildService } from './app-child.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  displayedColumns: string[] = ["id", "userId", "title", "completed"];
  data: any[] = [];

  constructor(private appService:AppChildService){
    this.appService.getData().then(x => {
      this.data = x;
      // console.log(this.data)
    });
  }
}
