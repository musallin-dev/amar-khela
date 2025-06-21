export interface Language {
  code: 'en' | 'bn';
  name: string;
  nativeName: string;
}

export interface AppFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Screenshot {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export interface Translations {
  en: {
    [key: string]: string | string[];
  };
  bn: {
    [key: string]: string | string[];
  };
}