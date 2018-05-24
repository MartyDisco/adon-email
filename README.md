# AdOn Email

A simple minified and inlined HTML email builder from pug template and stylus sheet.

## Requirement

* [nodejs](https://nodejs.org) - A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Installing

Using git from the command line :

```
git clone https://github.com/MartyDisco/adon-email.git
```

Or download [adon-email](https://github.com/MartyDisco/adon-email/archive/master.zip) directly and unzip.

## Setup

Navigate to the created directory (the unziped directory if you downloaded directly) :

```
cd ./adon-email
```

And install the dependencies using npm :

```
npm install
```

Or Yarn :

```
yarn install
```

## Useage

Your **Pug** content goes into the `/src/index.pug` file. A HTML tree is already built to get you start quickly :

```
body
    table.body
        tr
            td
                table.container
                    tr
                        td
                            // Example content structure you can replace or duplicate
                            table.row
                                tr
                                    td
                                        center
                                            p This is a Row
                            table.row
                                tr
                                    td
                                        center
                                            p This is another Raw
```

Your **Stylus** (which can be pure CSS) content goes into the `/src/index.styl` file.

Once you are done building, simply run :

```
yarn build
```

To output your minified and inlined HTML into the `/dist/email.html` file.

## Behaviors

[foundation-emails](https://foundation.zurb.com/emails/docs/) is automatically added to the build so you can use any of its components in your template.

## Dependencies

* [cpx](https://github.com/mysticatea/cpx) - A cli tool to watch and copy file globs.
* [foundation-emails](https://github.com/zurb/foundation-emails) - Responsive HTML emails that work on any device and client.
* [html-minifier](https://github.com/kangax/html-minifier) - Javascript-based HTML compressor/minifier.
* [juice](https://github.com/Automattic/juice) - Inlines CSS stylesheets into your HTML source.
* [pug](https://github.com/pugjs/pug) - Robust, elegant, feature rich template engine for Node.js.
* [stylus](https://github.com/stylus/stylus) - Expressive, robust, feature-rich CSS language built for Node.js.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
