import {Component, Input} from '@angular/core';
import {Standing, Team} from '../../dtos/dtos';

@Component({
  selector: 'app-team',
  template: `
    <span fxLayout class="lh-30" fxLayoutAlign="center center">
      <ng-template [ngIf]="team" [ngIfThen]="thenBlock" [ngIfElse]="elseBlock">
        This content is never showing
      </ng-template>
    </span>
    <ng-template #thenBlock>
      <img class="avatar" [src]=team.logo alt="Desc 1">
      <mat-label class="lg-view">{{getTeamName()}}</mat-label>
      <mat-label class="sm-view">{{team.shortName}}</mat-label>
    </ng-template>
    <ng-template #elseBlock>
      N/A
    </ng-template>`,
  styles: [`
    .avatar {
      width: 1.75em;
      height: 1.75em;
      border-radius: 50%;
      margin: 0 5px 0 0;
    }

    .lh-30 {
      line-height: 30px;
    }

    .lg-view {
      display: inline-block;
    }

    .sm-view {
      display: none;
    }

    @media screen and (max-width: 1100px) {
      .lg-view {
        display: none;
      }

      .sm-view {
        display: inline-block;
        font-size: 12px;
      }
    }
  `]
})
export class TeamComponent {
  @Input() team: Standing | Team;

  getTeamName() {
    if (this.team instanceof Team) {
      return this.team.name;
    } else {
      return this.team.teamName;
    }
  }
}

