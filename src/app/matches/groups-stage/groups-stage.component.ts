import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {StandingI} from '../../dtos/StandingI';
import {GroupItemI} from '../../dtos/GroupItemI';

@Component({
  selector: 'app-groups-stage',
  templateUrl: './groups-stage.component.html',
  styleUrls: ['./groups-stage.component.scss']
})
export class GroupsStageComponent {
  @Input() standings: StandingI[] = [];
  @Input() isOver = false;
  @Output() standingsChange: EventEmitter<any> = new EventEmitter<any>();

  onDrop(event: CdkDragDrop<any>, standing: GroupItemI[]) {
    this.standingsChange.emit({event, standing});
  }
}
