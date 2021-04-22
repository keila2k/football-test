import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {switchMap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {StandingI} from '../../dtos/StandingI';
import {UserPredictionDtoI} from '../../dtos/UserPredictionDtoI';
import {UserScoreDtoI} from '../../dtos/UserScoreDtoI';
import {GeneralDtoI} from '../../dtos/GeneralDtoI';
import {ePrediction} from '../../dtos/ePrediction';
import {MatchPrediction, MatchPredictionI} from '../../dtos/MatchPrediction';
import {User} from 'firebase';
import {eMatchStage} from '../../dtos/eMatchStage';

const headers: HttpHeaders = new HttpHeaders()
  .append('x-rapidapi-key', '72726afda1mshfbbf8862397b8f0p1ca5c0jsn6ea4c8720eac')
  .append('x-rapidapi-host', 'api-football-v1.p.rapidapi.com',)
  .append('useQueryString', 'true');

const API_PREFIX = 'api';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  private standingsUrl = `${API_PREFIX}/standings`;
  private predictionsUrl = `${API_PREFIX}/predictions`;
  private userScoresUrl = `${API_PREFIX}/scores`;
  private generalUrl = `${API_PREFIX}/general`;
  private matchesUrl = `${API_PREFIX}/matches`;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private http: HttpClient, private userService: UserService) {
  }

  getStandings(ePredictionState: ePrediction): Promise<StandingI[]> {
    return this.http.get<StandingI[]>(`${this.standingsUrl}/${ePredictionState}`).toPromise();
  }

  getUserPredictions(): Observable<UserPredictionDtoI> {
    return this.afAuth.authState.pipe(switchMap((user: User | null) => {
      return this.http.get<UserPredictionDtoI>(`${this.predictionsUrl}/${user.uid}`);
    }));
  }

  addUserPredictions(standings: StandingI[], matchScores: MatchPredictionI[], finalsMatches: MatchPredictionI[]) {
    return this.afAuth.authState.pipe(switchMap((user: User | null) => {
      const userPredictionDTO: UserPredictionDtoI = {standings, matchScores, finalsMatches, uid: user?.uid};
      return this.http.post(`${this.predictionsUrl}`, userPredictionDTO);
    }));
  }

  updateUserPredictions(standings: StandingI[], matchScores: MatchPredictionI[], finalsMatches: MatchPredictionI[], standingsId: string) {
    return this.afAuth.authState.pipe(switchMap((user: User | null) => {
      const userPredictionDTO: UserPredictionDtoI = {standings, matchScores, finalsMatches, uid: user?.uid};
      return this.http.put(`${this.predictionsUrl}/${standingsId}`, userPredictionDTO);
    }));
  }

  async getUserScores(): Promise<UserScoreDtoI[]> {
    return this.http.get<UserScoreDtoI[]>(`${this.userScoresUrl}`).toPromise();
  }

  getGeneral(): Promise<GeneralDtoI> {
    return this.http.get<GeneralDtoI>(`${this.generalUrl}`).toPromise();
  }

  async getFinalsMatches(ePredictionState: ePrediction): Promise<MatchPrediction[]> {
    return this.http.get<MatchPrediction[]>(`${this.matchesUrl}/finals/${ePredictionState}`).toPromise();
  }

  async getMatches(matchStage?: eMatchStage): Promise<MatchPredictionI[]> {
    return this.http.get<MatchPredictionI[]>(`${this.matchesUrl}${matchStage ? `/${matchStage}` : ''}`).toPromise();
  }
}
