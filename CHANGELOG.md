## [3.3.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.3.0...v3.3.1) (2024-03-26)


### Bug Fixes

* **App:** Migrate to v3 for chrome + Remove background script ([acbd754](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/acbd754535818880b6848c60dee8d8e97504da9a))

# [3.3.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.2.4...v3.3.0) (2024-03-21)


### Bug Fixes

* **App:** Add jsdom env for jest ([416a9ed](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/416a9edb2128cc81fda7938bc2347cb7b1bd6023))
* **App:** Add prettier configuration ([cc6fef2](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/cc6fef2a3af279cdea163b34e336fc87d459df45))
* **BandcampFacade:** Improve selection of track rows ([bf9ec40](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/bf9ec40d33e3f3c68d63cd2dfe5a69c4914632f8)), closes [#226](https://github.com/bamdadsabbagh/bandcamp-plus--extension/issues/226)
* **CD:** Update workflows ([3518387](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/35183874b003241d7729237bdf62f17f813930a2))
* **README:** Update README ([bf37548](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/bf3754896817ae37bdfbf96a0054c0adc1823832))
* Rename bin folder to build ([d612630](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/d61263045733ab999ba7d3790216247a696241b8))
* Trim copied text. Fixes [#224](https://github.com/bamdadsabbagh/bandcamp-plus--extension/issues/224) ([bdd7020](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/bdd70207861747d5d837d3993ad7d955dbd7b189))


### Features

* **App:** Add manifest v3 for chrome + Misc ([1250cc0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/1250cc0142667d61afb85600eaf909ce9d4adf47))


### Performance Improvements

* **App:** Replace yarn with pnpm ([eaedaae](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/eaedaaedc0931a1ee3c96709a40604774b06dbf0))

## [3.2.4](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.2.3...v3.2.4) (2022-09-06)


### Bug Fixes

* **Firefox:** Replace `window.content.fetch` with `content.fetch` ([1a43ae6](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/1a43ae6370897d68fb51ed8df552e8107adfcb16)), closes [#159](https://github.com/bamdadsabbagh/bandcamp-plus--extension/issues/159)
* **NPM:** Update to latest ([7ab5510](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/7ab55102ef9a83f9a191f80069473a5b26079995))

## [3.2.3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.2.2...v3.2.3) (2022-04-26)


### Bug Fixes

* **Colors:** Check for the contrast for fill color ([4423f63](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/4423f63491fed2ba93df76937312d91478dc86fc))
* **Track:** Add translation to the left to prevent overlap with buy link ([839d55c](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/839d55c1b8d130b348c8caedfca1c62a79760039))
* **Track:** Ignore tracks without links ([5d79e43](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/5d79e439b1b693acd6e016a2470bcb484b5935dc))
* **Track:** Improve wishlist icon position ([c8743cd](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/c8743cd3e5d2f242dc7db1a4b72386124fddb244))

## [3.2.2](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.2.1...v3.2.2) (2022-04-25)


### Bug Fixes

* **Heart:** Inject dynamic fill color to ensure contrast ratio ([526e06e](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/526e06e82faf7c0545fd3678cb04b90c52cd8667))


### Performance Improvements

* **Bandcamp:** Reduce expense of DOM traversals by returning stored values ([b9c39c9](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/b9c39c9a8a306829115903f2e5d369d2d5b0a301))

## [3.2.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.2.0...v3.2.1) (2022-04-24)


### Bug Fixes

* **Firefox:** Use `window.content.fetch` to build a successful request + Use cross-name token `ref_token` + Closes [#104](https://github.com/bamdadsabbagh/bandcamp-plus--extension/issues/104) ([5af8e9f](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/5af8e9f9fd5bf6fcb509fd787e979ed2b9ab4232))

# [3.2.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.1.2...v3.2.0) (2022-04-24)


### Bug Fixes

* **Album:** Prevent any action if user is not logged in ([56405d1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/56405d1ca9e9764a5e425ffedb6913ba36b5862e))
* Prevent new wishlist feature to be initialized if user is not logged in + Various code merge and clean ([9d6d98e](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/9d6d98e0549d9fb31bba5fc72c89934648aabddb))


### Features

* Add `R`, `Shift + R`, `Shift + ↑` and `Shift + ↓` keyboard bindings + Improve code separation and readability ([168d5ad](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/168d5ad18eb5b6b78e4bf0df96532cdd78066a4e))
* User can add a single track to wishlist from an album page, very raw solution at the moment + Move startup script to its own class ([57aa4b5](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/57aa4b5d83ca20136f11e0bcaec47c9af429ad83)), closes [#104](https://github.com/bamdadsabbagh/bandcamp-plus--extension/issues/104)

## [3.1.2](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.1.1...v3.1.2) (2022-04-24)


### Bug Fixes

* **Bandcamp:** Verify element existence before applying rules ([8c293e1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/8c293e1ab73ef69f89ee313c171cd75d0821afb2))

## [3.1.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.1.0...v3.1.1) (2022-04-23)


### Bug Fixes

* **Keyboard:** Use `key` prop instead of `code` to actually use the character pressed by the user (different keyboard layouts) ([a616404](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/a61640478d8a085a121bd309a96c08b96cc58947)), closes [#104](https://github.com/bamdadsabbagh/bandcamp-plus--extension/issues/104)

# [3.1.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.0.1...v3.1.0) (2022-04-23)


### Features

* **Keyboard:** Add toggle wishlist with `W` ([14773a0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/14773a0268efbc8e61aa9f31564e994b6fbb8473)), closes [#104](https://github.com/bamdadsabbagh/bandcamp-plus--extension/issues/104)

## [3.0.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v3.0.0...v3.0.1) (2022-02-22)


### Performance Improvements

* dummy commit to test release pipeline ([cd0eb89](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/cd0eb89f8468975ab82eaef1ba979795cefbaf02))

# [3.0.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.1.0...v3.0.0) (2022-02-22)


### Features

* Rewrite using adapted design patterns + Add various improvements ([d6fd238](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/d6fd238dc7be64ad1483b00bfd7d3640aa4966ae))


### BREAKING CHANGES

* see [this commit](a910710cfb678880b368ccf0d545a12b5b41c4f2) for the actual file changes

# [2.1.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.8...v2.1.0) (2022-02-22)


### Bug Fixes

* **Keyboard:** Prevent keyboard handling if user is not on `body` ([b2ee3f3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/b2ee3f36ad4bf1a4a1ff7953dce7487e630605ca))


### Features

* Add `stretch` mode for speed feature + Condense layout ([feb1ecc](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/feb1eccfe4a8f3e0d8cc31e31ed26b20f50bcf2d))
* Add speed feature to chrome! ([b3080bd](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/b3080bd82edc4802f838002c57add7b3c8b1a86b))

## [2.0.8](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.7...v2.0.8) (2022-02-10)


### Bug Fixes

* **Keyboard:** Ignore all keys with or without modifiers that should not be handled ([eebc496](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/eebc496ae5868c4ad14bec17b284b0e1ebb06a60))

## [2.0.7](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.6...v2.0.7) (2022-02-08)


### Performance Improvements

* Dummy commit to trigger semver ([6cb9da3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/6cb9da393a71b5bbfe96eef2821895f5b61f3a5f))

## [2.0.6](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.5...v2.0.6) (2022-02-08)


### Bug Fixes

* **Content:** Remove duplicate property ([6d9245c](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/6d9245cc3b765610e74b2c8c97e2b1174b6237e6))

## [2.0.5](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.4...v2.0.5) (2022-02-08)


### Bug Fixes

* **Bandcamp:** Remove unnecessary assertion ([e15623e](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/e15623ec02021a83432fd74b65c829714f2b6752))
* **Content:** Merge duplicate selector ([8a73678](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/8a736787b7e19bc0bb506e82ebac3f7ef28aac5e))
* **Keyboard:** Make class static to avoid non referenced `new` use ([ca95e50](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/ca95e50bf103b80596c21ddc639fe191abfce17e))
* **Keyboard:** Remove redundant use of `await` ([5f60ce0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/5f60ce077ee3e0342637d04bbb595f63ae5c42e7))

## [2.0.4](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.3...v2.0.4) (2022-02-02)


### Performance Improvements

* **Dependencies:** Upgrade to have type definitions + Remove local declaration ([38cf92d](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/38cf92d8a758fede329908494d9a13a20272061a))

## [2.0.3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.2...v2.0.3) (2022-02-02)


### Performance Improvements

* Dummy commit to trigger semver ([3f1d3aa](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/3f1d3aaa93e7dff7e32dcdc6c7b15d76e6b89609))

## [2.0.2](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.1...v2.0.2) (2022-02-01)


### Bug Fixes

* **SpanComponent:** Set props before interacting with the DOM ([0237acb](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/0237acb73029e0697c6b72d353ca6f7de80ab92e))

## [2.0.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v2.0.0...v2.0.1) (2022-02-01)


### Bug Fixes

* **Tests:** Add jest and other dependencies + Add unit tests for Components + Apply various improvements and code cleaning ([18acbbb](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/18acbbb9ea2faf6b2163f45d24cb24c7b2547fb6))
* **Tests:** Add tests for Utils ([79091c2](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/79091c24c86bff81cf02b90f3a21e0d7b6ab63d6))
* **Volume:** Prevent button from displaying `Reset!` when value is not changed ([bc97459](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/bc974597c66c2b8371abc5cc451b33f8a1297903))


### Performance Improvements

* **Constants:** Rename file extension to `.ts` ([d308889](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/d3088896afa6a2436aebbd16d27a46f507587a98))

# [2.0.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.5.0...v2.0.0) (2022-02-01)


### Breaking Changes

* Rewrite in OOP style with TypeScript classes ([e1b7455](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/e1b7455369ca49816adaaad90f51a902443b9e90))


### Features

* Copy and apply bandcamp styling for ranges + Display a new grid on two rows + Display semitones information in speed module ([9411e95](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/9411e957c14c076b6381b238f807a16f3f1313bb))

# [1.5.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.4.2...v1.5.0) (2022-01-31)


### Bug Fixes

* **GridComponent:** Fix the slider width to align with player dimensions ([9acfedd](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/9acfedddf3015981644c64e62cce0bddbeecd260))
* Rectify margins only when context is valid ([a15857c](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/a15857ccfbb99062ae458266afeb18b6cb0b228f))


### Features

* Style buttons + Add reset functionality to volume and speed controls + Rename files, folders and functions + Add JSDOC + Various improvements ([faea980](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/faea9800ae13b467d83381bb40ff525f37c8c62e))


### Performance Improvements

* **Dependencies:** Update to latest ([4d9b869](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/4d9b869a3b5c8ca063d480fa9c052cabdf168748))

## [1.4.2](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.4.1...v1.4.2) (2022-01-18)


### Performance Improvements

* dummy commit to test release pipeline ([baeb4db](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/baeb4db87bed01967f2c38ab458711c25bb76d6f))

## [1.4.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.4.0...v1.4.1) (2022-01-18)


### Performance Improvements

* enable automatic chrome store release ([c62d804](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/c62d8040fd277107060bdc2627edadff09eb3d82))
* update dependencies ([6dced6a](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/6dced6aeac2c3fc2bc96b149cd7a37a25da9ce47))

# [1.4.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.3.4...v1.4.0) (2021-12-13)


### Features

* add speed slider only for firefox ([0bdbcaa](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/0bdbcaa16ed5570674a7dea067cb92cc9edfa931))


### Performance Improvements

* upgrade dependencies ([dca7c8b](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/dca7c8bc859b43bfdb63a2cc1fb86db54a6b747b))

## [1.3.4](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.3.3...v1.3.4) (2021-11-09)


### Performance Improvements

* upgrade dependencies ([2e7ccba](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/2e7ccbac3b0331825cad89bb71c2d33306e1fd97))

## [1.3.3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.3.2...v1.3.3) (2021-11-06)


### Bug Fixes

* remove unused permissions ([ed93efc](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/ed93efcf1f3a6718e0b89d76b364df328b476d4f))

## [1.3.2](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.3.1...v1.3.2) (2021-11-06)


### Performance Improvements

* update dependencies + new code style ([f84fbe3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/f84fbe3bd67d0a18ea9c26da8a3eb3a87c3e3f48))

## [1.3.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.3.0...v1.3.1) (2021-10-14)


### Bug Fixes

* **play-first-track:** add check if first track is already playing ([52be982](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/52be982bceadff01324b14829c04fd19b010954b))


### Performance Improvements

* **keyboard:** replace conditions with object lookups ([adf0d54](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/adf0d5425e0a7116929ebc53ae2f74141be45b04))

# [1.3.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.2.1...v1.3.0) (2021-10-14)


### Bug Fixes

* **get-title:** correctly retrieve title when page is /track/ ([140e03b](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/140e03b9a3424c24428cb4e73774972cef49c8d6))


### Features

* **keyboard:** add `changeVolume` + `playFirstTrack` features + prevent only needed keys ([70fdda3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/70fdda30da37e7d4ec6dd2b983cc28094b104644))


### Performance Improvements

* **volume.component:** provide IDs for DOM elements ([58d3d9a](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/58d3d9a0da1b6de2e86d232990dc3258bfe38164))

## [1.2.1](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.2.0...v1.2.1) (2021-10-13)


### Performance Improvements

* **content-script:** add conditions before inject ([3d97ccb](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/3d97ccbd949000a8a7c7f56c285dfd9bdfeaccbc))
* **getters:** remove page verifications (they are now before injection) ([c29ffb3](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/c29ffb348c5dc7a154f6027241c98b4c97d990f7))
* **keyboard:** move getters inside top handler ([ca08c58](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/ca08c58fcb2a79111e11cd378ad7cf5c404c2692))

# [1.2.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.1.0...v1.2.0) (2021-10-13)


### Bug Fixes

* **volume:** components function names in PascalCase ([db0b40c](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/db0b40ce43a7e5b74f1fa667006a12282e48baa2))


### Features

* add keyboard events ([25499c0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/25499c06c11666a806bd84b30d6e99e64e4aa68f))
* **track-info:** add copy track info button ([e13d325](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/e13d3251711126a194cbbb30b8662d86b69f5b56))

# [1.1.0](https://github.com/bamdadsabbagh/bandcamp-plus--extension/compare/v1.0.0...v1.1.0) (2021-10-13)


### Features

* add volume slider + various QoL improvements ([2a0fbc9](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/2a0fbc9474a991e3e6245f7de146596fddc52cd7))
* **manifest:** add browser action icon + indent with 4 spaces ([a05cbfe](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/a05cbfe966adfbd4b0cd65b6ab8f04e0af2303c2))


### Performance Improvements

* **deps:** update `web-ext` to latest ([02eaaf8](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/02eaaf81dc56c930c0d5f7df731aa3cc6000bcc2))

# 1.0.0 (2021-10-12)


### Features

* init ([f9a4d67](https://github.com/bamdadsabbagh/bandcamp-plus--extension/commit/f9a4d67b655817b38294f2b95a9f0f31f41bfc7a))
