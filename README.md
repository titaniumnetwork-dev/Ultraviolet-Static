<p align="center"><img src="https://raw.githubusercontent.com/titaniumnetwork-dev/Ultraviolet-Static/main/public/uv.png" height="200"></p>

<h1 align="center">Ultraviolet-Static</h1>

Static files/assets used to spin up an Ultraviolet website.

## Packaging

1. Clone the repository

```sh
$ git clone https://github.com/titaniumnetwork-dev/Ultraviolet-Static.git
> Cloning into Ultraviolet-Static...
$ cd Ultraviolet-Static
```

2. Install dependencies

```sh
$ npm install
```

3. Make your changes...
4. Produce the `dist/` directory and import the Ultraviolet scripts

```sh
$ npm run build
```

5. Package for NPM to produce `ultraviolet-static.X.X.X.tar.gz` file

```sh
$ npm pack
```

## Install in [Ultraviolet-Node](https://github.com/titaniumnetwork-dev/Ultraviolet-Node.git)

1. Follow installation steps until you need to run `npm install`
2. Install the produced Ultraviolet-Static tgz (upload to Discord, Github, etc...) (see [Packaging](#packaging))

```sh
$ npm install https://github.com/titaniumnetwork-dev/Ultraviolet-Static/releases/download/v1.0.0/ultraviolet-static-1.0.0.tgz
# OR
$ npm install ../path/to/ultraviolet-static-1.0.0.tgz
```

3. Continue instructions...

```sh
$ npm start
```
