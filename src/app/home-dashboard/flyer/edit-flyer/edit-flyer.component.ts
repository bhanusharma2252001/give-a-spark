import { Component, OnInit } from '@angular/core';
// import hljs from 'highlight.js';
import Quill from 'quill';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-flyer',
  templateUrl: './edit-flyer.component.html',
  styleUrls: ['./edit-flyer.component.scss']
})
export class EditFlyerComponent implements OnInit {
  form!: FormGroup;
  html:any

  quillConfig={
     toolbar: {
       container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']     
       ],
     },
  }

  constructor(){}

  ngOnInit() {
    this.form = new FormGroup({
      'text': new FormControl('<p><strong>Hello</strong> World!</p>')
    });
  }

  onContentChanged = (event:any) =>{
    //console.log(event.html);
  }

  public logValue(): void {
  let  element = document.querySelector('.ql-editor');
    this.html = element?.innerHTML;
  }

  public logForm(): void {
    setTimeout(() => {
    console.log(this.form);
    console.log(`DIRTY: ${this.form.dirty}`);
    console.log(`TOUCHED: ${this.form.touched}`);
    });
  }

  public blur(): void {
    console.log('blur');
  }

  public onSelectionChanged(): void {
    console.log('onSelectionChanged');
  }
}