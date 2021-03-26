import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Coordinate, FixtureAPI, Standing, StandingAPI, TeamAPI, UserPredictionDTO} from '../dtos/dtos';
import {UserService} from '../services/user.service';
import {switchMap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';

const headers: HttpHeaders = new HttpHeaders()
  .append('x-rapidapi-key', '72726afda1mshfbbf8862397b8f0p1ca5c0jsn6ea4c8720eac')
  .append('x-rapidapi-host', 'api-football-v1.p.rapidapi.com',)
  .append('useQueryString', 'true');

const leagueId = 2771;

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  matches = null;
  subscription;
  private url = `https://api-football-v1.p.rapidapi.com/v2`;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private http: HttpClient, private userService: UserService) {
  }

  subscribeToMatches(): Promise<Coordinate<FixtureAPI>> {
    return this.http.get(`${this.url}/fixtures/league/${leagueId}`, {headers}).toPromise();

  }

  getCustomer(id: string) {
    if (this.matches) {
      const cached = this.matches.find(v => v.id === id);
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      return this.db.collection('matches').doc(id).valueChanges();
    }

  }

  dispose() {
    this.subscription.unsubscribe();
    this.matches = null;
  }

  getAllTeams(): Promise<Coordinate<TeamAPI>> {
    return this.http.get(`${this.url}/teams/league/${leagueId}`, {headers}).toPromise();
  }

  getStandings(): Promise<Coordinate<StandingAPI>> {
    return this.http.get(`${this.url}/leagueTable/${leagueId}`, {headers}).toPromise();
  }

  getUserPredictions(): Observable<UserPredictionDTO[]> {
    return this.afAuth.authState.pipe(switchMap((user: firebase.User | null) => {
      return this.db.collection<UserPredictionDTO>('predictions', ref => ref.where('uid', '==', user?.uid))
        .valueChanges({idField: 'id'});
    }));
  }

  addUserPredictions(standings: Standing[]) {
    return this.afAuth.authState.pipe(switchMap((user: User | null) => {
      const userPredictionDTO: UserPredictionDTO = {standings, uid: user?.uid};
      return this.db.collection('predictions').add(userPredictionDTO);
    }));
  }

  updateUserPredictions(standings: Standing[], standingsId: string) {
    return this.afAuth.authState.pipe(switchMap((user: User | null) => {
      const userPredictionDTO: UserPredictionDTO = {standings, uid: user?.uid};
      return this.db.collection('predictions').doc(standingsId).update({standings});
    }));
  }
}
