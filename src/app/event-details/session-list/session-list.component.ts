import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../events/shared/event.model';
import { AuthService } from '../../user/login/auth.service'
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  constructor(
    private authService: AuthService,
    private voterService: VoterService
  ) { }

  @Input() sessions: ISession[];
  @Input() filterBy: string ;
  @Input() sortBy: string;
  visibleSessions:ISession[] = [];

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.sessions){
      this.filterSession(this.filterBy);
      this.sortBy === 'name' ? 
      this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleSession(session: ISession){
    if(this.userHasVoted(session)){
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
    }
    if(this.sortBy === 'all'){
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session){
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }

  filterSession(filter){
    if(filter==='all'){
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session =>{
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession){
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession){
  return s2.voters.length - s1.voters.length;
}
