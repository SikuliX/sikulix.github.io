---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

## Automate what you see on a computer monitor

SikuliX is a WYSIWYS-Tool: What You See Is What You Script.

## When to use SikuliX?

- You want to automate some repetitive tasks in
daily usage of applications or web pages
- playing games
- administration of IT systems and networks

... and you do not have adequate tools at hand.

---

## What are visual workflows?

Something like that we do every day sitting in front of our PC:

- we want to achieve something
- we use an application for that (e.g. the browser to access web content)
- we click some buttons, links or other visuals
- we wait for the app to react and shows the expected result on the screen
- we fill in some text somewhere and press some functional keys like TAB or ENTER
- we wait some more for some expected reaction or result

**This is a visual workflow.**

---

## Visual Automation

So again taking the above workflow, now using SikuliX commands:

```
openApp(someApp) # we use an application someApp
click(imageButton.png) # we click some button
wait(imageExpected.png) # we wait for the app to react and show the expected result on the screen
type(“some text”); type(Key.ENTER) # we fill in some text and press ENTER
wait(imageExpected1) # again we wait for some expected reaction or result
click(…) # we click …
```

Using the **SikuliX IDE**, you can setup and maintain your visual workflows including capturing and organizing the needed images. Besides SikuliX's basic commands, you do not need any programming or scripting knowledge. Only when you would like to optimize, repeat a more than basic linear workflow, you have to dive deeper into the scripting language of your choice (currently supported in the IDE: <code>Python</code>, and <code>Ruby</code>).

---

## Visual Testing

In software testing sooner or later testers want to check some visual content against their expectation. This might be the presentation of GUI elements on the screen or the visual content of some part of the screen.

SikuliX can be integrated in various ways into such testing environments, either on the scripting level or using the Java based API (where the SikuliX features are implemented). Prominent examples for this approach are RobotFramework or Cucumber.

A combination of GUI aware tools and SikuliX already exists (e.g. together with Selenium for web apps).

:::important
- SikuliX needs a real screen running the application under test 
- or at least some equivalent virtual solution
- SikuliX is only available on PCs/Workstations running Windows, Mac or Linux
- and needs a Java version 8+
:::

---

## How SikuliX finds images on the screen

SikuliX uses the [OpenCV](http://opencv.org/) package for finding an image on the screen.

The SikuliX feature is based on OpenCV’s method <code>matchTemplate()</code>, which is rather good explained on their [example page](http://docs.opencv.org/doc/tutorials/imgproc/histograms/template_matching/template_matching.html). If you are not familiar with how it works, you should just have a look there and then come back to here and read further.

A basic feature in Sikulix is to wait for an image to appear in a given region:

```
# some top left part of the screen
aRegion = Region(0, 0, 500, 500)
# a png image file on the file system
# this is the image we want to look for in the given Region
aImage = “someImage.png”
# search and get the result
aMatch = aRegion.find(aImage)
```
The <code>matchTemplate()</code> expects an even sized or larger image (base), where the given image (target) should be searched. To prepare that, we internally make a screenshot (using Java Robot class) of the screen area defined by the given aRegion. This now is the base image and held in memory. The target image is also created as in memory image read form the image file. Both images then are converted to the needed OpenCV objects (CVMat).

Now we run the <code>matchTemplate()</code> function and get a matrix in the size of the base image, that contains for each pixel a similarity score for the target image compared pixel by pixel with it’s top left corner at this pixel location. 

Sikulix implements a still-there-feature: before searching in the search region, it is first checked, whether the image is still in the same place as at the time of the last search (if the search region contains this last match). On success, this preflight operation usually takes some milliseconds, which speeds up workflows if they contain repetitive tasks with the same images.

### Images showing up multiple times 
Not knowing the magic behind SikuliX’s search feature and the <code>matchTemplate()</code>function, people always wonder, why images showing up multiple times on the screen, are not found in some regular order (e.g. top left to bottom right). That this is not the case is caused by the implementation of the <code>matchTemplate()</code> function as some statistical numeric matrix calculations. So never expect SikuliX to return the top left appearance of a visual being more than once on the screen at time of search. The result is not predictable in this sense.

If you want to find a specific item of these multiple occurrences, you have to restrict the search region, so that only the one you are looking for is found.

For cases where this is not suitable or if you want to cycle through all appearances, we have the <code>findAll()</code> method, that returns a list of matches in decreasing result score order. You might work through this list according to their position on the screen by using their (x,y) top left corner coordinates. <code>findAll</code> internally evaluates the search result matrix, by repetitively looking for the next max value after having “switched off” some area around the last max.

---

## How SikuliX handles images

To use images with the features of SikuliX like click(someImage), you need to store these images as image files preferably in the PNG format (someImage.png) somewhere on the file system or somewhere in the internet.

An image in this sense is some rectengular pixel area taken from the screen (captured or made a screenshot - with Sikuli we use the verb capture as the process of taking the image and save it in an image file and the name screenshot for the artifact “visual object = image”).

Capturing is supported by the IDE or programmatically via the respective SikuliX features. You might use any capture tool instead to get your images (preferably in PNG format).

:::note
To load the images SikuliX has 2 principles:

- **bundle path**: the images are stored together with the script file (.py for Python, .rb for Ruby, .js for JavaScript) in a folder named someScript.sikuli, where the scriptfile must be named the same as the folder (e.g. someScript.py). This all is automatically assured, when working with the SikuliX IDE.
- **image path**: additionally SikuliX supports a list of places as an image path. Possible places are folders in the file system, folders in a jar-file and folders somewhere in the internet. There are functions available to manage your own image path. When an image has to be loaded (exception: the absolute path is given), the places are sequentially checked for the existence of the image. The first matching place wins.
:::
### Naming Scheme
It is strongly recommended, to have a naming scheme for the image files and to not rely on the basic timestamped image file naming of the SikuliX IDE, which is basically for new users with little programming experience.

It is planned to have a capturing tool as a standalone app, that supports the basic aspects of image handling:

- capture and recapture screeshots along a workflow (some kind of recorder)
- organize your image path
- organize groups of “same” images, that can be switched depending on environment aspects
- organize a group of images, that somehow relate to each other and should be found together
- organize different states of an image (e.g. selected/not selected)
- optimize screenshots to get the highest possible scores at find
---