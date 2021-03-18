---
id: installation
title: Installing SikuliX
sidebar_label: Installing SikuliX
---

## System Requirements 

:::note
- Sikulix only supports 64-bit systems.
- Realscreen needed to run.
- Maching is not usable in parallel while running SikuliX.
:::

To use the SikuliX features you need a valid Java runtime installation of at least version 8 (OpenJDK or Oracle JRE/JDK). Java 9+ is supported (developement is done on OpenJDK).

### Check your Java version

On a command line enter

```
java -version
```

SikuliX is a Java based application or library. Hence the usable artifacts are delivered as jar-files.

The Sikulix artefacts <code>sikulix.jar</code> and/or <code>sikulixapi.jar</code> can be moved around as needed (it is recommended to have in one place to avoid update/upgrade problems). Everything else SikuliX needs during runtime is stored either in the system’s temp space or in a special system specific area in the user’s home space. Missing or outdated things in these areas are created/recreated at runtime by SikuliX automatically (means: you can delete everything at any time, as long as you keep the jars).

---

## Installing on Windows

The IDE is only available as jar-file, that can be double-clicked to start it.

Usage in a command window: 

```
java -jar <path-to>/sikulix.jar 
```

The <code>SikulixAppData</code> is stored in the folder Sikulix inside the folder the environment variable <code>%APPDATA%</code> points to.

Besides Java there are no prerequisites. All native libraries are bundled in the jar-files and exported at runtime as needed.

---

## Installing on MacOS

### Java

You need a valid Java 64-Bit installation (recommended Java 13), but it must be at least Java 8.

We recommend using OpenJDK, which is the new base for usages in private or non commercial environments.
Any Oracle JRE/JDK 8+ should work also.

Make this test in a Terminal: 

```
java -version
```

which should show something like:

```
openjdk version "13.0.1" 2019-10-15
OpenJDK Runtime Environment (build 13.0.1+9)
OpenJDK 64-Bit Server VM (build 13.0.1+9, mixed mode, sharing)
```
If it does not work

### OpenCV image search

The OpenCV native libraries are needed for SikuliX's image search and other features.

:::note
**Up to SikuliX version 2.0.x:**
there is nothing to do for you, since the libraries (OpenCV version 3.4.2) are bundled with SikuliX and exported automatically for usage at runtime.

**For SikuliX version 2.1.x and higher:**
you have to create a valid OpenCV installation before you can use SikuliX with all its features.
:::

If this is not done before the first use of SikuliX, in case it will terminate abnormally and present information, what has to be done.
, follow these steps, to make a Java OpenJDK ready on your system:

- download the package macOS / x64 tar.gz from jdk.java.net
- unzip/untar (right click and open with standard app)
you get a folder like <code>jdk-13.0.1.jdk</code>
- move this folder to the system folder <code>/Library/Java/JavaVirtualMachines/</code>
- the above test should now work
... or use any other workflow, that leads to a valid Java 8+ installation and lets you successfully run <code>java -version</code>.

:::tip
Recommendation: install [Homebrew](https://brew.sh/) as package manager, which should not make any problems on recent macOS versions (tested with success on macOS 10.13+).
:::

Get the OpenCV package installation by just running this in a Terminal window:

```
brew install opencv
```

After successful installation of opencv, try again with SikuliX.

This might work as well with other package managers like MacPorts, Finch, ..., but is not tested.

### Tesseract OCR and text

If you want to use these features, you have to make the Tesseract libraries ready.

If you have tried to use one of the SikuliX OCR features and got an error telling you, that the library libtesseract is missing.

The reason is: The native libraries of the Tesseract package are only bundled with SikuliX for Windows, but have to be installed on macOS and Linux by the SikuliX user himself.

#### Tesseract for macOS

The recommendation is to install Homebrew as package manager, which should not make any problems on recent macOS versions.

Get the Tesseract installation by just running this in a Terminal window:

```
brew install tesseract
```

After successful installation of Tesseract run this in a terminal window

```
tesseract -v
```

#### Start SikuliX from Terminal window by runnnig: 

```
java -jar <path-to>/sikulix.jar
```
The <code>SikulixAppData</code> folder is here <code>~/Library/Application Support/Sikulix</code>

---

## Installing on Linux

### Java

You need a Java JDK version 8 or later.

Download the SikuliX IDE jar from the SikuliX [Download](https://raiman.github.io/SikuliX1/downloads.html) page and put it in your home folder.

**On Linux Systems SikuliX cannot be used out of the box.**

First we need <code>OpenCV</code> and <code>Tesseract</code> then <code>wmctrl</code> and <code>xdotool</code>, when using the <code>App class</code> features.

Try to run it in a Terminal Window after navigating to folder:

```
<home>/jdk11/bin/java -jar sikulix.jar -v
```

The parameter <code>-v</code> gives full debug output from the very beginning - hence keep it until everything works.

You might get the following error

```
Gtk-Message: 11:28:51.117: Failed to load module “canberra-gtk-module”
```

Solution enter the follwing: 

```
sudo apt install libcanberra-gtk0 libcanberra-gtk-module
```

You might get the following error

```
Assistive technology not found AWTError
```

look [here](https://askubuntu.com/questions/695560/assistive-technology-not-found-awterror) for possible solutions.

:::important
Special information on the bundled libJXGrabKey.so

At least on newer Ubuntu versions ldd -r reports unresolved symbols pthread… It seems, that this can be ignored, since JXGrabKey works. If you get problems, that are related to JXGrabKey, you might have to build from the sources and provide the ready built library in the ~/.Sikulix/SikulixLibs folder.
:::

### OpenCV support

SikuliX needs access to the OpenCV Java/JNI bindings (an OpenCV native library named <code>libopencv_javaXYZ.so</code>, where XYZ is a shortcut for the version like 320 or 341).

On Debian systems (like Ubuntu) you should get it with the apt-tool, on other Linux systems you might get it with their package-tool. In any case it is possible, to create it from the sources (see below).

Generally needed:

A link (<code>ln -s ...</code>) as <code>libopencv_java.so</code> in any folder, that is on the library path (e.g. on Ubuntu: /usr/lib), to the real library module <code>libopencv_javaXYZ.so</code>

should work on Ubuntu 18.04 (or other actual Debian systems):

```
sudo apt install libopencv3.2-java
sudo ln -s /usr/lib/jni/libopencv_java320.so /usr/lib/libopencv_java.so
```

A <code>libopencv_java320.so</code> will be in <code>/usr/lib/jni</code>, to where you have to symbolical link <code>libopencv_java.so</code>. On Ubuntu the best place seems to be <code>/usr/lib</code>, but that is up to you, as long as the containing folder is in the current lib path at runtime.

**Build OpenCV library from the sources (might be needed on non-Debian Linux)**

Get a source package (recommended: 3.4+) and unzip/untar it to a work folder of your choice.

In a terminal session go into the OpenCV folder and make a folder build at the top level. Finally go into that build folder

All the following steps have to be done being inside this build folder.

There are some general prerequisites for the build process to work, that you have to fulfill either before you start or solve it every time you run into a problem. On Ubuntu, the usual way is to use the apt-tool.

You need: <code>cmake</code>, <code>ant</code>, <code>build-tools</code>, <code>Python (2.7 or 3.x)</code> and a <code>Java JDK</code>

All prerequisites must be available/accessible in the standard environment.

In the build folder run the build setup:

```
cmake ..
```

As a result you will get some output, which tells you, wether you will have a chance to get a valid <code>libopencv_javaXYZ.so</code>

- <code>Built as dynamic libs</code>: you will have to install the built stuff to your system in a second step.
- <code>OpenCV modules</code>: the list in the line after <code>To be built</code> MUST contain <code>java</code>. - at least core features2d flann imgcodecs imgproc highgui must be there
- <code>Media I/O</code>: at least ZLib, JPEG and PNG must show a valid entry
- <code>Python</code> (for build): must show a valid Python runner
- <code>Java</code>: <code>ant</code> and <code>JNI</code> must show valid entries
- <code>Install to</code>: must make sense

If one or more of the mentioned entries are odd, you have to debug for the reason ;-)

Common problems are (if java is not mentioned in the line To be built), that Python is not available and a valid JDK is not found in the environment.

The usual way to solve the problems is to install the relevant packages.

Each time you fixed something simply run <code>cmake ..</code> again.

If you made any changes to <code>CMakeCache.txt</code> just run <code>cmake ..</code> again.

When you are finally satisfied with the result, just run:

```
make install
```

This will install the stuff into your system (will take some minutes to complete). Be sure, that you have a success: no errors are shown.

As a last step you need to find the installed <code>libopencv_javaXYZ.so</code> and as mentioned above create a symbolic link, that is found in the library path.

### Tesseract support

Make sure, to have a version 4.x <code>libtesseract....so</code> is available on your system.

You should first try with your package manager.

To test, what you have on your system, run this:

```
tesseract -v
```

If anything looks odd, then you have to dive into the gory details.

The following bash snippet will let you launch SikuliX ...

```
#!/bin/bash
#
    PROG_PATH="/opt/dev/sikulix/home"
    export JAVA_HOME="/opt/lib/java/jre/${JDK_08}"
#
#   ------------------------------------
#
##  echo  "nohup  java -jar \"${PROG_PATH}/sikulixide-2.0.3.jar\""   "${@}"  "  > /dev/null "
    nohup  java -jar "${PROG_PATH}/sikulixide-2.0.3.jar"  "${@}"    > /dev/null  2>&1  &
#
#   ------------------------------------
exit 0
```

Put your own paths and correct versions to point to where you have unzipped SikuliX and where you keep your other files.

Any paths names or environment variables needed (say a Python path) should be exported inside the script before SikuliX starts.

The line beginning <code>nohup ...</code> launches your process in the background. You can keep using the terminal or launch this script with a <code>.Desktop</code> file. I use "${JDK_08}" to be a specific Java release. If things go wrong comment-out the "<code> > /def/null</code>" part.

---