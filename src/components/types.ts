export type FormInput = {
  keyword: string;
  area: string;
  genre: string;
};

export type FormName = "keyword" | "area"  | "genre"

// 変数からtypeを定義できればすっきりしたコードにできる