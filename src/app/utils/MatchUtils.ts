import {Match, Standing} from '../dtos/dtos';
import groupBy from 'lodash-es/groupBy';

export class MatchUtils {
  static getStandings(standings: Standing[]): Array<Standing[]> {
    return Object.values(groupBy(standings, (standing: Standing) => standing.group));
  }

  static getMatches(standings: Array<Standing[]>): Match[] {
    const array: Match[] = new Array(15);
    array[0] = new Match(null, null, 0);
    array[1] = new Match(null, null, 1);
    array[2] = new Match(null, null, 2);
    array[3] = new Match(null, null, 3);
    array[4] = new Match(null, null, 4);
    array[5] = new Match(null, null, 5);
    array[6] = new Match(null, null, 6);
    array[7] = new Match(standings[0][0], standings[5][1], 7);
    array[8] = new Match(standings[7][0], standings[6][1], 8);
    array[9] = new Match(standings[2][0], standings[1][1], 9);
    array[10] = new Match(standings[5][0], standings[4][1], 10);
    array[11] = new Match(standings[1][0], standings[3][1], 11);
    array[12] = new Match(standings[3][0], standings[7][1], 12);
    array[13] = new Match(standings[6][0], standings[2][1], 13);
    array[14] = new Match(standings[4][0], standings[0][1], 14);
    return array;
  }
}
