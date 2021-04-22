import {TeamI} from './TeamI';
import {ScoreItemI} from './ScoreItemI';
import {DateTimeI} from './DateTimeI';

export interface Match {
  homeTeam: TeamI;
  awayTeam: TeamI;
  matchNumber: number;
  kickOffTime: DateTimeI
}
