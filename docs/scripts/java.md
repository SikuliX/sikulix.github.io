---
id: java
title: Using Java
sidebar_label: Using Java
---

## Using Java

The core of SikuliX is written in Java, which means you can use the SikuliX API as a standard JAVA library in your program.

This applies to any Java aware scripting environment like Jython, JRuby, Scala, Groovy, Clojure and more, where you write your scripts in other IDE’s and run them using the respective runtime support directly.

:::note
When using the scripting support provided by the SikuliX IDE and when running Jython/JRuby scripts from command line using SikuliX, it is automatically taken care, that a basic path is setup, where SikuliX will look for image files, that are given only by their name (no path given).

For information what you can do when using the Java API to have this convenience too, check out ```SIKULI_IMAGE_PATH```.
:::

#### 1. Include sikulixapi.jar in the CLASSPATH of your Java project.

Add sikulixapi.jar as a library reference into your project

#### 2. Import the Sikuli classes you need

ou can simply use

<code>
import org.sikuli.script.*;
</code>

or import the classes you need:

<code>
import org.sikuli.script.Screen;
</code>

In most cases, you would need at least ```Screen``` and/or ```Region```.

Other candidates are ```Pattern```, ```Match```, ```Location```, ```App``` and some more.

#### 3. Write code!

Here is a hello world example on Mac. The program clicks on the spotlight icon on the screen, waits until spotlight’s input window appears, activates it by clicking and then writes “hello world” into the field and hits ENTER.

```java

import org.sikuli.script.*;

public class TestSikuli {

        public static void main(String[] args) {
                Screen s = new Screen();
                try{
                        s.click("imgs/spotlight.png");
                        s.wait("imgs/spotlight-input.png");
                        s.click();
                        s.write("hello world#ENTER.");
                }
                catch(FindFailed e){
                        e.printStackTrace();
                }
        }

}

```