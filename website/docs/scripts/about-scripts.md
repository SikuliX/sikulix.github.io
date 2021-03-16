---
id: about-scripts
title: About Scripts
sidebar_label: About Scripts
---

## What is a SikuliX script?

It's a script that automates GUI interaction using image patterns to direct keyboard/mouse events. The core of SikuliX Script is a Java library that consists of two parts: **java.awt.Robot**, which delivers **keyboard** and **mouse** events to appropriate locations, and a C++ engine based on OpenCV, which searches given image patterns on the screen.

Example in Python language
```python
while True: # repeat the body forever
    wait("image1.png", 10) # wait max 10 seconds for image1 to get visible, otherwise die
    click("button1.png") # click the button given by image button1
    if exists("image2.png"): # wait max 3 seconds for image2 to get visible, return True or False
       doSomething() # in case True execute function doSomething (defined somewhere else)
    else:
       break # in case False get out of the loop, which ends the workflow
    # start all over with the line after the while
# the end of the workflow
```
In the IDE as standard the “foobar.png” are shown as thumbnails of the images (other options available).

To write, execute and debug SikuliX scripts you should know about the features of SikuliX and have at least a basic knowledge about the used scripting language.

A good starting point is to use the SikuliX IDE, to get used to the SikuliX features.

## SikuliX folder structure

A SikuliX script (.sikuli) is the directory that contains a Python source file (.py) representing the automation workflow or the test cases and all the image files (.png) used by the source file. All images used in a Sikuli script are simply a path to the <code>.png</code> file in the <code>.sikuli</code> bundle. 

By default the SikuliX script folder/directory gets the same name as the script, when saving it from the IDE. It is mandatory, that the contained scriptfile has the same name as the folder, this is guaranteed when saving using the SikuliX IDE. 

:::note
On Mac the folder is seen as a package/bundle, which at the top level in Finder hides the content.
:::

The folder and its content for the above example (in IDE we named it myscript)

```
myscript.sikuli
    button1.png
    image1.png
    image2.png
    myscript.py
```

---