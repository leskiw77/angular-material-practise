import { Component, Input, OnInit } from '@angular/core';
import { SongId } from '../../../../model/Song';
import { FormControl, Validators } from '@angular/forms';
import { SongService } from '../../../../services/song.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() song: SongId;

  editMode = false;

  textFormControl = new FormControl({'disabled': true});

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.textFormControl.disable();
  }

  saveText() {
    this.editMode = false;
    this.textFormControl.disable();
    this.songService.updateText(this.song.id, this.textFormControl.value);
  }

  dropEditing() {
    this.textFormControl.disable();
    this.textFormControl.clearValidators();
    this.textFormControl.setValue(this.song.text);
    this.editMode = false;
  }

  startEditing() {
    this.textFormControl.enable();
    this.editMode = true;
  }
}
