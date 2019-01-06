import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../services/song.service';
import { SongId } from "../../../model/Song";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  song: SongId;

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songService.getSong().subscribe(song => this.song = song);
  }
}
