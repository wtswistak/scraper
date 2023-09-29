Aplikacja wyszukująca artykuły o podanej przez użytkownika frazie w serwisach National Geographic, Wyborcza. Aplikacja zwraca listę artykułów wraz z podstawowymi informacjami o nich w tym tytuł, zdjęcie, link do artykułu. Istnieje możliwość wyszukiwania dokładnego po frazie (funkcja includes). Aplikacja umożliwia polubienie artykułów, które są zapisywane w tablicy w pamięci Cache i obejrzenie ich na podstronie. Do parsowania Html wykorzystano bilbiotekę cheerio.

Uruchomienie lokalne aplikacji:

- npm install
- npm run dev
- cd .\functions\
- func start

W aplikacji wykorzystano: React, TailwindCSS, Node, Azure Functions.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
