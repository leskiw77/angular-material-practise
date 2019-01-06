import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DbSongsService } from "../../../services/db/db-songs.service";
import { EditableLabelDialog } from "../editable-label-dialog/editable-label-dialog.component";

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss']
})
export class EditableLabelComponent implements OnInit {

  @Input() label: string;
  @Input() content: string;

  @Output() contentChangedEmitter: EventEmitter<string> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditableLabelDialog, {
      width: '400px',
      data: {label: this.label, content: this.content}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("result: "+ result);
        this.contentChangedEmitter.emit(result);
      }
    });
  }
}
