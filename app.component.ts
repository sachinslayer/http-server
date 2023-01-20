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
  errorMessage="Loading.."
 constructor(private appService:AppServiceService) {}  
 
 ngOnInit(){
  this.appService.getConfig().subscribe((data)=>{
    this.error=this.error;
  },
  (err)=>{this.errorMessage="wrong url"
  });
 }

}
