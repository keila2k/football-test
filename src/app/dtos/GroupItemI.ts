import {TeamI} from './TeamI';
import {ScoreItemI} from './ScoreItemI';

export interface GroupItemI extends ScoreItemI {
  rank: number;
  team: TeamI;
}
