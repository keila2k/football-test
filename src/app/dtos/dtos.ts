export interface Coordinate<T> {
  api?: T;
}

export interface API {
  results?: number
}

export interface FixtureAPI extends API {
  fixtures?: Fixture[];
}

export interface TeamAPI extends API {
  teams?: Team[];
}

export interface StandingAPI extends API {
  standings?: Array<Standing[]>;
}

export interface Fixture {
  awayTeam?: FixtureTeam;
  elapsed?: number;
  event_date?: Date;
  event_timestamp?: number;
  firstHalfStart?: number;
  fixture_id?: number;
  goalsAwayTeam?: number;
  goalsHomeTeam?: number;
  homeTeam?: FixtureTeam;
  league?: League;
  league_id?: number;
  referee?: string;
  round?: string;
  score?: Score;
  secondHalfStart?: number;
  status?: string;
  statusShort?: string;
  venue?: string;
}

export interface FixtureTeam {
  team_id?: number;
  team_name?: string;
  logo?: string;
}

export class Team {
  team_id?: number;
  name?: string;
  code?: string;
  logo?: string;
  country?: string;
  is_national?: boolean;
  founded?: number;
  venue_name?: string;
  venue_surface?: string;
  venue_address?: string;
  venue_city?: string;
  venue_capacity?: number;
  shortName?: string;
}

export interface League {
  country?: string;
  flag?: string;
  logo?: string;
  name?: string;
}

export interface Score {
  extratime?: null;
  fulltime?: string;
  halftime?: string;
  penalty?: null;
}

export interface Statistics {
  matchsPlayed: number;
  win: number;
  draw: number;
  lose: number;
  goalsFor: number;
  goalsAgainst: number;
}

export class Standing {
  rank: number;
  team_id: number;
  teamName: string;
  group: string;
  logo: string;
  forme: string;
  status: string;
  description: string;
  all: Statistics;
  home: Statistics;
  away: Statistics;
  goalsDiff: number;
  points: number;
  lastUpdate: string;
  shortName: string;
}

export interface UserPredictionDTO {
  id?: string;
  standings: Standing[];
  matches: Match[];
  uid: string
}

export interface LeagueDTO {
  id?: string;
  standings: Standing[];
}

export class Match {
  team1: Team | Standing;
  team2: Team | Standing;
  idx: number;
  selectedTeam: Team | Standing;

  constructor(team1: Team | Standing, team2: Team | Standing, idx: number, selectedTeam?: Team | Standing) {
    this.team1 = team1;
    this.team2 = team2;
    this.idx = idx;
    this.selectedTeam = selectedTeam;
  }

  clear(teamIndexInNextMatch: number) {
    teamIndexInNextMatch === 0 ? this.team1 = undefined : this.team2 = undefined;
    this.selectedTeam = undefined;
  }
}
