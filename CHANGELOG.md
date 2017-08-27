# CHANGELOG

## 1.0.0 (16th July 2017)

Initial release which supports the current API which will not change for the forseeable future. Fully functional except the fact it lacks support for relative paths and Windows.

## 1.1.0 (17th July 2017)

- Add support for relative paths.
- Improve performance (noticeable delay on Hyper instances running on older machines on terminal start).

## 1.2.0 (17th July 2017)

- Fix paths relative from home directory.

## 1.2.1 (22nd July 2017)

- Add Babel transpilation for Ava.
- Enable Windows support.
- Output built bundle to `lib` instead.
- Set target to ES2015 to support Node 6.

## 1.3.0 (8th August 2017)

- Set new target to ES2016 from ES2015 (does not affect Node 6 support as this plugin doesn't use the exponentiation operator).
- Update README.

## 1.3.1 (14th August 2017)

- Switch to the Standard code style.
- Update packages and remove the proof of concept label.

## 1.3.2-1.3.3 (25th August 2017)

- Fix corrupted 1.3.1 release.

## 1.4.0 (25th August 2017)

- Get hyper-background working again.
- Sincerely apologizing for the trouble caused to you people.

## 1.5.0 (27th August 2017)

- Tracked down the bug to Webpack, the plugin should work properly.
- Abstracting something too much isn't good, lesson learned.
- Period of non-functionality is from 14th August to 27th August, today it's up and running.

## 1.5.1 (27th August 2017)

- Meet guidelines for addition in bnb/awesome-hyper list. :smile:
