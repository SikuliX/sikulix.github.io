(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(116)),l={id:"running-scripts",title:"Running Scripts",sidebar_label:"Running Scripts"},c={unversionedId:"scripts/running-scripts",id:"scripts/running-scripts",isDocsHomePage:!1,title:"Running Scripts",description:"Where and how can a SikuliX script be stored",source:"@site/docs/scripts/running-scripts.md",slug:"/scripts/running-scripts",permalink:"/docs/scripts/running-scripts",editUrl:"https://github.com/SikuliX/sikulix.github.io/edit/master/docs/docs/scripts/running-scripts.md",version:"current",sidebar_label:"Running Scripts",sidebar:"docs",previous:{title:"About Scripts",permalink:"/docs/scripts/about-scripts"},next:{title:"Using Python",permalink:"/docs/scripts/python"}},s=[{value:"Where and how can a SikuliX script be stored",id:"where-and-how-can-a-sikulix-script-be-stored",children:[]},{value:"How to run a SikuliX script",id:"how-to-run-a-sikulix-script",children:[]}],o={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"where-and-how-can-a-sikulix-script-be-stored"},"Where and how can a SikuliX script be stored"),Object(a.b)("p",null,"When you need to distribute your SikuliX scripts you have two options: ",Object(a.b)("code",null,"zip-file")," and ",Object(a.b)("code",null,"jar-file"),", both variants pack the SikuliX script content in one file, which makes distribution easier. Both can run with SikuliX."),Object(a.b)("p",null,"The jar-file variant has an option to be packed together with the scripting and SikuliX feature support (self contained), so it might be run on systems only having a valid Java installation."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("h4",{parentName:"li",id:"variant-zip-file"},"variant zip-file"))),Object(a.b)("p",null,"It can be created in the SikuliX IDE with the file menu entry \u201cExport packed source\u201d and gets the ending .skl instead of .sikuli. As such it cannot be reopened for editing nor used for import, it can only be run using SikuliX features on systems having a valid SikuliX setup. In fact it is simply a zip-file, which can be brought back to a .sikuli folder using a zip utility. So be aware, that this variant does not really hide your script content."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("h4",{parentName:"li",id:"variant-jar-file"},"variant jar-file"))),Object(a.b)("p",null,"It can be created in the SikuliX IDE (file menu entry \u201cExport as jar\u201d). It can be run using SikuliX features on systems having a valid SikuliX setup. The script source is contained in compiled form (Java byte code) and hence not visible, even if one accesses the jar content. So this variant gives some level of secrecy for your scripted workflow."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"how-to-run-a-sikulix-script"},"How to run a SikuliX script"),Object(a.b)("p",null,"You can run scripts by simply clicking run from the IDE or using the command line to run saved scripts (.sikuli) and exported scripts (.skl and .jar).  "),Object(a.b)("p",null,"You may also call/run scripts from a script that is currently running, which saves the startup time for the called script and keeps available the original parameters given and the current image path."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"runScript(script_path, *parameter)")),Object(a.b)("p",null,"Runs the script found at the given script-path handing over the given parameters in sys.argv","[1+]",". The called script has it\u2019s own bundle path, but the current image path. On exit the bundle path of the calling script is restored."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Param:\t`",Object(a.b)("inlineCode",{parentName:"li"},"script_path"),": a path to a script folder (rules see below)"),Object(a.b)("li",{parentName:"ul"},"Param:\t",Object(a.b)("inlineCode",{parentName:"li"},"parameter"),": one or more parameters seperated by comma"),Object(a.b)("li",{parentName:"ul"},"Returns:\tthe return code that the called script has given with exit(n) (exception: n = 1 - see note)")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If the called script runs into an exception (e.g. FindFailed), that is not catched internally, the exception info is logged as ","[error]"," messages and the returned value is set to 1. To sort it out, the called script should use exit(0) (which is the default) on success and use exit(n) with n > 1, to signal other cases to the calling script. ",Object(a.b)("strong",{parentName:"p"},"Do not use values < 0"),"."))),Object(a.b)("p",null,"An example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'exitValue = runScript(whatever)\nif exitValue > 1:\n   print "there was a special case"\nelif exitValue == 1:\n   print "there was an exception"\nelse:\n   print "ran with success"\nexit(exitValue)\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Make sure"),": each parameter MUST be a simple string."),Object(a.b)("h4",{id:"rules-for-the-given-script_path"},"Rules for the given script_path"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"absolute path to a folder in the file system"),Object(a.b)("li",{parentName:"ul"},"relative path to a folder taken as relative to the working folder"),Object(a.b)("li",{parentName:"ul"},"the path spec can contain leading or intermediate ../"),Object(a.b)("li",{parentName:"ul"},"a path preceded by ./ means the same folder, that the calling script is located"),Object(a.b)("li",{parentName:"ul"},"a pointer to a folder in the HTTP net"),Object(a.b)("li",{parentName:"ul"},"in any case .sikuli can be omitted"),Object(a.b)("li",{parentName:"ul"},"if it is a .skl, then it must be noted as script.skl")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Special usage notes for scripts located in the net")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"must be accessible via HTTP"),Object(a.b)("li",{parentName:"ul"},"where location is to the folder containing the script file (Python, Ruby or JavaScript) and the images (no .sikuli appended!)"),Object(a.b)("li",{parentName:"ul"},"The contained script file must have the same name as the script folder and a suffix",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"for JavaScript ",Object(a.b)("inlineCode",{parentName:"li"},".js")),Object(a.b)("li",{parentName:"ul"},"for Python `",Object(a.b)("inlineCode",{parentName:"li"},".py.txt")),Object(a.b)("li",{parentName:"ul"},"for Ruby ",Object(a.b)("inlineCode",{parentName:"li"},".rb.txt")),Object(a.b)("li",{parentName:"ul"},"the ",Object(a.b)("inlineCode",{parentName:"li"},".txt")," suffixes are necessary, to avoid download problems")))),Object(a.b)("p",null,"This feature allows to create a main script, that contains a row of ",Object(a.b)("inlineCode",{parentName:"p"},"runScript()")," commands, thus running these scripts one after the other in the same context (no startup delay). Using the return codes and the parameters allows to create medium complex workflows based on smaller reuseable entities."),Object(a.b)("h4",{id:"running-snippets"},"Running snippets"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"runScript(snippet)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Param"),":\tsnippet: a string containing the scripting statements after the word identifying the script type"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),":\tthe return code that was returned by the interpreter running this snippet")),Object(a.b)("p",null,"Currently available:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AppleScript on Mac (script type word: applescript)"),Object(a.b)("li",{parentName:"ul"},"PowerShell on Windows (script type word: powershell)")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example for Applescript"),":"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"returnCode = runScript('applescript tell application \"Mail\" to activate')")),Object(a.b)("p",null,"or like this for a multiline snippet:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'cmd = """\napplescript\ntell application "Mail" to activate\ndisplay alert "Mail should be visible now"\n"""\nreturnCode = runScript(cmd)\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example for PowerShell"),":"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"returnCode = runScript('powershell get-process')")),Object(a.b)("p",null,"or like this for a multiline snippet:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'cmd = """\npowershell\nget-process\n"""\nreturnCode = runScript(cmd)\n')),Object(a.b)("p",null,"If the snippet produces some output on stdout and/or stderror, this is accessible after return using:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"commandOutput = RunTime.get().getLastCommandResult()")),Object(a.b)("hr",null))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(h,c(c({ref:t},o),{},{components:n})):r.a.createElement(h,c({ref:t},o))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<a;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);