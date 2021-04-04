---
id: other
title: Other Languages
sidebar_label: Other Languages
---

## About other programming or scripting languages

## JavaScript
The support for JavaScript is based on the Java integrated engine Nashorn (available since Java 7).

:::note
Since Java 11 Nashorn is marked deprecated and might be removed in a future Java version. With Java 13 (available September 2019) it is still there and hence will be there till September 2020.
:::

A candidate to be used with SikuliX and JavaScript scripting in the future will be the GraalVM package. People who try already now with SikuliX 2.0.4+ are welcome to give feedback about their experiences on GitHub.

The easiest approach for JavaScript scripting:
- switch a new editor tab in the IDE to type JavaScript (rigt-click on an empty Tab, select Set Type in the context menü and then select javascript from the drop down list).
- The bottom status line at the right side now will show (javascript)
- now you can write JavaScript code according to the specifications of the Java bundled JavaScript interpreter (Nashorn since Java 1.7).
- before running the script the first time, you have to save it

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
- All classes from ```org.sikuli.script``` are known (pre-imported).
- ```Debug``` and ```Settings``` are also known.

the following undotted methods work on Screen(0):

<code>
wait, waitVanish, exists, click, doubleClick, rightClick, hover
</code>

and you have undotted:

<code>
type, write, paste, run
</code>

:::note
```FindFailed``` is not thrown! internally returns null!
If you want to catch exceptions, you have to use the dotted methods.
:::

## RobotFramework

Running Robot scripts work out of the box in the Sikulix context (IDE or from commandline). The needed Python module robot ( from ```robotframework 3.0``` ) is bundled with the ```sikulixapi.jar```. At runtime and already with setup, the module is exported to the folder ```<SikulixAppData>/Lib```, which is on ```sys.path``` automatically. So there is no need to have anything else available than a suitable setup of SikuliX.

The easiest way is to use the SikuliX IDE with this principal setup

```code

runScript("""
robot
*** Variables ***
${USERNAME}               demo
${PASSWORD}               mode
${TESTSITE}               http://test.sikuli.de
*** Settings ***
Library           ./inline/LoginLibrary
Test Setup        start firefox and goto testsite    ${TESTSITE}
Test Teardown     stop firefox
*** Test Cases ***
User can log in with correct user and password
    Attempt to Login with Credentials    ${USERNAME}    ${PASSWORD}
    Status Should Be    Accepted
User cannot log in with invalid user or bad password
    Attempt to Login with Credentials    betty    wrong
    Status Should Be    Denied
""")

class LoginLibrary(object):
  def start_firefox_and_goto_testsite(self, page):
    popup("start_firefox_and_goto_testsite")
  def stop_firefox(self):
    popup("stop_firefox")
  def attempt_to_login_with_credentials(self, username, password):
    popup("attempt_to_login_with_credentials")
  def status_should_be(self, expected):
    popup("status_should_be")

```

the first 2 lines, signal, that you want to run an inline Robot script, that follows on the next lines terminated by ```"""```). This construct is a multiline Python comment, that can be used as a string.

:::note
A report HTML will be automatically opened in the standard browser at termination. If you do not wnat that (e.g. in unattended situations) use this instaed as the first 2 lines. Take care: after robot 1 space, a linefeed directly after silent and nothing else.
:::

Example

```code
runScript("""
robot silent
```
Normally when working with SikuliX features, you have to do some Robot Keyword implementation at the Python level. To Robot you tell where to find these implementation using the ```Library``` setting.

In this case we have the implementations inline in the same scriptfile according to the Robot rules packed into a Python class having the Keyword methods according to the Robot naming conventions. At runtime this class will be exported to a Python file, whose absolute path is then replacing the ```Library``` setting.

If you have the Keyword implementations somewhere outside, then you have to put the correct path specification into the ```Library``` setting. Another option is to reference a jar file as a ```Library``` again according to the Robot specifications.

If you now run the script in the IDE, internally a ```robot.run``` will be fired after having setup the script content and the environment. Currently no extra options can be provided for the robot run. As a result you get a folder with the ending ```.robot``` named as your script in the same folder as your script folder containing inputs to and the results from the robot run

```code
# supposing the script is named testrobot.sikuli
# then you get a folder testrobot.sikuli.robot with the content
testrobot.robot # the robot script
LoginLibrary.py # the Python Keyword implementations
# the standard Robot outcome
output.xml
log.html
report.html
```

Another possible setup in the IDE would be this way:

```code
robotScript = """
robot
*** Variables ***
${USERNAME}               demo
${PASSWORD}               mode
${TESTSITE}               http://test.sikuli.de
*** Settings ***
Library           /some/path/to/LoginLibrary.py
Test Setup        start firefox and goto testsite    ${TESTSITE}
Test Teardown     stop firefox
*** Test Cases ***
User can log in with correct user and password
    Attempt to Login with Credentials    ${USERNAME}    ${PASSWORD}
    Status Should Be    Accepted
User cannot log in with invalid user or bad password
    Attempt to Login with Credentials    betty    wrong
    Status Should Be    Denied
"""

# here you could do some preprocessing and even modify the above robotscript

runScript(robotscript)

# eventually do something with the result
```

:::important
The ```Name``` in the file name ```Name.py``` and the statement ```class Name()``` must be the same and start with an uppercase letter.
:::

:::important
The file path must be escaped with 4 backslashes for each backslash like so ```C:\\\\Robot\\\\Libraries\\\\Name.py``` (which leads to the needed 2 backslashes for each backslash as escape in the final robot file)
:::

Of course you can use any other method, to fill a string representing a valid Robot script, provided the first line contains the string ```robot``` and only that (denoting the script type for runScript).

If in such a case you want to provide an inline Keyword implementation: this does the trick:

```code
# prepare your script content
runScript("robot\n" + scriptContent)
# eventually do something with the result

# """)

# the rest is taken as inline Keyword implementation
```
If you have the need to specify extra parameters to the ```robot.run()```, then you still have the option to stay within the SikuliX context (IDE or from commandline):

```code
prepareRobot() # takes care for the correct environment

workdir = getParentFolder()
script = "arobottest/arobottest.robot"
robotscript = os.path.join(workdir, script)

print "*** trying to run:", robotscript
robot.run(robotscript, outputdir=workdir)
```

A library .py file being either in the script folder itself or in the folder containing the script folder is found automatically. So simply the library name is enough in this case. In all other cases you either have to specify the absolute path off the .py script (take care with windows - see above) or use ```addImportPath()``` to add the folder containing the library .py file to sys.path, in which case again only the name is sufficient in the Robot script.

It is strongly recommended, to always specify the ```outputdir= parameter``` since otherwise the reportfiles will be written to the working folder (from where you are running), which might not always be what you want.

If you want to use any of these variants outside the SikuliX context (some external Jython or in an IDE like PyCharm) you have to add these 2 lines at the beginning of your main script (as always in such cases):

```code
import org.sikuli.script.SikulixForJython
from sikuli import *
```
to get the SikuliX context ready.