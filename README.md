# telegram-signup

[![npm](https://img.shields.io/npm/v/telegram-signup.svg?style=flat-square)](https://www.npmjs.com/package/telegram-signup)
[![license](https://img.shields.io/github/license/Bannerets/telegram-signup.svg?style=flat-square)](https://github.com/Bannerets/telegram-signup/blob/master/LICENSE)

Sign up for [Telegram](https://telegram.org/) with any device.

## Requirements

- [`node`](https://nodejs.org/en/download/) v7.6.0+

## Installation

Via `npm`:

```console
$ [sudo] npm install -g telegram-signup
```

You can download Windows binaries from [GitHub Releases](https://github.com/Bannerets/telegram-signup/releases).

## Usage

Start from command line:

```console
$ telegram-signup [options]
```

It will request phone number, first name, and last name (optional).

## Options

- `-I`, `--id` — API ID (defaults to `197316`)

- `-H`, `--hash` — API hash (defaults to `f5a841647e17ae9da32b9483d4304e45`)

- `-d`, `--dev` — Use telegram dev server

- `-h`, `--help` — Print this list and exit
