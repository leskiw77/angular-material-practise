export interface Song {
  songInfo: SongInfo;
  text: string;
}

export interface SongId extends Song {
  id: string;
}

export interface Title {
  id: string;
  title: string;
}

export interface SongInfo {
  displayName: string;
  title: string;
}
