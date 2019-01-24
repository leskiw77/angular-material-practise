import { AfterViewChecked, Component, ElementRef, HostBinding, OnInit, ViewChild } from "@angular/core";
import { SongService } from '../../../services/song.service';
import { SongId } from '../../../model/Song';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit  {
  song: SongId;

  constructor(private route: ActivatedRoute, private songService: SongService) {
  }

  ngOnInit() {
    this.setSong();
  }

  private setSong() {
    const id = this.route.snapshot.paramMap.get('id');
    this.songService.getSongById(id).subscribe(song => this.song = song);
  }
}
