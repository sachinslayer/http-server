import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work';
  error:any
  data :any
  constructor (private appService: AppServiceService){}
  dataGet(){
    this.appService.getData().subscribe((data)=>{
      console.log(data)
      this.data=data
    

    },(error)=> {
      console.log(error)
      this.error=error

    })
    
  }

}
