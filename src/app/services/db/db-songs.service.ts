// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable, OnInit } from '@angular/core';
import { Song, SongId, SongInfo } from '../../model/Song';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class DbSongsService implements OnInit {

  songsCol: AngularFirestoreCollection<Song>;
  songs: Observable<SongId[]>;

  songDoc: AngularFirestoreDocument<Song>;
  song: Observable<Song>;

  constructor(private afs: AngularFirestore) {


    // todo: investigate why ngOnInit is not called
    this.songsCol = this.afs.collection('songs');
    this.songs = this.songsCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Song;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  ngOnInit() {

  }

  getAll(): Observable<SongId[]> {
    return this.songs;
  }

  addSong(song: Song) {
    this.afs.collection('songs').add(song)
      .catch(e => console.error('Can not add song: ' + e));
  }

  getSong(songId: string) {
    this.songDoc = this.afs.doc('songs/' + songId);
    this.song = this.songDoc.valueChanges();
    return this.song;
  }

  deleteSong(songId) {
    this.afs.doc('songs/' + songId).delete();
  }

  updateTitle(songId: string, value: string) {
    this.afs.collection('songs').doc(songId).update({
      'songInfo.title': value
    }).catch(e => console.error(e));
  }

  updateDisplayName(songId: string, value: string) {
    this.afs.collection('songs').doc(songId).update({
      'songInfo.displayName': value
    }).then(r => console.log(r))
      .catch(e => console.error(e));
  }

  addTestSongs() {
    const song1: Song = {
      'songInfo': {
        'title': 'title1',
        'displayName': 'displayName1'
      },
      'text': 'text1',
    };

    const song2: Song = {
      'songInfo': {
        'title': 'Пісня',
        'displayName': 'displayПісня'
      },
      'text': 'Пісня Пісня \n Пісня Пісня',
    };

    this.addSong(song1);
    this.addSong(song2);

  }

  // private bookCounter = 0;
  // private songs: FirebaseListObservable<Song[]>;
  //
  // constructor(private db: AngularFireDatabase) {
  //   this.songs = db.list('/song');
  // }
  //
  // public addBook(): void {
  //   const song: Song = {
  //     title: `My book #${this.bookCounter++}`,
  //     text: 'Text totototo'
  //   };
  //   this.songs.push(song);
  // }
  //
  // public filterBooks() {
  //   this.db.collection('/song').snapshotChanges()
  //     .subscribe(snapshots => {
  //       console.log(snapshots);
  //     });
  // }
}
