import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Standing, Team} from '../../dtos/dtos';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

@Component({
  selector: 'app-matchup',
  template: `
    <mat-button-toggle-group [disabled]="!(team1 && team2)" (change)="onTeamSelect($event)" ngDefaultControl
                             [(ngModel)]="selectedTeam">
      <mat-button-toggle [value]="team1">
        <app-team [team]="team1"></app-team>
      </mat-button-toggle>
      -
      <mat-button-toggle [value]="team2">
        <app-team [team]="team2"></app-team>
      </mat-button-toggle>
    </mat-button-toggle-group>`,
  styles: [`
    .mat-button-toggle-group-appearance-standard {
      display: flex;
      flex-direction: column;
    }

    .mat-button-toggle-appearance-standard {
      background: #919191;
      line-height: 0;
    }

    .mat-button-toggle-checked {
      background-color: #48915b;
    }

    .mat-button-toggle-label-content {
      line-height: 30px !important;
    }
  `
  ]
})
export class MatchupComponent {
  @Input() team1: Standing | Team;
  @Input() team2: Standing | Team;
  @Input() selectedTeam: Standing | Team;
  @Output() teamSelect: EventEmitter<Standing | Team> = new EventEmitter<Standing | Team>();

  onTeamSelect($event: MatButtonToggleChange) {
    this.teamSelect.emit($event.value);
  }
}
