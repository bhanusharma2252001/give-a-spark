import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.scss']
})
export class BasicTemplateComponent implements OnInit {
  details: any;
  username: any;
  Email: any;
  compName: any;
  compWebsite: any;
  number: any;

  signatureDetailsForm: FormGroup
  planShow = false;
  public toggle: boolean = false;

  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';

  public arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };

  public selectedColor: string = 'color18';

  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
  public color3: string = '#fff500';
  public color4: string = 'rgb(236,64,64)';
  public color5: string = 'rgba(45,208,45,1)';
  public color6: string = '#1973c0';
  public color7: string = '#f200bd';
  public color8: string = '#a8ff00';
  public color9: string = '#278ce2';
  public color10: string = '#0a6211';
  public color11: string = '#f2ff00';
  public color12: string = '#f200bd';
  public color13: string = 'rgba(0,255,0,0.5)';
  public color14: string = 'rgb(0,255,255)';
  public color15: string = 'rgb(255,0,0)';
  public color16: string = '#a51ad633';
  public color17: string = '#666666';
  public color18: string = '#2d5964';

  public color19: string = '#070606';
  // public cmykValue: string = '';

  // public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);


  constructor(private api: SparkService,
    private fb: FormBuilder, private toast:ToastrService, ) {
    this.signatureDetailsForm = this.fb.group({
      yourName:[''],
      designation:[''],
      email:[''],
      phoneNo:[''],
      companyWebsite:[''],
      address:[''],
      fbProfile:[''],
      instagramProfile:[''],
      linkedInProfile:[''],
      youtubeChannel:[''],
    })
  }

  ngOnInit(): void {
    this.getBasicProfile()
  }





  getBasicProfile() {
    this.api.getbasicDetaiofUseer().subscribe((res: any) => {
      this.details = res.result;

      this.username = res.result[0]?.firstName
      this.Email = res.result[0]?.email
      this.compName = res.result[0]?.companyName
      this.compWebsite = res.result[0]?.companyWebsite
      this.number = res.result[0]?.phone



      console.log(this.compWebsite, 'jojo')

      console.log(this.details)
    })



  }




  onSubmit(data:any) {

    let body = {

      yourName:data.yourName,
      designation:data.designation,
      email:data.email,
      phoneNo:data.phoneNo,
      companyWebsite:data.companyWebsite,
      address: [
        
           { addressline: data.address,
                      addressline2: data.address,
            landmark:data.address,
            city: data.address,
            state: data.address,
            pincode: '',
            country: data.address,}
  
    ],
      fbProfile:data.fbProfile,
      instagramProfile:data.instagramProfile,
      linkedInProfile:data.linkedInProfile,
      youtubeChannel:data.youtubeChannel,   


    }



    this.api.addsignatureDetails(body).subscribe((res: any) => {
      console.log(res);
      this.toast.success('Logged in Successfully');


    },
      (error) => {
        this.toast.error('please try again');
      })
  }


  showOnPlan() {
    this.planShow == true
  }

  onClick(){


  }



  // public onEventLog(event: string, data: any): void {
  //   console.log(event, data);
  // }

  // public onChangeColorCmyk(color: string): Cmyk {
  //   const hsva = this.cpService.stringToHsva(color);

  //   if (hsva) {
  //     const rgba = this.cpService.hsvaToRgba(hsva);

  //     return this.cpService.rgbaToCmyk(rgba);
  //   }

  //   return new Cmyk(0, 0, 0, 0);
  // }

  // public onChangeColorHex8(color: string): string {
  //   const hsva = this.cpService.stringToHsva(color, true);

  //   if (hsva) {
  //     return this.cpService.outputFormat(hsva, 'rgba', null);
  //   }

  //   return '';
  // }
}
