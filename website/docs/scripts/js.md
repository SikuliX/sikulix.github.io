---
id: js
title: Using JS
sidebar_label: Using JS
---

## Using JavaScript

You can use JavaScript for scripting with SikuliX features.

:::note
Since Java 11 Nashorn is marked deprecated and might be removed in a future Java version. With Java 13 (available September 2019) it is still there and hence will be there till September 2020.
:::

The easiest approach for JavaScript scripting:

Switch a new editor tab in the IDE to type JavaScript (rigt-click on an empty Tab, select Set Type in the context menü and then select javascript from the drop down list).

The bottom status line at the right side now will show (javascript)
now you can write JavaScript code according to the specifications of the Java bundled JavaScript interpreter (Nashorn since Java 1.7).

before running the script the first time, you have to save it.

Example:

```js
Debug.user("hello from JavaScript");
var img = "img.png";
hover(img); // uses Screen(0) like in Python
var scr = new Screen();
print(scr);
scr.hover(img); // uses the Region scr
```

The SikuliX features in general have to be used like in Java programming.

- All classes from ``org.sikuli.script`` are known (pre-imported).
- ``Debug`` and ``Settings`` are also known.

the following undotted methods work on Screen(0):

```wait```, ``waitVanish``, ``exists``, ``click``, ``doubleClick``, ``rightClick``, ``hover``

and you have undotted: 

``type``, ``write``, ``paste``, ``run``

:::important
FindFailed is not thrown! internally returns null!
If you want to catch exceptions, you have to use the dotted methods.
:::

---
