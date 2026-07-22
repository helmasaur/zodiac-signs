declare module "zodiac-signs" {
  interface SignByDateParams {
    day?: number;
    month?: number;
  }

  interface ZodiacSign {
    name: string;
    symbol: string;
    element: string;
    dateMin: string;
    dateMax: string;
  }

  interface ZodiacSigns {
    getSignByDate(
      params?: SignByDateParams,
      language?: string,
    ): ZodiacSign | number;
    getSignByName(signName: string, language?: string): ZodiacSign | number;
    getSignBySymbol(signSymbol: string, language?: string): ZodiacSign | number;
    getSymbols(): string[];
    getNames(language?: string): string[];
    getElements(language?: string): string[];
  }

  export default function (defaultLanguage: string): ZodiacSigns;
}
