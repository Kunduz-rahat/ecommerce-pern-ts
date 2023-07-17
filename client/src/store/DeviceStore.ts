import { action, computed, makeAutoObservable, observable } from "mobx";
export type ISelectedBrand = {
  name: string;
 
};

export class DeviceStore {
  _types?: any[];
  _brands?: any[];
  _devices?: any[];
  _selectedType?: {};
  _selectedBrand?: {};
  _page?: number;
  _totalCount?: number;
  _limit?: number;
  constructor() {
    this._types = [
      { id: 1, name: "Холоддильник" },
      { id: 2, name: "TV" },
      { id: 3, name: "Phone" },
      { id: 4, name: "TV" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "LG" },
      { id: 3, name: "Apple" },
      { id: 4, name: "Samsung" },
      { id: 5, name: "LG" },
      { id: 6, name: "Apple" },
      { id: 7, name: "Samsung" },
      { id: 9, name: "LG" },
      { id: 8, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone pro12",
        rating: 4,
        img: "https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14pro/deeppurple/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a-670x540.webp",
      },
      {
        id: 2,
        name: "Iphone pro12",
        rating: 4,
        img: "https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14pro/deeppurple/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a-670x540.webp",
      },
      {
        id: 3,
        name: "Iphone ",
        rating: 4,
        img: "https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14pro/deeppurple/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a-670x540.webp",
      },
      {
        id: 4,
        name: "Iphone pro19",
        rating: 4,
        img: "https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14pro/deeppurple/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a-670x540.webp",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this, {
      _types: observable,
      _brands: observable,
      _devices: observable,
      _selectedType: observable,
      _selectedBrand: observable,
      _page: observable,
      _totalCount: observable,
      _limit: observable,
      setBrands: action,
      setPage: action,
      setDevices: action,
      setTotalCount: action,
      setTypes: action,
      setSelectedBrand: action,
      setSelectedType: action,
      selectedType: computed,
      selectedBrand: computed,
      types: computed,
      brands: computed,
      devices: computed,
      totalCount: computed,
      page: computed,
      limit: computed,
    });
  }

  setTypes(types: any) {
    this._types = types;
  }
  setBrands(brands: any) {
    this._brands = brands;
  }
  setDevices(devices: any) {
    this._devices = devices;
  }

  setSelectedType(type: any) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand: any) {
    this.setPage(1);
    this._selectedBrand = brand ;
  }
  setPage(page: number) {
    this._page = page;
  }
  setTotalCount(count: number) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}

export default new DeviceStore();
