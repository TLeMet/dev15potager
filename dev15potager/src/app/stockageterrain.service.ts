import { Injectable } from '@angular/core';
import { Terrain } from './model/Terrain';

@Injectable({
  providedIn: 'root'
})
export class StockageterrainService extends Terrain{

  constructor() { 
    super()
  }
terrain: Terrain;
}
