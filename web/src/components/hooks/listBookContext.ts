import { createContext } from 'react';
interface defaultvalue {
  statBook: {
    id: number;
  };
  setstatBook: () => number | null;
}
export interface defaultContext {
  books: defaultvalue[];
}

const ListBookContext = createContext<defaultContext>({
  books: [
    {
      setstatBook: () => null,
      statBook: {
        id: 0,
      },
    },
  ],
});

export { ListBookContext };
