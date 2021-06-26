import { Component, EventEmitter, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.less'],
})
export class UploaderComponent {
  @Output() onParse = new EventEmitter<string>();

  stopUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.readAsText(file as any);
    reader.onload = (e) => {
      this.onParse.emit(e.target.result.toString());
    };
    return false;
  }
}
