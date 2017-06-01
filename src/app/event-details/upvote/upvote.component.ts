import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val){
    this.heartColor = val ? 'text-danger glyphicon glyphicon-heart':'glyphicon glyphicon-heart';
  }
  @Output() vote = new EventEmitter;
  heartColor: string;
  
  constructor() { }
  ngOnInit() {
  }
  onClick(){
    this.vote.emit();
  }

}
