# Saboteur 2 remake (in Next.js) #

Well... this is a bit embarrassing. Long story short, there was an old computer
(1982), then there was a game for that old computer (1987), then there was a fan
of that old game for an old computer and that fan made a [fan site][orig]
(2009). That site is also old. None of it is related to me, except I am also old
(kinda).

10 years later... It is 2018 and I came across that geriatric fan site and wow!
memories.I actually had that computer and played that game. So, I decided to
amuse myself and rewrite the fan site into HTML5+CSS3. [And I did][rm1]. But
this project ain't it, shitty twist!

Now, this project you are looking at, is a SECOND rewrite. From pure no-JS HTML
into [Next.JS][nextjs] (React based framework)... Stop. This is rude... OK, I
guess I deserved it... Done chuckling? OK.

## Technical overview ##

This project is using Next.JS, which means it is a mix of back-end and front-end
code. The Next.JS framework provides default web-server (based of Node.js,
naturally) and the code of this project - pages and components partially run
on the server (server side rendering) and partially in the client browser.

## Supported browsers ##

- Modern FF, Chrome.
- IE 11+ (due to Next.JS)
- MS Edge

## Build and dev ##

This project uses [Yarn][yarn], so if you don't have it, you need to install it
first.

Install

```bash
yarn install
```

Run dev local server (available on http://localhost:3000). This will spawn
server instance process, with automatic recompile when files
change and hot reload.

```bash
yarn dev
```

Production build and server

```bash
yarn build
yarn start
```

Webpack Bundle Analyzer - get stats on data load to be server to webpage.
Use one of the following commands (the first one creates both of  the  reports,
for browser and a server)

```bash
yarn analyze
yarn analyze:server
yarn analyze:browser
```

Export site to a static set of files (*.html, *.js, *.css). This way you don't
have to have a Node.JS hosting to run a webserver, any static files hosting will
suffice. The result is in "./out" directory.

```bash
yarn build
yarn export
```

[orig]: http://www.saboteur2.ru
[rm1]: https://bitbucket.org/GlebVarenov/saboteur2_remake#readme
[nextjs]: https://nextjs.org/
[yarn]: https://yarnpkg.com/en/