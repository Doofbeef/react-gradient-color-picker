webpackJsonp([0],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=document.getElementsByClassName("demonstration")[0];l["default"].render(i["default"].createElement(c["default"],null),e)}r(1),r(5),r(7),r(9),r(11),r(14);var a=r(16),i=n(a),s=r(167),l=n(s),u=r(168),c=n(u);o()},1:function(e,t){},5:1,7:1,9:1,11:1,14:1,167:function(e,t,r){"use strict";e.exports=r(18)},168:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function(e,t,r){for(var n=!0;n;){var o=e,a=t,i=r;s=u=l=void 0,n=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,a);if(void 0!==s){if("value"in s)return s.value;var l=s.get;return void 0===l?void 0:l.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return void 0;e=u,t=a,r=i,n=!0}},l=r(16),u=n(l),c=r(169),p=n(c),f=r(170),d=n(f),m=r(171),b=n(m),v=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(p["default"],{className:"right",project:d["default"].user+"/"+d["default"].name}),u["default"].createElement("p",null,"Just demonstrating the awesomeness of this boilerplate here."),u["default"].createElement(b["default"],null))}}]),t}(u["default"].Component);t["default"]=v,e.exports=t["default"]},169:function(e,t,r){!function(t,n){e.exports=n(r(16))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(1);e.exports=a.createClass({displayName:"exports",render:function(){var e=this.props,t=e.text,r=e.style,i=e.className,s=n(e,["text","style","className"]);return i=i||"",i+=" github-fork-ribbon-wrapper",t=this.props.text||"Fork me on GitHub",a.createElement("div",{className:i},a.createElement("div",{className:"github-fork-ribbon",style:r},a.createElement("a",o({href:"https://github.com/"+this.props.project},s),t)))}})},function(t,r){t.exports=e}])})},170:function(e,t){e.exports={name:"react-component-boilerplate",description:"Boilerplate for React.js components",author:"Juho Vepsalainen",user:"survivejs",version:"1.0.0",scripts:{start:"webpack-dev-server",test:"karma start",tdd:"karma start --auto-watch --no-single-run","gh-pages":"webpack","deploy-gh-pages":"node ./lib/deploy_gh_pages.js",dist:"webpack","dist-min":"webpack","dist-modules":"babel ./src --out-dir ./dist-modules",lint:"eslint . --ext .js --ext .jsx",preversion:'npm run test && npm run lint && npm run dist && npm run dist-min && git commit --allow-empty -am "Update dist"',prepublish:"npm run dist-modules",postpublish:"npm run gh-pages && npm run deploy-gh-pages",postinstall:"node lib/post_install.js"},main:"dist-modules",dependencies:{react:"^0.14.0","react-dom":"^0.14.0"},devDependencies:{babel:"^5.8.23","babel-core":"^5.8.25","babel-eslint":"^4.1.3","babel-loader":"^5.3.2","babel-plugin-react-transform":"^1.1.1",chai:"^3.3.0","clean-webpack-plugin":"^0.1.3","css-loader":"^0.19.0",eslint:"^1.6.0","eslint-loader":"^1.1.0","eslint-plugin-react":"^3.5.1","extract-text-webpack-plugin":"^0.8.2","file-loader":"^0.8.4","gh-pages":"^0.4.0","git-prepush-hook":"^1.0.1","highlight.js":"^8.8.0","html-webpack-plugin":"^1.6.2","isparta-instrumenter-loader":"^0.2.1","json-loader":"^0.5.3",karma:"^0.13.10","karma-chai":"^0.1.0","karma-coverage":"^0.5.2","karma-mocha":"^0.2.0","karma-phantomjs-launcher":"^0.2.1","karma-sourcemap-loader":"^0.3.5","karma-spec-reporter":"0.0.20","karma-webpack":"^1.7.0","markdown-to-react-components":"bebraw/markdown-to-react-components#highlight",mocha:"^2.3.3",phantomjs:"^1.9.18","phantomjs-polyfill":"0.0.1",purecss:"^0.6.0","react-addons-test-utils":"^0.14.0","react-ghfork":"^0.3.2","react-transform-hmr":"^1.0.1","style-loader":"^0.12.4","url-loader":"^0.5.6",webpack:"^1.12.2","webpack-dev-server":"^1.12.0","webpack-merge":"^0.2.0"},repository:{type:"git",url:"https://github.com/survivejs/react-component-boilerplate.git"},homepage:"https://survivejs.github.io/react-component-boilerplate/",bugs:{url:"https://github.com/survivejs/react-component-boilerplate/issues"},keywords:["react","reactjs","boilerplate"],license:"MIT","pre-push":["test","lint"]}},171:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function(e,t,r){for(var n=!0;n;){var o=e,a=t,i=r;s=u=l=void 0,n=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,a);if(void 0!==s){if("value"in s)return s.value;var l=s.get;return void 0===l?void 0:l.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return void 0;e=u,t=a,r=i,n=!0}},l=r(16),u=n(l),c=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",{onClick:this.easterEgg},"click me")}},{key:"easterEgg",value:function(){alert("easter egg")}}]),t}(u["default"].Component);t["default"]=c,e.exports=t["default"]}});