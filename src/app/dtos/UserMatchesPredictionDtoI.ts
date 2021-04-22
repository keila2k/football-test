import {MatchPredictionI} from './MatchPrediction';

export interface UserMatchesPredictionDtoI {
  groupStage?: MatchPredictionI[];
  finalsStage?: MatchPredictionI[];
}
