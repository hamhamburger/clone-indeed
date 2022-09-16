export type FormInput = {
  keyword: string;
  area: string;
  genre: string;
  name:string
};

export type FormName = "keyword" | "area"  | "genre" | "name"

// 変数からtypeを定義できればすっきりしたコードにできる