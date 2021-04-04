---
id: faq
title: FAQ
sidebar_label: FAQ
---

## What's the difference between Sikuli & SikuliX?

``Sikuli`` started in 2009 as an open-source research project at the [User Interface Design Group](http://up.csail.mit.edu/) at [MIT](https://www.csail.mit.edu/).

When [Tsung-Hsiang Chang](https://github.com/vgod) and [Tom Yeh](https://github.com/doubleshow) left the project during 2012, [Raiman](https://github.com/RaiMan/) started adding features, enhancing and supporting the new ``SikuliX`` since then.

## Can I run SikuliX without a Screen?

The system running ``SikuliX`` scripts or any apps using ``SikuliX`` features must have a real screen connected. So called headless systems are not supported (Java restriction). While using ``SikuliX`` features, the screen should not be in sleep mode nor show a screen saver. 

## Can I use my machine while SikuliX is running?

While running ``SikuliX`` scripts or any apps using ``SikuliX`` features on a system, usually one cannot work on this system in parallel, not even on another monitor, since normally ``SikuliX`` will "use" mouse and/or keyboard and watches the screen according to the running ``SikuliX`` workflow. User actions on this system will normally corrupt the ``SikuliX`` workflow, except this is intended and supported by the workflow.

## Do I need to script in Java?

You can write your SikuliX scripts in any of ``Js``, ``Python(Jython)`` or ``Ruby``.