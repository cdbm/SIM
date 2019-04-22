import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { GmailService} from  '../gmail.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  email : Email = new Email();
  

  constructor(private gmailService: GmailService) { }

  ngOnInit() {
  }

  enviarEmail(email){
    this.gmailService.send(email);
  }
}
