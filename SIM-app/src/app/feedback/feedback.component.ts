import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { FeedbackService} from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  email : Email = new Email();
  

  constructor(private feedbackService : FeedbackService ) { }

  ngOnInit() {
  }

  enviarEmail(email){
    this.feedbackService.send(email)
    .then(ab => {
      if (ab) {
         this.email = new Email();
      }
   })
   .catch(erro => alert(erro));
   alert("feedback enviado");
  }
}
