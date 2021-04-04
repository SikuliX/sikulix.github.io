---
id: ide
title: About the IDE
sidebar_label: About the IDE 
---

SikuliX now has a basic implementation of a globel options repository, that is recognized and loaded at startup time (IDE and API usage). At runtime, this options store can be accessed to get and set values. Persistence (save) and merge of additional options files is not yet supported.

At startup these places are searched for a file SikulixOptions.txt (first appearence wins):
- the working folder
- the user’s home folder
- the folder ``SikulixStore``

**Special options defined in the ``Settings`` class**

any ``Settings.option = value`` will overwrite the existing option value in the ``Settings`` class at startup

Other Options globally recognized and processed on startup

- ``Debug.level = n``

    preferably n as 3, debug information produced from beginning of startup

- ``Settings.OverwriteImages = yes``

    when saving images in the IDE, usually when using a name, that already exists, this is not overwritten, but stored with a name having a suffix -n appended. With this option switched on (default is off) naming images with an existing name will replace the image file without notice.

- ``classpath = list of absolute-paths``

    will be added to the end of the classpath in the given sequence. Rules are the same as for Java classpath on that system. On Windows backslashes have to be doubled (escaped).

#### Run only parts of a script

(Only available for Jython scripting)

By right-clicking on a line number the pop-up context menu lets you

- run only the line at this line number
- run the script from beginning up to and including this line
- run the script from this line to the end
- run the snippet in the current selection or this line if nothing is selected

The Run menu now contains the entry ``Run`` selection ``SHIFT-CTRL``/``CMD-R``, that also runs the current selection or the line at the caret, if nothing is selected (advantage: the available shortcut, which saves additional mouse actions)

:::note
For Jython: If the first line of a selection has an indent, ``if True:`` is added as first line, to make the snippet runnable
:::

This feature might be a neat replacement for the no longer available interactive mode from commandline.

#### Plain Python scripts

It is now possible, to work with plain Python files in the IDE, which allows to directly support the classic Python style of scripts and folder structures (modules).

- Open and save ``.py`` files
- Image handling in the ``.py`` context
- Running ``.py`` files

#### Text files

Special Sikulix text files:

- ``SikulixOptions.txt``
- ``extensions.txt``
- ``sites.txt``