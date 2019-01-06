import { Component, Input, OnInit } from '@angular/core';
import { SongId } from '../../../../model/Song';
import { MatDialog } from '@angular/material';
import { SongService } from '../../../../services/song.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() song: SongId;

  constructor(public dialog: MatDialog, private songService: SongService) { }

  ngOnInit() {
  }

  changeTitle(title: string) {
    this.songService.updateTitle(this.song.id, title);
  }

  changeDisplayName(displayName: string) {
    this.songService.updateDisplayName(this.song.id, displayName);
  }
}

