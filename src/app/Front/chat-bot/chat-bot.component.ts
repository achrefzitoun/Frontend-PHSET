import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  showChatbot = false;
  messages = [
    { text: 'Hi !  How can I help you ?', type: 'received' }
  ];
  newMessageText = '';

  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }

  sendQuestion(question: string) {
    this.messages.push({ text: question, type: 'user' });
    this.newMessageText = ''; 
    this.http.post('http://localhost:8082/Rev/evaluation/answer', question).subscribe((response: any) => {
      this.messages.push({ text: response.response, type: 'received' }); 
    });
  }
  

}
