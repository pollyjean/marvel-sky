export const API_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters";

export interface IMarvelHeros {
  id?: number;
  name?: string;
  description?: string;
  modified?: string;
  thumbnail?: Thumbnail;
  resourceURI?: string;
  comics?: Comics;
  series?: Comics;
  stories?: Stories;
  events?: Comics;
  urls?: URL[];
}

export interface Comics {
  available?: number;
  collectionURI?: string;
  items?: ComicsItem[];
  returned?: number;
}

export interface ComicsItem {
  resourceURI?: string;
  name?: string;
}

export interface Stories {
  available?: number;
  collectionURI?: string;
  items?: StoriesItem[];
  returned?: number;
}

export interface StoriesItem {
  resourceURI?: string;
  name?: string;
  type?: Type;
}

export enum Type {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface URL {
  type?: string;
  url?: string;
}

export interface IMarvelContent {
  id?: number;
  title?: string;
  variantDescription?: string;
  description?: null | string;
  pageCount?: number;
  prices?: Price[];
  thumbnail?: Thumbnail;
  creators?: Creators;
  rating?: string;
}
export interface IMarvelComics {
  id?: number;
  digitalId?: number;
  title?: string;
  issueNumber?: number;
  variantDescription?: string;
  description?: null | string;
  modified?: string;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects?: TextObject[];
  resourceURI?: string;
  urls?: URL[];
  series?: Series;
  variants?: Series[];
  dates?: DateElement[];
  prices?: Price[];
  thumbnail?: Thumbnail;
  images?: Thumbnail[];
  creators?: Creators;
  characters?: Characters;
  stories?: Stories;
  events?: Characters;
}

export interface Characters {
  available?: number;
  collectionURI?: string;
  items?: Series[];
  returned?: number;
}

export interface Series {
  resourceURI?: string;
  name?: string;
}

export interface Creators {
  available?: number;
  collectionURI?: string;
  items?: CreatorsItem[];
  returned?: number;
}

export interface CreatorsItem {
  resourceURI?: string;
  name?: string;
  role?: string;
}

export interface DateElement {
  type?: DateType;
  date?: string;
}

export enum DateType {
  DigitalPurchaseDate = "digitalPurchaseDate",
  FocDate = "focDate",
  OnsaleDate = "onsaleDate",
  UnlimitedDate = "unlimitedDate",
}

export interface Thumbnail {
  path?: string;
  extension?: Extension;
}

export enum Extension {
  Jpg = "jpg",
}

export interface Price {
  type?: PriceType;
  price?: number;
}

export enum PriceType {
  DigitalPurchasePrice = "digitalPurchasePrice",
  PrintPrice = "printPrice",
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface TextObject {
  type?: string;
  language?: string;
  text?: string;
}

export enum URLType {
  Detail = "detail",
  InAppLink = "inAppLink",
  Purchase = "purchase",
  Reader = "reader",
}

export interface IMarvelEvents {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  urls?: URL[];
  modified?: string;
  start?: Date;
  end?: Date;
  thumbnail?: Thumbnail;
  creators?: Creators;
  characters?: Characters;
  stories?: Stories;
  comics?: Characters;
  series?: Characters;
  next?: Next;
  previous?: Next;
}

export interface Next {
  resourceURI?: string;
  name?: string;
}

export interface IMarvelSeries {
  id?: number;
  title?: string;
  description?: null | string;
  resourceURI?: string;
  urls?: URL[];
  startYear?: number;
  endYear?: number;
  rating?: string;
  type?: string;
  modified?: string;
  thumbnail?: Thumbnail;
  creators?: Creators;
  characters?: Characters;
  stories?: Stories;
  comics?: Characters;
  events?: Characters;
  next?: Next | null;
  previous?: Next | null;
}

export interface Next {
  resourceURI?: string;
  name?: string;
}

export interface IMarvelStories {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  type?: Type;
  modified?: string;
  thumbnail?: null;
  creators?: Creators;
  characters?: Characters;
  series?: Characters;
  comics?: Characters;
  events?: Characters;
  originalIssue?: OriginalIssue;
}

export interface OriginalIssue {
  resourceURI?: string;
  name?: string;
}

export interface Item {
  resourceURI?: string;
  name?: string;
  role?: string;
}
