import { Component, Inject, Input, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormControl, Validators } from "@angular/forms";

export interface DialogData {
  label: string;
  content: string;
}

@Component({
  selector: 'editable-label-dialog',
  templateUrl: './editable-label-dialog.component.html',
  styleUrls: ['./editable-label-dialog.component.scss']
})
export class EditableLabelDialog{

  inputFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    public dialogRef: MatDialogRef<EditableLabelDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
