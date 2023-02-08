import { Component, OnInit } from '@angular/core';

import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-saved-templates',
  templateUrl: './saved-templates.component.html',
  styleUrls: ['./saved-templates.component.scss']
})
export class SavedTemplatesComponent implements OnInit {
  templateFontSize: any = 24;
  public contactDetailColor: string = '#e920e9';
  public lastNameColor: string = '#fff500';
  public designationColor: string = 'rgb(236,64,64)';
  public firstNameColor: string = '#2d5964';
  fontFamilyNew: any = 'Poppins, sans-serif'
  lineHeight: any = 1.5
  tempDetails: any;
  itemFontSize: any = 14
  fontSizeName: any = 18
  nameAlign: any = '';
  borderRadius: any = 0
  templateDesign: any = {
    firstNameColor: this.firstNameColor,
    lastNameColor: this.lastNameColor,
    designationColor: this.designationColor,
    contactDetailColor: this.contactDetailColor,
    fontFamily: this.fontFamilyNew,
    fontSize: this.templateFontSize,
    lineHeight: this.lineHeight,
    fontSizeItem: this.itemFontSize,
    nameFontSize: this.fontSizeName,
    nameAlign: this.nameAlign,
    borderRadius: this.borderRadius

  }
  fontFamilyList: any = ['Poppins, sans-serif', 'serif',
    'sans-serif',
    'monospace',
    'cursive',
    'fantasy',
    ' Trebuchet MS',
    'Lucida Sans',
    'Palatino',
    'Georgia',
    'system-ui',
    'ui-serif',
    'ui-sans-serif',
    'ui-monospace',
    'ui-rounded',
    'emoji',
    'math',
    'fangsong']
  templateList: any;
  design: any;
  constructor( private api:SparkService) { }

  ngOnInit(): void {
    this. getTemplates();
  }
  changeSize(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {
      this.templateFontSize = 34
      this.itemFontSize = 20
      this.fontSizeName = 20
    } else if (currnetSize == 5) {
      this.templateFontSize = 44
      this.fontSizeName = 22
      this.itemFontSize = 25
    } else if (currnetSize == 3) {
      this.templateFontSize = 24
      this.itemFontSize = 12
      this.fontSizeName = 18
    } else if (currnetSize == 2) {
      this.templateFontSize = 20
      this.itemFontSize = 8
      this.fontSizeName = 15
    } else {
      this.templateFontSize = 10
      this.itemFontSize = 6
      this.fontSizeName = 12
    }

  }
  changeLine(evt: any) {
    let currnetSize = Number(evt.target.value);
    if (currnetSize == 4) {
      this.lineHeight = 2.4
    } else if (currnetSize == 5) {
      this.lineHeight = 3.4
    } else if (currnetSize == 3) {
      this.lineHeight = 1.4
    } else if (currnetSize == 2) {
      this.lineHeight = 1.1
    } else {
      this.lineHeight = 0.5
    }
  }

  getAlign(val: any) {
    this.nameAlign = val;
  }
  getDesign() {
    this.api.getdesign().subscribe((res: any) => {
      let data = res?.result
      let result = data[data?.length - 1]
      let templateResult = result?.templateDesign;
      console.log(templateResult, 'ada');
      this.firstNameColor = templateResult?.firstNameColor,
        this.lastNameColor = templateResult?.lastNameColor,
        this.designationColor = templateResult?.designationColor,
        this.contactDetailColor = templateResult?.contactDetailColor,
        this.fontFamilyNew = templateResult?.fontFamily,
        this.templateFontSize = templateResult?.fontSize,
        this.lineHeight = templateResult?.lineHeight,
        this.itemFontSize = templateResult?.fontSizeItem,
        this.fontSizeName = templateResult?.nameFontSize,
        this.nameAlign = templateResult?.nameAlign,
        this.borderRadius = templateResult?.borderRadius


    })
  }

  getTemplates() {
    this.api.getsignatureDetails().subscribe((res: any) => {
      this.templateList=res?.result
      this.design=this.templateList.foundDesigns[0]?.templateDesign?.firstNameColor

      console.log(this.design, 'designh');
      
console.log(this.templateList?.createdBy?.SelectPlan);



      // this.tempDetails = res.result[res.result.length - 1];
      // this.useraddress= this.tempDetails?.address[0].city
      // this.quotevar=this.tempDetails?.quotes

      console.log(this.templateList, "kkkkkkkk")


    })
  }


}
