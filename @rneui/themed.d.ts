// themed.d.ts
import '@rneui/themed';

declare module '@rneui/themed' {

  export interface Colors {
    tertiary: string;
    accent: string;
    surface: string;
  }
  export interface Theme {
    foo: string
  }
}
