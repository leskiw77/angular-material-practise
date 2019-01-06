import { Injectable, OnInit } from '@angular/core';
import { DbSongsService } from './db/db-songs.service';
import { map } from 'rxjs/operators';
import { SongId, Title } from '../model/Song';
import { Observable, Subject } from 'rxjs';



@Injectable()
export class SongService {

  /**
   * @type {Subject<SongId>}
   * store information about currently displayed song
   */
  private songSubject = new Subject<SongId>();

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

  setSong(id: string) {
    this.dbSongsService.getSong(id).subscribe(song => {
      this.songSubject.next({id, ...song} as SongId);
    });
  }

  getSong(): Observable<SongId> {
    return this.songSubject.asObservable();
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
}
