(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),a=(n(0),n(120)),o={id:"about-scripts",title:"About Scripts",sidebar_label:"About Scripts"},s={unversionedId:"scripts/about-scripts",id:"scripts/about-scripts",isDocsHomePage:!1,title:"About Scripts",description:"What is a SikuliX script?",source:"@site/docs\\scripts\\about-scripts.md",slug:"/scripts/about-scripts",permalink:"/docs/scripts/about-scripts",editUrl:"https://github.com/SikuliX/sikulix.github.io/edit/master/docs/docs/scripts/about-scripts.md",version:"current",sidebar_label:"About Scripts",sidebar:"docs",previous:{title:"Contribution",permalink:"/docs/contribution"},next:{title:"Running Scripts",permalink:"/docs/scripts/running-scripts"}},c=[{value:"What is a SikuliX script?",id:"what-is-a-sikulix-script",children:[]},{value:"SikuliX folder structure",id:"sikulix-folder-structure",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-a-sikulix-script"},"What is a SikuliX script?"),Object(a.b)("p",null,"It's a script that automates GUI interaction using image patterns to direct keyboard/mouse events. The core of SikuliX Script is a Java library that consists of two parts: ",Object(a.b)("strong",{parentName:"p"},"java.awt.Robot"),", which delivers ",Object(a.b)("strong",{parentName:"p"},"keyboard")," and ",Object(a.b)("strong",{parentName:"p"},"mouse")," events to appropriate locations, and a C++ engine based on OpenCV, which searches given image patterns on the screen."),Object(a.b)("p",null,"Example in Python language"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'while True: # repeat the body forever\n    wait("image1.png", 10) # wait max 10 seconds for image1 to get visible, otherwise die\n    click("button1.png") # click the button given by image button1\n    if exists("image2.png"): # wait max 3 seconds for image2 to get visible, return True or False\n       doSomething() # in case True execute function doSomething (defined somewhere else)\n    else:\n       break # in case False get out of the loop, which ends the workflow\n    # start all over with the line after the while\n# the end of the workflow\n')),Object(a.b)("p",null,"In the IDE as standard the \u201cfoobar.png\u201d are shown as thumbnails of the images (other options available)."),Object(a.b)("p",null,"To write, execute and debug SikuliX scripts you should know about the features of SikuliX and have at least a basic knowledge about the used scripting language."),Object(a.b)("p",null,"A good starting point is to use the SikuliX IDE, to get used to the SikuliX features."),Object(a.b)("h2",{id:"sikulix-folder-structure"},"SikuliX folder structure"),Object(a.b)("p",null,"A SikuliX script (.sikuli) is the directory that contains a Python source file (.py) representing the automation workflow or the test cases and all the image files (.png) used by the source file. All images used in a Sikuli script are simply a path to the ",Object(a.b)("code",null,".png")," file in the ",Object(a.b)("code",null,".sikuli")," bundle. "),Object(a.b)("p",null,"By default the SikuliX script folder/directory gets the same name as the script, when saving it from the IDE. It is mandatory, that the contained scriptfile has the same name as the folder, this is guaranteed when saving using the SikuliX IDE. "),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"On Mac the folder is seen as a package/bundle, which at the top level in Finder hides the content."))),Object(a.b)("p",null,"The folder and its content for the above example (in IDE we named it myscript)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"myscript.sikuli\n    button1.png\n    image1.png\n    image2.png\n    myscript.py\n")),Object(a.b)("hr",null))}u.isMDXComponent=!0}}]);