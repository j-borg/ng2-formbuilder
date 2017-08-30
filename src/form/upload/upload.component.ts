import { Component, Input, Output, EventEmitter } from '@angular/core';
var scss = require('./upload.scss');
declare var filepicker: any;

@Component({
    selector: 'upload',
    styles: [`${scss}`],
    template: `<div class="waves-effect waves-light btn" type="button" (click)="selectImage()">
    <span>Upload afbeelding</span>
</div>
<a class="preview-image" *ngIf="content" target="_blank" href="{{content}}">Bekijk afbeelding</a>

`
})

export class UploadComponent {
    @Input() content: any;
    @Output() imageUploaded = new EventEmitter<string>();

    private key: string = process.env.FILEPICKER;

    constructor() {
        filepicker.setKey(this.key);
    }

    selectImage() {
        filepicker.pick(
            {
                cropForce: true,
                mimetype: 'image/*',
                container: 'window',
                services: ['CONVERT', 'COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX'],
                conversions: ['crop']
            },
            (blob: any) => { this.content = blob.url; this.imageUploaded.emit(blob.url); },
            (error: any) => console.log(error.toString()));
    }
}
