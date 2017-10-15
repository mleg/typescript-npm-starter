# Typescript setup to use npm modules
As minimal as possible Webpack / Typescript setup to use npm modules in the browser with `npm install`  
_Made in October 2017, don't forget to upgrade the dependencies. There are just a few of them._

## Story
I needed some simple setup to use _RxJS_ 5 with _Typescript_. And wanted to add `rxjs` with just `npm install` -- what an innocent wish after all!  
As a novice typescripter and webpacker I tried hard to find such a thing on the Web, ready to use. With no luck.  
I hope you won't repeat my struggle and will come across this repo.  


## Features
+ When you want to **add a library** to your project just **`yarn add`** it (or _npm install_ if you're so conservative). Everything should work as expected;
+ **Minimal configs**, few lines each;
+ **Minimal dependencies**. Thus are `typescript` itself, `webpack`, `ts-loader` and `tslint`. RxJS is just for example, remove it.
+ **Development only**. For production use you need to tweak setup further. At least you'll probably want to minify your build and get rid of source maps. 
+ Example of rxjs **partial imports** (for smaller builds)
+ It's for **frontend** apps (things are much simpler on the Node side);
+ Based on `vanilla` example from `examples` folder of the [**ts-loader** repo](https://github.com/TypeStrong/ts-loader). Thanks guys both for the tool and the examples!

## PS
1. Don't be afraid of _Webpack_ as I was, it's simple for such basic scenarios. The docs are really good and beginner friendly.
2. If you use VS Code, you may not need a development server to finish up this setup. The excellent [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension does the job. Just start from `index.html`. Zero configuration, **hot reloading** included.
3. Being scared by stories of <q>post-webpack stress disorder</q> I first tried to avoid Webpack and go with Typescript only. But it is nowhere close to _simple_, I abandoned the effort.
