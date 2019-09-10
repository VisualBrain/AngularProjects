import { Injectable } from '@angular/core';
import { MentorSearch } from '../Interfaces/iMentorSearch';

@Injectable({
  providedIn: 'root'
})
export class WelcomeMentorSearchService {
  getMentors = (): MentorSearch[] => {
    return [
      {
        "mentorImage": "assets/images/user.png",
        "mentorName": "Shubham",
        "averageRating": "5",
        "noOfTraining": "4",
        "technology": "Spring",
        "timeSlot": "12pm-2pm"
      },
      {
        "mentorImage": "assets/images/user.png",
        "mentorName": "Chandan",
        "averageRating": "5",
        "noOfTraining": "4",
        "technology": "Hibernate",
        "timeSlot": "10am-12pm"
      },
      {
        "mentorImage": "assets/images/user.png",
        "mentorName": "Sam",
        "averageRating": "2",
        "noOfTraining": "1",
        "technology": "Javascript",
        "timeSlot": "12pm-2pm"
      },
      {
        "mentorImage": "assets/images/user.png",
        "mentorName": "Shubham",
        "averageRating": "5",
        "noOfTraining": "4",
        "technology": "Python",
        "timeSlot": "10am-12pm"
      },
      {
        "mentorImage": "assets/images/user.png",
        "mentorName": "Saurabh",
        "averageRating": "3",
        "noOfTraining": "1",
        "technology": "Asp.Net",
        "timeSlot": "4pm-6pm"
      },
      {
        "mentorImage": "assets/images/user.png",
        "mentorName": "Jatinder",
        "averageRating": "3",
        "noOfTraining": "2",
        "technology": "C#",
        "timeSlot": "6pm-8pm"
      },
      {
        "mentorImage": "assets/images/user.png",
        "mentorName": "Rahul",
        "averageRating": "2",
        "noOfTraining": "0",
        "technology": "UX Developer",
        "timeSlot": "10am-12pm"
      },
      {
        "mentorImage": "assets/images/user.png",

        "mentorName": "Rituraj",
        "averageRating": "3",
        "noOfTraining": "1",
        "technology": "Agile Framework",
        "timeSlot": "2pm-4pm"
      }
    ];
  }
}
