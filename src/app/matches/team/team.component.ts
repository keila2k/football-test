import {Component, Input, OnInit} from '@angular/core';
import {Standing, Team} from '../../dtos/dtos';

@Component({
  selector: 'app-team',
  template: `
    <span fxLayout class="lh-30">
      <ng-template [ngIf]="team" [ngIfThen]="thenBlock" [ngIfElse]="elseBlock">
        This content is never showing
      </ng-template>
    </span>
    <ng-template #thenBlock>
      <img class="avatar" [src]=team.logo alt="Desc 1">
      <mat-label>{{getTeamName()}}</mat-label>
    </ng-template>
    <ng-template #elseBlock>
      N/A
    </ng-template>`,
  styles: [`
    .avatar {
      width: 1.75em;
      border-radius: 50%;
      margin: 0 10px 0 0;
    }

    .lh-30 {
      line-height: 30px;
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

