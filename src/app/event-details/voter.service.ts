import { Injectable } from '@angular/core';
import { ISession } from '../events/shared/event.model' 

@Injectable()
export class VoterService {

  deleteVoter(session: ISession, votersName:string){
    session.voters = session.voters.filter(voter => voter !== votersName);
  }

  addVoter(session: ISession, votersName:string){
    session.voters.push(votersName);
  }

  userHasVoted(session: ISession, votersName:string){
    return session.voters.some( voter => voter === votersName);
  }
}
