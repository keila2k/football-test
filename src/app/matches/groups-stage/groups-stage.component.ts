import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Standing} from '../../dtos/dtos';
import {MODE} from '../../utils/mode';

@Component({
  selector: 'app-groups-stage',
  templateUrl: './groups-stage.component.html',
  styleUrls: ['./groups-stage.component.scss']
})
export class GroupsStageComponent {
  @Input() standings: Array<Standing[]> = [];
  @Input() mode: MODE = MODE.NEW;
  @Input() isDirty = false;
  @Output() standingsChange: EventEmitter<any> = new EventEmitter<any>();

  isEditMode() {
    return this.mode === MODE.EDIT;
  }

  onDrop(event: CdkDragDrop<any>, standing: Standing[]) {
    this.standingsChange.emit({event, standing});
  }
}
