# [PileBunker](https://github.com/Panepo/PileBunker)

[![Build Status](https://travis-ci.org/Panepo/PileBunker.svg?branch=master)](https://travis-ci.org/Panepo/PileBunker.svg)

Shiropro RE weapon damage calculator PileBunker

城プロRE 武器傷害機算機 パイルバンカー

『[城プロRE](http://www.dmm.com/netgame_s/oshirore/)』(C) DMMゲームズ

「城プロRE」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。

## Development Requirements
* node `^5.0.0`
* npm `^3.0.0`
* python `^3.0.0`

## Getting Start

1. Clone source code
```
$ git clone https://github.com/Panepo/PileBunker.git
```
2. Install dependencies
```
$ cd PileBunker
$ npm install
```
3. Start development server and visit [http://localhost:3000/](http://localhost:3000/)
```
$ npm run start
```
## Scripts

|`npm run <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3000`|
|`parser`           |Parses raw data in ./raw to generate .json file|
|`dev`              |Builds the devlopment application to ./build|
|`build`            |Builds the production application to ./build|
|`test`             |Performs unit tests by Mocha|

## Testing

To add a unit test, create a `.spec.js` file anywhere inside of `./tests`. Karma and webpack will automatically find these files, and Mocha and Chai will be available within your test without the need to import them.

## Production

Build code before deployment by running `npm run build`.

## Algorithm

Data are collected from 御城プロジェクトRE 城プロRE 攻略 Wiki 

http://scre.swiki.jp/

The frame calcuation algorithm is

```
実行フレーム＝基本攻撃フレーム/(攻撃速度上昇割合+1)+隙フレーム/(隙速度上昇割合+1)
攻撃・隙　速度上昇割合＝裝備上昇割合＋特技計略上昇割合
※計算結果は小數點以下四捨五入
```

The damage calcuation algorithm is

```
自身の攻撃力－対象の防禦力＝ダメージ
```

The status calcuation algorithm is

```
耐久・攻撃・防禦・範囲 
＝(基本値×絆ボーナス×地形ボーナス＋裝備補正)×巨大化補正×最大係數の割合上昇系特技・計略補正＋全ての固定値繫上昇特技・計略補正
```
