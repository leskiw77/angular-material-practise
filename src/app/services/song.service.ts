import { Injectable, OnInit } from '@angular/core';
import { DbSongsService } from './db/db-songs.service';
import { map } from 'rxjs/operators';
import { SongId, Title } from '../model/Song';
import { Observable, Subject } from 'rxjs';



@Injectable()
export class SongService {

  constructor(private dbSongsService: DbSongsService) { }

  getAllDisplayNames(): Observable<Title[]> {
    return this.dbSongsService.getAll().pipe(
      map(actions => {
        return actions.map(song => {
          const id = song.id;
          const displayName = song.songInfo.displayName;
          return { 'id': id, 'title': displayName} as Title;
        });
      }));
  }

  getSongById(id: string): Observable<SongId> {
    return this.dbSongsService.getSong(id).pipe(
      map(e => {
        return {id, ...e} as SongId;
      })
    );
  }

  addTestSongs() {
    this.dbSongsService.addTestSongs();
  }

  updateTitle(songId: string, value: string) {
    return this.dbSongsService.updateTitle(songId, value);
  }

  updateDisplayName(songId: string, value: string) {
    this.dbSongsService.updateDisplayName(songId, value);
  }

  updateText(songId: string, value: string) {
    this.dbSongsService.updateText(songId, value);
  }
}
