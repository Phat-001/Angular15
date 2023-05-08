import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public name = 'Phat';
  public age = 23;
  public fruits = ['orange', 'tomato', 'vegetable'];
  public items = [
    {
      name: 'macbook',
      price: 999,
      isInstock: true,
      isFreeship: true,
    },
    {
      name: 'dell 3600',
      price: 599,
      isInstock: false,
      isFreeship: true,
    },
    {
      name: 'iphone 14 pro max',
      price: 899,
      isInstock: true,
      isFreeship: false,
    },
  ];
  public vietNamData:any = [];
  public districts:any = [];
  public wards:any = [];

  public provinceName:string = '';
  public districtName:string = '';
  public wardName:string = '';

  constructor(private apiService: ApiService) {
    
  }

  public ngOnInit(): void{
    this.apiService.getVietNamData('https://provinces.open-api.vn/api/?depth=3').subscribe(
      (response) => {
        this.vietNamData = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  

  public resetName(): void {
    this.name = 'Phat';
  }

  public handleProvinceSelect(event:any){
    let province_code = event.target.value;
    const provinceData = this.vietNamData.filter((data:any) => data.code == province_code)
    if(provinceData){
      this.districts = provinceData[0].districts;
      this.provinceName = provinceData[0].codename;
    }
    
    this.wards = [];
  }

  public handleDistrictSelect(event:any){
    let district_code = event.target.value;
    const districtData = this.districts.filter((data:any) => data.code == district_code)
    if(districtData){
      this.wards = districtData[0].wards;
      this.districtName =  districtData[0].codename;
    }
  }

  public handleWardSelect(event:any){
    let ward_code = event.target.value;
    const wardData = this.wards.filter((data:any) => data.code == ward_code)
    if(wardData){
      this.wardName = wardData[0].codename;
    }
  }
}
