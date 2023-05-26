import { Namespace } from '@google/gax';

declare global {
  namespace NodeJS {
    interface Global {
      google: Namespace;
    }
  }
}
