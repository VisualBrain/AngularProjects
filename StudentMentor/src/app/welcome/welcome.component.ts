import { Component, OnInit } from '@angular/core';
import { MentorSearch } from '../Interfaces/iMentorSearch';
import { WelcomeMentorSearchService } from '../services/welcome-mentor-search.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private welcomeMentoSearchService:WelcomeMentorSearchService){}
  title:string = 'Mentor On Demand';
  Subjects:string[] = [null,'Spring','Hibernate','Javascript','Asp.Net','Python','C#','UX Developer','Agile Framework'];
  TimeSlot:string[] = ['10am-12pm','12pm-2pm','2pm-4pm','4pm-6pm','6pm-8pm'];
  imageWidth:number = 50;
  imageHeight:number = 50;
  imageMargin:number = 3;
  mentorsSearch:MentorSearch[];
  filteredMentors:MentorSearch[] = [];
  _techFilter:string;
  // Getting Technology Filter
  get technologyFilter():string{
    return this._techFilter;
  }
  set technologyFilter(technology:string){
    this._techFilter = technology;
    this.filteredMentors = this.technologyFilter? this.filterMentors(this.technologyFilter):this.mentorsSearch;
  }

  ngOnInit():void{
    console.log('In OnInit');
    this.mentorsSearch = this.welcomeMentoSearchService.getMentors();
    this.filteredMentors = this.mentorsSearch;
  }

  private filterMentors = (filterByTechnology:string): MentorSearch[] => {
    filterByTechnology = filterByTechnology.toLowerCase();
    return this.mentorsSearch.filter((mentor:MentorSearch) => mentor.technology.toLocaleLowerCase().indexOf(filterByTechnology) !== -1);
  }
  onRatingClicked=(message:string)=>{
    console.log('Rating Clicked with Message:'+message);
  }

}
