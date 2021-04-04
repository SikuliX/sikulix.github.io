---
id: python
title: Using Python
sidebar_label: Using Python
---

## Using Python (with Jython)

Out of the box, SikuliX can be setup with a Jython standalone package, which then is only available to SikuliX to run scripts in SikuliX IDE or from commandline using SikuliX.

If you want to use the Jython REPL (interactive commandline) or another IDE like PyCharm, you have to install Jython seperately. In this case no need to have the Jython standalone package, but you can tell SikuliX to use your installed Jython environment.

:::important
MANDATORY: use Jython +2.7.1
:::

Make sure you have a valid Java installation (version 8+)

:::note
For Mac OSX incase of getting a ValueError: unknown locale: UTF-8, then make sure, that your environment at runtime of Jython contains these 2 entries:
- LC_ALL=en_US.UTF-8
- LANG=en_US.UTF-8
:::

#### Apply the following steps, to get a Jython environment, that can be used with SikuliX:
- Download the installer package from Jython 2.7.1 Installer
- install (usually by double-clicking the package) using the standard setup into an empty folder
test by running ``<jython-folder>/bin/jython`` from a commandline, which should open an interactive Jython session, that allows, to run Python statements line by line
make sure, that pip and easy_install are available:
    - ``<jython-folder>/bin/pip`` exists
    - ``<jython-folder>/bin/easy_install`` exists
    - if this is not the case run ``<jython-folder>/bin/jython -m ensurepip`` on a commandline and check again
    - if you do use pip, don’t worry: Jython is useable without it. The caveat: any additional packages have to be installed/setup manually.

Additional stuff, if you succeeded with pip:

- run ``<jython-folder>/bin/pip install jip`` to install the package <code>jip</code>, which allows to add Java libraries easily to your Jython environment
- add any needed Python package (must not depend on C-based stuff) using <code>pip</code>, <code>easy-install</code>

or manual methods into ``<jython-folder>/Lib/site-packages`` and/or use <code>jip</code> for adding Java libraries preferably from Maven Central

## Jython from commandline or in a Python IDE

You can run SikuliX scripts using ``<path-to-jython>/bin/jython <path-to-youNameIt.sikuli>/youNameIt.py``.

In a Python IDE you have to setup your project according to the rules.

Prereqisites:
- <code>sikulixapi.jar</code> (NOT sikulix.jar!) must be on the Java classpath at runtime. This can be achieved using one of the methods that come with Jython or the IDE.
- Access the images with <code>ImagePath</code>: using <code>setBundlePath()</code> and <code>add()</code>

If this case is planned to be your main usage, you should decide to use plain <code>.py</code> files according to the Python script/module rules and the <code>ImagePath</code> features to acces your images.

You can use the SikuliX IDE to capture your images even in plain <code>.py</code> files (see plain .py in IDE).

If you want to run scripts from within the SikuliX IDE or from commandline using SikuliX, just open and run the main script unchanged (see plain .py in IDE).

## Jython from SikuliX

You have to tell SikuliX about your installed Jython by using the Extensions feature:

- start the IDE once and ignore all error messages and close it again
- in the <code>SikuliX-APP-DATA-folder</code> go to the folder <code>Extensions</code>
- edit the file <code>extensions.txt</code> to point to your Jython install
- start the IDE again - you should get to the normal state (a tab Untitled with type jython)

## Running python packages from SikuliX

The following approaches apply to situations, where you want to use Python modules installed somewhere on your system, without the need to manipulate sys.path, meaning, that when using ìmport moduleXYZ this package is found automatically.

SikuliX uses a central repository (SikulixRepo in the following) for internal stuff (native libraries, downloaded artifacts, resources needed at runtime and simailar things). This is a folder in the user’s private space (home folder) look here:

- Windows: ```%APPDATA%\Sikulix```
- Mac: ```~/Library/Application Support/Sikulix```
- Linux: ```~/.Sikulix```

#### Basic preparation
In ```SikulixRepo``` add a folder ```Lib``` and inside add ```site-packages``` (usually already there)

##### Approach 1
Any existing folder ```SikulixRepo/Lib/site-packages``` will be added automatically as the first entry to sys.path, modules/packages contained in here will be found and imported. This approach can be used, to “overwrite” modules/packages, that otherwise would be found elsewhere on ```sys.path``` (e.g. for testing)

##### Approach 2
In the folder ```SikulixRepo/Lib/site-packages``` have a file ```sites.txt```, that contains absolute paths one per line, that point to other places, where modules packages can be found. These paths will be added automatically at startup to the end of ```sys.path``` in the given sequence.

#### Preparing your own Jar files in the Jython environment 

You might prepare jar files containing Python scripts/modules/packages, Java classes and other stuff like images, that are intended to be used in the scripting context.

##### possible use cases

- Packing scripts together with other resources into a container ready to be used by yourself or others via import (which is not supported by the .skl packaging method).
- Securing script code against modifications by others, that use your distributed jar.

typical jar file structure:

<code>
-- jar rootlevel
module1.py    # Python module
module2.py
- folder1     # Python package
  __init__.py
  stuff1.py
  stuff2.py
- images      # image folder
  img1.png
  img2.png
- org         # Java package
  - mystuff
    class1.class
    class1.class
</code>

##### Packing the Jar

This can be done by either Java ````jar utility``` (contained in the JDK).

Or use the SikuliX provided feature ```Sikulix.buildJarFromFolder```(```jarpath```, ```folder```), where jarpath is the absolute path to the jar (the parent folder must exist, the jar is overwritten), that should be created and folder is the absolute path to a folder, containing the stuff to be packed. The content of the folder is copied to the root of the created jar.

Just run ```Sikulix.buildJarFromFolder```(```jarpath```, ```folder```) in an empty tab in the IDE or in a script, that might do some pre- and/or postprocessing.

If the folder contains an ```__init__.py``` on the first level, the given folder is taken as a Python package and as such copied to the root level of the jar, to preserve the package context:

```code
-- packagefolder
  __init__.py
  stuff.py
```

becomes a jar

```code
-- jar rootlevel
- packagefolder
  __init__.py
  stuff.py
```

Run in an empty IDE tab or as part of a script:

```Sikulix.compileJythonFolder```(```sourcefolder```, ```targetfolder```)

copies the complete content from sourcefolder to targetfolder (the parent folder must exist, the folder is emptied if exists) and then traverses the targetfolder replacing each ```foobar.py``` with it’s compiled version foobar$py.class, that contains JVM-byte-code, so your script code cannot be edited anymore in this targetfolder, but still be used with import foobar.

:::note
Be sure, your code compiles without errors, because the compile feature either succeeds or fails (compile errors), but you will not get any information about the cause or even the place of the compile problem.
:::

Secure your script code using the jar packaging

- Step 1: prepare a folder
- Step 2: compile the folder into a new folder
- Step 3: pack the new folder into a jar for distribution

## Using IntelliJ PyCharm and IDEA

:::important
- you will not see any image thumbnails as in the SikuliX IDE
- capturing of your images has to be done with the SikuliX IDE separately into special image scripts/folders, that have to be applied to your scripts using the ImagePath features
- code completion will not work, since most features are at the Java level and the undotted Region/Screen funtions (find, click, …) are only created dynamically at runtime of the script and hence not accessible in the static editor environment
:::

PyCharm has a weakness, in that code completion while editing does not look into jar-files nor Java classes, while in the built-in Python console after having imported a Java class, code completion about the class attributes/methods works, so having a console open while editing might help as a workaround for inspecting Java classes.

IntelliJ IDEA with Python plugin supports complete code completion (while editing and in console) including Java classes, but is a bit more complex to setup and use with just Python.

If you are more used to Eclipse, the Eclipse PyDev might be your choice for Python development. The steps to get it running for use with SikuliX are similar to the following steps for PyCharm. 

#### Step 1: get Jython up and running

Just follow the steps mentioned in Setting up your Jython environment above.

#### Step 2: get PyCharm up and running

Download and install the PyCharm Community Edition.

#### Step 3a: tell PyCharm to use Jython as interpreter

Start PyCharm and make sure to have closed all projects and be in the start-up window titled Welcome to PyCharm.

At bottom right in the menu Configure select Preferences. You should get a dialog window titled Default Preferences.

At the left side select Project Interpreter and choose your installed Jython by pointing to the contained ```.../bin/jython script/command-file```.

Click Apply and watch how the Jython setup is analyzed and implemented in PyCharm. If it worked click Ok.

#### Step 3b: tell PyCharm to use Python as interpreter

With respect to SikuliX features used in Python scripts look here for details.

#### Step 4: setup the environment for a SikuliX-aware Python console

As with the step before get the Default Preferences dialog open.

At the left side select Build, Execution, Deployment… Console… Python Console.

To the Environment variables add antry ```CLASSPATH```, that points to a valid ```sikulixapi.jar```.

In the Starting script you might add the line <code>` from sikuli import * `</code> so each time you start a console, the prompt is already prepared to know about SikuliX features.