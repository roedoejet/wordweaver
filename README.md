# WordWeaver

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/roedoejet/wordweaver)
![POEditor](https://img.shields.io/poeditor/progress/331037/en?token=611d3987e3a7e94e57b049c0df8de613)
![POEditor](https://img.shields.io/poeditor/progress/331037/fr?token=611d3987e3a7e94e57b049c0df8de613)

> A web app for visualizing data from [WordWeaver](https://github.com/roedoejet/wordweaver)

This is an Angular web application for visualizing data from WordWeaver.

:warning: :construction: This repo is currently **under construction** :construction: :warning:

## Table of Contents

- [WordWeaver](#wordweaver)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
    - [Features](#features)
  - [Install](#install)
  - [Usage](#usage)
  - [Adapting to your languages](#adapting-to-your-languages)
  - [Maintainers](#maintainers)
  - [Contributing](#contributing)
    - [Contributors](#contributors)
  - [License](#license)

## Background

This is a tool for creating interactive conjugation tools for your language.

### Features

- It is fully i18n compliant and customizable using ngx-translate and POEditor. The interface is already in English and French.
- Functions offline (including your conjugation data!) thanks to PouchDB
- Built for mobile (PWA support)
- Totally themable

## Install

If using with a new language, it is recommended to clone the repo.

```sh
$ git clone https://github.com/roedoejet/wordweaver.git
$ cd wordweaver
$ npm install
```

Then, you can create a new repo on GitHub and reset the origin remote to your new repo:

`git remote set-url origin https://github.com/<yourusername>/<yourrepo>`

Then, add a new repo and set the url to this:

`git remote add ww https://github.com/roedoejet/wordweaver.git`

That way, you can make changes in your repo, push them to your origin, but still pull new changes to the gui using `git pull ww main`

## Usage

After installing, just start the app to run locally:

```sh
$ npm start
```

## Adapting to your languages

1. Clone and add remote 'ww'
2. npm install
3. Replace the svg in the shared logo component
4. Edit config
5. Add any languages to assets/i18n

## Maintainers

[@roedoejet](https://github.com/roedoejet).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/roedoejet/wordweaver/issues/new) or submit PRs.

This repo follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

This project exists thanks to all the people who contribute.

## License

[MIT](LICENSE) © Aidan Pine
