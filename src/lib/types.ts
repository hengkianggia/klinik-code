export interface Photo {
  id: string;
  urls: {
    full: string;
  };
  user: {
    name: string;
  };
  alt_description: string;
}

export interface QueryProp {
  [key: string]: string;
}
