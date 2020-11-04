Cucumber Boilerplate
====================

[![Build Status](https://travis-ci.org/webdriverio/cucumber-boilerplate.svg?branch=master)](https://travis-ci.org/webdriverio/cucumber-boilerplate)

***

Boilerplate project to run WebdriverIO tests with [Cucumber](https://cucumber.io/) and brings **true** [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) to JavaScript. Instead of writing complicated test code that only developers can understand, Cucumber maps an ordinary language to code and allows to start with the test process in the early stages of your product development.

## Requirements

- Node version 8 or higher
- A preconfigured Selenium Grid, preinstalled browser driver or cloud provider account

Although this project works fine with NPM we recommend to use Yarn (>= 1.0.0) instead,  due to its speed & solid dependency locking mechanism. To keep things simple we use yarn in this guide, but feel free to replace this with NPM if that is what you are using.

Also this project doesn't cover setting up a proper test environment. You need to download specific browser driver yourself and run the prior starting tests or use a cloud provider like [SauceLabs](https://saucelabs.com/).

## Quick start

Choose one of the following options:

1. Download the latest stable release [here](https://github.com/webdriverio/cucumber-boilerplate/archive/master.zip) or clone the git repo — `git clone https://github.com/webdriverio/cucumber-boilerplate.git`

2. Then:
- Copy the files to your project into a directory like `/integrationtests` (note the hidden files!)

3. Clean the project (Optional):
- *On OSX/Linux:*
-- Run `yarn run clean`

- *On Windows:*
-- Remove the directories `/.git`, `/.github`, `/demo-app` & `/test`
-- Remove the files `.travis.yml`, `jest.json` & `wdio.BUILD.conf.js`
-- Remove all the demo features from the `/src/features` directory

4. Install the dependencies (`yarn install`)

Now you are ready to write your own features.

## Features

- Super simple setup
- Full integration with [WebdriverIO](http://webdriver.io/)
- Over 150 predefined steps that cover almost everything you need, you can start writing tests right away
- Easy integration with cloud services like [Sauce Labs](https://saucelabs.com/)
- Integration of WebdriverIO's Multiremote functionality
- Easy to run tests in parallel
- Allure reports

# How to run the test

To run your tests just call the [WDIO runner](http://webdriver.io/guide/testrunner/gettingstarted.html):

```sh
$ yarn run wdio
```

_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.

# Configurations

To configure your tests, checkout the [`wdio.conf.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/wdio.conf.js) file in your test directory. It comes with a bunch of documented options you can choose from.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `wdio.conf.js` to set all general configs (like mochaOpts) that don't change.
They act as default values. For each different environment you can create a new config with the following name
scheme:

```txt
wdio.<ENVIRONMENT>.conf.js
```

Now you can create a specific config for your pre-deploy tests:

__wdio.STAGING.conf.js__
```js
var config = require('./wdio.conf.js').config;

config.baseUrl = 'http://staging.example.com'

exports.config = config;
```

Your environment-specific config file will get merged into the default config file and overwrites the values you set.
To run a test in a specific environment just add the desired configuration file as the first parameter:

```sh
$ yarn run wdio wdio.STAGING.conf.js
```

# Running single feature
Sometimes it's useful to only execute a single feature file, to do so use the following command:

```sh
$ npx wdio wdio.conf.js --spec ./test/features/select.feature
```

# Using tags

If you want to run only specific tests you can mark your features with tags. These tags will be placed before each feature like so:

```gherkin
@Tag
Feature: ...
```

To run only the tests with specific tag(s) use the `--cucumberOpts.tagExpression=` parameter like so:

```sh
$ npx wdio wdio.conf.js --cucumberOpts.tagExpression='@Tag or @AnotherTag'
```

For more tag options please see the [Cucumber.js documentation](https://docs.cucumber.io/tag-expressions/)

# Pending test

If you have failing or unimplemented tests you can mark them as "Pending" so they will get skipped.

```gherkin
// skip whole feature file
@Pending
Feature: ...

// only skip a single scenario
@Pending
Scenario: ...
```

# Adding new steps and snippets

The predefined snippets allow you to do a lot of common things but you might need extra snippets which
are better aligned with your aims. To do so you will find all step definitions in `./src/steps`. They
are separated in `given`, `when` and `then`.

You define your snippet using regular expressions. This is pretty powerful as it allows you to create complex
sentences with multiple options. Everything that's within `"([^"]*)?"` gets captured and appended to the
callback. The last argument is always a callback function that you need to call when your step is done.
You can access the browser and your WebdriverIO instance with `browser`.

To assert values this boilerplate project uses WebdriverIOs embedded assertion library called [expect-webdriverio](https://www.npmjs.com/package/expect-webdriverio).

# Comments

You can add additional descriptive comments in your feature files.

```gherkin
###
  This is a
  block comment
###
Feature: As a bystander
    I can watch bottles falling from a wall
    So that I can be mildly amused

# This is a single line comment
Scenario: check if username is present
    Given I login as "roboter" with password "test123"
    Then the username "roboter" should be present in the header
```

# Reports

This repo is set up with Allure reports
To run the report, first run the tests and then run npm run allure-report