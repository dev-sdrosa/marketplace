import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemCategoryData, ItemFavoritesRP } from '../schemas/item.schema';
import { ItemCardData, ItemDetailData, ItemHistoryRP } from '../schemas/item-card.schema';
import { Params } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public getItemCategories(): Observable<ItemCategoryData> {
    return this.http.get<ItemCategoryData>(
      `api/item/category`, { headers: {skip: "true"} }
    );
  }

  public getItems(params: Params, count: number) {
    let temp = '?';

		for (let key in params) {
			temp += key + '=' + params[key] + '&';
		}

    if (!params['count']) {
			temp += '&count=' + count;
		}

    return this.http.get<ItemCardData>(
      "api/item" + temp, 
      { headers: {skip: "true"} }
    );
  }

  public getItem(itemId: string) {
    return this.http.get<ItemDetailData>(
      "api/item/" + itemId + "/detail", 
      { headers: {skip: "true"} }
    );
  }

  public getItemHistory(itemId: string) {
    return this.http.get<ItemHistoryRP>(
      "api/item/history", 
      // { headers: {skip: "true"} }
    );
  }

  public getItemsFavorite(count: number) {
    let temp = '?';
		temp += 'count=' + count;

    return this.http.get<ItemFavoritesRP>(
      "api/item/favorite" + temp, 
    );
  }

  public ownItem(itemId: string) {
    return this.http.post<ItemHistoryRP>(
      "api/item/" + itemId + "/own", 
      { },
    );
  }

  public addFavoriteItem(itemId: string) {
    return this.http.post<any>(
      "api/item/" + itemId + "/favorite", 
      { },
    );
  }

  public createItem(body) {
    return this.http.post<any>(
      "api/item", 
      body,
    );
  }

}
