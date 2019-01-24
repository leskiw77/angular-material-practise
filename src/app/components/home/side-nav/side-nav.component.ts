import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../services/song.service';
import { Title } from '../../../model/Song';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  titles: Title[];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songService.getAllDisplayNames().subscribe(titles => {
      this.titles = titles;
    });
  }

  addTestSongs() {
    this.songService.addTestSongs();
  }
}
