## Amazin eCommerce

#### Example:

Front end for a eCommerce application

### Screen Shots

# Products Page

![Products Page](https://github.com/Ianodad/Amazin/blob/03e7e9608d0d2998d5014782ab075cfa20dda854/screenshot/HomePage.png?raw=true)

# CartView

![Cart View](https://github.com/Ianodad/Amazin/blob/03e7e9608d0d2998d5014782ab075cfa20dda854/screenshot/with%20cart.png?raw=true)

# Product Page

![Product apge](https://github.com/Ianodad/Amazin/blob/03e7e9608d0d2998d5014782ab075cfa20dda854/screenshot/with%20cart.png?raw=true)

## Project Status

## Key Feautures

- [x] Redux
- [x] SSR
- [x] Typescript
- [x] Docker
- [x] PWA(Service Workers)
- [x] Shopping Cart
- [ ] 18n library

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm run dev`

To Visit App:

`localhost:3000`

### Run with Docker

#### run docker with npm

#### run docker with npm for development

```console
npm run dev:up

```

```console
cd amazin


docker build -t amazin .

docker run --name amazin -d -p 3000:3000 amazin:latest
```

Open in browser
http://localhost:3000/

### Run with Docker-compose

```console
docker-compose up --build
```

Open in browser
http://localhost:3000/

---

## License

MIT (c) 2021 [Ian Adera](https://github.com/ianodad)
