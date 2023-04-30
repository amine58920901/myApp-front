import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Revenue } from './revenue';

@Injectable()
export class RevenueService {
 readonly  apiUrl = 'http://localhost:8089/stationSki/revenue';
   

 constructor(private httpClient: HttpClient) { }

  getAllRevenues() {
    return this.httpClient.get(`${this.apiUrl}/all-Revenues`)
  }

  createRevenue(revenue: any )  {
    return this.httpClient.post(`${this.apiUrl}/create-revenue`, revenue)
  }

  updateRevenue( revenue: any) {
    return this.httpClient.put(`${this.apiUrl}/update-product`, revenue)
  }

  deleteRevenue(idRevenue: any){
   return  this.httpClient.delete(`${this.apiUrl}/delete-product/${idRevenue}`)
  }
}
