import { Component, Input, Output, EventEmitter } from '@angular/core';
var scss = require('./imageUpload.scss');
declare var filepicker: any;

@Component({
    selector: 'image-upload',
    styles: [`${scss}`],
    templateUrl: './imageUpload.component.html'
})

export class ImageUploadComponent {
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
