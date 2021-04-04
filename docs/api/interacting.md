---
id: interacting
title: Screen Interaction
sidebar_label: Screen Interaction
---

## User and App interaction

In the standard the following dialog boxes are shown in the middle of the screen, where SikuliX (IDE or from commandline) is running (usually the primary screen).

### PopUps and input dialogs

If you want the dialog to appear in a special location on the screen (even on other screens in multimonitor situations), you can use the function ``popat()`` to define this location. The dialog will be positioned here with the center of its dialog panel. Be aware, that locations near the edge of the screen might make parts of the dialog not accessible (this is not checked). This location will stay in effect until changed by another use of ``popat()``. A ``popat()`` without parameters will reset it to the standard (center of primary screen).

**popat(x, y)**
**popat(location)**
**popat(region)**
**popat()**
Define the location, where the center of popup dialogs should be positioned from now on.

- Parameters:	
   - **x** – x value of the location
   - **y** – y value of the location
   - **location** – the location as a Location
   - **region** – the location as the center of the given Region
If no parameter is given, the location will be reset to the center primary screen (default).

**popup(text[, title])**
Display a dialog box with an ``OK`` button and text as the message. The script then waits for the user to click the ``OK`` button.

- Parameters:	
   - **text** – text to be displayed as message
   - **title** – optional title for the messagebox (default: SikuliX Info)

Example:

```code
popup("Hello World!\nHave fun with SikuliX!")
A dialog box that looks like below will popup
Note: \n inserts a line break
_images/popup.png
```

**popError(text[, title])**
Same as ``popup()`` but with a different title (default SikuliX Error) and alert icon.

Example:

```code
popError("Uuups, this did not work")
A dialog box that looks like below will popup

_images/popError.png
```

**popAsk(text[, title])**
- Returns:	``True`` if user clicked Yes, False otherwise
   Same as ``popup()`` but with a different title (default SikuliX Decision) and alert icon.

There are 2 buttons: Yes and No and hence the message text should be written as an appropriate question.

Example:

```code
answer = popAsk("Should we really continue?")
if not answer:
    exit(1)
A dialog box that looks like below will popup

_images/popAsk.png
```

**input([msg][, default][, title][, hidden])**
Display a dialog box with an input field, a ``Cancel`` button, and an ``OK`` button. The optional text title is displayed as the messagebox title and the text msg as some explanation near the input field. The script then waits for the user to click either the ``Cancel`` or the ``OK`` button.

- Parameters:	
   - **msg** – text to be displayed as message (default: nothing)
   - **default** – optional preset text for the input field
   - **title** – optional title for the messagebox (default: SikuliX Input)
   - **hidden** – (default: False) if true the entered characters are shown as asterisks
- Returns:	
   the text, contained in the input field, when the user clicked ``Ok``

None, if the user pressed the ``Cancel`` button or closed the dialog

Example:

```code
name = input("Please enter your name to log in:")
_images/input.png
A dialog box that looks like above will appear to allow the user to interactively enter some text. This text is then assigned to the variable name, which can be used in other parts of the script, such as paste(name) to paste the text to a login box.
```

Example: input with preset:

```code
name = input("Please enter your name to log in:", "anonymous") # a preset input text
_images/inputPreset.png
```

When using the parameter default, the text input field will be pre-populated with the given text, so the user might just click OK/Cancel or edit the content of the input field.

Example: input with hidden input:

```code
password = input("please enter your secret", hidden = True)
_images/inputHidden.png
```
As the user inputs his secret information, the text is shown as one asterisk per character.

**inputText(message[, title=""][, lines=9][, width=20][, text=""])**
- Parameters:	
   - **message** – text to be displayed as message
   - **title** – optional title for the messagebox (default: SikuliX input request)
   - **lines** – how many lines the text box should be high (default: 9)
   - **width** – how many characters the box should have as width (default: 20)
   - **text** – a multiline text, that is preset in the textarea
- Returns:	
   the multiline text content when user clicks ``OK`` (might be empty) or None if you click ``CANCEL``

A message box with the given height and width is displayed and allows the user to input as many lines of text as needed. The lines are auto-wrapped at word boundary. A vertical scrollbar is shown if needed.

The default font is the Java AWT Dialog (a sans-serif font) in size 14, which is also the minimum size possible. One might switch to a monospace font using ``Settings.InputFontMono=True``. Setting it to ``False`` switches it back to the standard for the next ``inputText()``.

A bigger size than 14 can be set using ``Settings.InputFontSize=NN``. Setting it to a value smaller than 14 (e.g. 0) will reset it to 14 again.

Example:

```code
# selects a monospaced font
# default is False meaning a SansSerif font
Settings.InputFontMono = True

# default fontsize is 14 (also minimum size)
# use a fontsize of 20
Settings.InputFontSize = 20

story = inputText("please tell a story")
lines = story.split("\n") # split the lines in the list lines
for line in lines:
   print line
_images/inputText.png
```

**select([msg][, title][, options][, default])**
- Parameters:	
   - **msg** – text to be displayed as message (default: nothing)
   - **title** – optional title for the messagebox (default: Sikuli Selection)
   - **options** – a list of text items (default: empty list, nothing done)
   - **default** – the preselected list item (default: first item)
- Returns:	
   the selected item (might be the default)

Displays a dropdown menu containing the given options list items with the default selected. The user might select one item and click ok.

Example:

```code
items = ("nothing selected", "item1", "item2", "item3")
selected = select("Please select an item from the list", options = items)
if selected == items[0]:
   popup("You did not select an item")
   exit(1)
_images/select1.png _images/select2.png
```

**popFile([title])**
Display a file open dialog, that lets the user select a folder or file.

- Parameters:	**title** – optional title for the dialogbox (default: Select a file or folder)
- Returns:	the absolute path of the selected file or folder as a string

---

## Timed (autoclosing) popups

General information on using these features:

- Jython Scripting: the usage in all cases is ``returnValue = Do.function()``. Do not try any other usage, since this might clash with existing version 1 implementations.
- Since the implementation is only on the Java level, there are no named parameters (unlike the known non-timed versions of ``popup``, ``popAsk``, …). Nevertheless it is possible to only give a subset of parameters, as long as the defined sequence is obeyed. In doubt use ``None/null`` for a parameter, to get the default value. See the given examples for use cases.
- If the dialog is autoclosed by intention, the return value is ``None/null`` in all cases.
-The dialogs can only be displayed on the primary screen
- Java usage in all cases is ``returnValue = SX.function()``, since the feature is implemented in ``org.sikulix.script.SX``.

These are the possible parameters and their defined sequence:

- ``message`` a declarative text to be shown in the dialog (all methods, default "not set")
- ``title`` the dialog box title (all methods, default "SikuliX")
- ``preset`` a prefilled input text (input, default empty)
- ``hidden`` a boolean value, True/true will show the input text as dots ((input, default False/false)
- ``timeout`` an integer as seconds after that the dialog will autoclose (all methods, default stay open)
- ``location`` a Region object, over which the dialog will be displayed centered (all methods, default screen center) which allows to place the dialog anywhere on the screen. As a convenience you can use ``Region(x, y)`` if you want to specify a point. Hence no need to use ``popAt()``.

**Do.popup([parameters])**
Display an informational message with an ``OK`` button.

- Parameters:	parameters – see above
- Returns:	always ``True``, ``None/null`` if autoclosed

Example:

```code
result = ``Do.popup("autoclosed after 3 seconds", 3)``
if not result:
  print "user did not click ok"
```

**Do.popAsk([parameters])**
Display an informational message with ``YES`` and ``NO`` button.

- Parameters:	parameters – (see above)
- Returns:	``True`` if YES was clicked, ``False`` otherwise, ``None/null`` if autoclosed

Example:

```code
result = Do.popAsk("Nothing done if not\nclicked within 3 seconds", "Your decision", 3)
if None == result:
  print "nothing to do"
elif result:
  print "user said yes"
else:
  print "user said no"
```

**Do.popError([parameters])**
Display an error message with an ``OK`` button.

- Parameters:	parameters – see above
- Returns:	always ``True``, None/null if autoclosed

Example:

```code
where = Region(0,0,300,300)
result = Do.popError("autoclosed after 3 seconds", "Severe Error", 3, where)
# the dialog will display somewhere in the upper left of the screen
# with a box title as "Severe Error"
if not result:
  print "user did not click ok"
```

**Do.input([parameters])**
Display an informational message and ask for a text input with a possible preset text in the input field. The dialog has an ``OK`` and a ``Cancel`` button. With the hidden parameter as True/true the text in the input field will be shown as dots (not readable).

- Parameters:	parameters – see above
- Returns:	the text in the input field, when clicked OK, False/false otherwise, None/null if autoclosed

Example:

```code
where = Region(0,0,300,300)
result = Do.input("please fill in", "A filename", "someImage.png", where)
# the dialog will display somewhere in the upper left of the screen
# with a box title as "A filename"
# and a preset input field containing "someImage.png"
if not result:
  # input field was left empty
  print "we will use a default file name"
else:
  print "we will use as filename: " + result
```

Example for hidden input:

```code
password = Do.input("please enter your secret", "Secret", "defaultSecret", True, 10)
# the dialog's input field displays the text as dots per character
if not password:
  # password is empty or dialog autoclosed
  print "not allowed - exiting"
  exit(1)
# we can proceed
```

---

## Listening to Global Hotkeys

SikuliX can listen to global hotkeys that you register with ``Env.addHotkey`` and call the corresponding handler (sikulix functions) when the user presses the hotkeys.

:::note
Be sure, that the key combination you use is free and not used by the system or any other application. The hotkey feature may not report an error in such situations and as a consequence your hotkey definition simply does not work as expected. An example is the F12 key on Windows alone or with SHIFT, which in the standard is occupied by the system as global debugging key (might be released by hacking the registry).
:::

**Env.addHotkey(key, modifiers, handler)**
Register the specified key + modifiers as a global hotkey. When the hotkey is pressed, the specified function handler will be called.

- Parameters:	
   - **key** – a character or a constant value defined in [Key](#).
   - **modifiers** – Key modifiers, which can be one or multiple constants defined in KeyModifier.
- Returns:	
   ``True`` if success.

```code
def openAppleMenu(event):
   click()

# When the user pressed Ctrl+Alt+F1, click the top-left apple icon.
Env.addHotkey(Key.F1, KeyModifier.ALT+KeyModifier.CTRL, openAppleMenu)
```

**Env.removeHotkey(key, modifiers)**
Unregister the registered global hotkey key + modifiers.

- Parameters:	
   - **key** – a character or a constant value defined in Key.
   - **modifiers** – Key modifiers, which can be one or multiple constants defined in KeyModifier.
- Returns:	
   ``True`` if success.

A more generic example

It keeps the handlers free from processing code, just signals the keypress using a global variable to the main loop. The main loop simply permanently scans the global variables and then does what has to be done.

The whole process is blocking in the sense, that hotkeys are processed one after the other in the sequence they appear in the main loop and each hotkey is only recognized again, after its current press is processed in the main loop.

This setup keeps things more transparent and straightforward. Other setups even with threading are possible, but need much more effort to correctly synchronize the processing especially when mouse or keyboard actions are involved.

Example:

```code
# hotkey to stop the script
hotKeyX = False; # global to communicate with main loop
def xHandler(event):
  global hotKeyX
  hotKeyX = True # tell main loop that hotkey was pressed
# add the hotkey with its handler
Env.addHotkey("x", KeyModifier.CTRL + KeyModifier.SHIFT, xHandler)

# function hotkey: something to do when pressed
hotKeyN = False;
def nHandler(event):
  global hotKeyN
  hotKeyN = True
Env.addHotkey("n", KeyModifier.CTRL + KeyModifier.SHIFT, nHandler)

# the main loop, that simply waits for pressed hotkeys
# which are then processed
count = 0;
while True:
  if (hotKeyX):
    popup("processing ctrl+shift+x: stopping")
    exit()
  if (hotKeyN):
    hotKeyN = False # reset the hotkey variable
    # and now do something
    count += 1
    popup("processing ctrl+shift+n: %d" % count)
  wait(1)
```

Another example showing some specials

All hotkeys use ``ctrl-alt`` as modifieres:

```code
### hotkey setup section ###

# variants to end the script
Env.addHotkey("x", KeyModifier.ALT+KeyModifier.CTRL, lambda e: exit())
Env.addHotkey("q", KeyModifier.ALT+KeyModifier.CTRL, quit)

def quit(event):
  print "handler quit ctrl-alt-x"
  global running
  running = False

# basic hotkey definition with a related handler name
Env.addHotkey("c", KeyModifier.ALT+KeyModifier.CTRL, handlerC)

def handlerC(event):
  print "handlerC: seconds since start:", int((time.time() - start))

# at hotkey press a function will be called whose name is currently held by variable todo
Env.addHotkey("v", KeyModifier.ALT+KeyModifier.CTRL, lambda e: todo(e))

def handlerC1(event):
  print "handlerC1: seconds since start:", int((time.time() - start))

todo = handlerC # default at start of script

# at hotkey press the function handlerParam will be called
# with a parameter value currently held by global variable start
Env.addHotkey("b", KeyModifier.ALT+KeyModifier.CTRL, lambda e: handlerParam(start))

def handlerParam(begin):
  print "handlerParam: seconds since start:", int((time.time() - begin))

### main workflow start ###
start = time.time() # a global variable used in the handlers
count = 0

running = True
while running: # will end the loop if running is False

  wait(1) # some timeconsuming stuff here

  # one can always check in between and leave the loop
  if not running: break

  wait(1) # some timeconsuming stuff here

# changes the handler for hotkey v after about 20 seconds
  count += 1
  if count > 10: todo = handlerC1

# here might be some postprocessing before script finally ends
# you might remove your hotkeys before, to avoid interference by the handlers
print "PostProcessing"
```

The variants to end the script show a graceful version (``ctrl-alt-q``) and a brute-force version (``ctrl-alt-x``).

- The graceful version just signals the keypress via a global variable and leaves it to the main workflow to react, when it makes sense.
- The brute-force variant uses a lambda expression (anonymous function with only a single expression), that stops the script without notice at time of key press

---

## Starting and stopping other applications

Here we talk about the basic features of opening or closing other applications and switching to them (bring them to front).

You can use the feature ``run(someCommand)`` to delegate something, you can do on a commandline, to a seperate process. The script waits for completion and you have acces to the return code and the output the command has produced.

:::note
On Java usage At the Java level only the features of the App class are available (class App).
:::

General hint for Windows users on backslashes ``\`` and double apostrophes ``“``

In a SikuliX script in normal strings enclosed in ``”`` (double apostrophes), these special characters \ and ” have to be escaped using a backslash, when you have them inside the string. So for one backslash you need \ and for one ” you need ". In a string enclosed in ‘ (single apostrophes), a ‘ has to be ' and a ” is taken as such.

To avoid any problems, it is recommended to use the raw string r'some text with \ and " ...', since there is no need for escaping (but no trailing \ is allowed here).

This is especially useful, when you have to specify Windows path’s containing blanks or want to setup command lines for use with ``openApp()``, ``App.open()``, ``run()``, ``os.popen()`` or Jythons Subprocess module.

:::note 
for Mac users As application name use the name, that is displayed with the program symbol on the taskbar, which might differ from what is displayed in the top left of the menu bar.
:::

Example: The Chrome browser displays “Chrome” in the menu bar, but the application name is “Google Chrome”. So ``openApp(“chrome”)`` will fail, whereas ``openApp(“google chrome”)`` will do the job. Same goes for ``switchApp()`` and ``closeApp()``.

**openApp(application)**
Open the specified application, or swith to it, if it is already open.

- Parameters:	application – a string containing the name of an application (case-insensitive), that can be found in the path used by the system to locate applications. Or it can be the full path to an application.
- Returns: None if an error occured, on success a new ``App`` class object

This function opens the specified application and brings it to front. It might switch to an already opened application, if this can be identified in the process list.

Windows: A running instance will be ignored in any case and hence in most cases a new instance of the program will be started.

Examples:

```code
# Windows: run a batch file in a new command window:
`òpenApp("cmd.exe /c start path-to-some.bat")``

# Windows: opens Firefox (full path specified)
``openApp("c:\\Program Files\\Mozilla Firefox\\firefox.exe")`` or
``openApp(r"c:\Program Files\Mozilla Firefox\firefox.exe")``

# Mac: opens Safari
``openApp("Safari")``
```

**switchApp(application)**
Bring the matching application or window to front (make it the active/focused application/window). If no matching application/window can be found, it is tried to open an application using the given string as program name or location.

- Parameters:	**application** – the name of an application (case-insensitive) or (part of) a window title (Windows/Linux) (case-sensitive).
- Returns: ``None`` if an error occured, on success a new ``App`` class object

This function switches the input focus to the specified application (brings it to front).

**Windows**: In the first step, the given text is taken as part of a program name (not case sensitive). If it is found in the process list, it will be switched to front, if it has a main window (registered in the process list). Otherwise the text will be used to search for a matching window title.

**Windows/Linux**: the window is identified by scanning the titles of all accessible windows for the occurence of the application string. The first window in the system specific order, whose title contains the given text, is given focus.

**Mac**: the string application is used to identify the application. If the application has multiple windows opened, all these windows will be brought to the front with unchanged z-order, which cannot be influenced currently.

Examples:

```code
# Windows: switches to an already opened Firfox or opens it otherwise
switchApp("c:\\Program Files\\Mozilla Firefox\\firefox.exe")

# Windows: switches to the frontmost opened browser window (or does nothing
# if no Firefox window is currently opened)
# works, because all Firefox window titles contain "Mozilla Firefox"
switchApp("Mozilla Firefox")

# Mac: switches to Safari or starts it
switchApp("Safari")
```

**closeApp(application)**
Close the specified application.

- Parameters:	**application** – the name of an application (case-insensitive) or (part of) a window title (Windows/Linux)
- Returns: ``None`` if an error occured, on success a new ``App`` class object

This function closes the application indicated by the string application (Mac) or the windows whose titles contain the string application (Windows/Linux). On Windows/Linux, the application itself may be closed if the main window is closed or if all the windows of the application are closed.

Example:

```code
# Windows: closes Firefox if it is running, does nothing otherwise
closeApp("c:\\Program Files\\Mozilla Firefox\\firefox.exe")

# Windows: stops firefox including all its windows
closeApp("Mozilla Firefox")

# Mac: closes Safari including all its windows
closeApp("Safari")
```

**run(command)**
Run command in the command line

- Parameters:	**command** – a command that can be run from the command line.
- Returns:	a multiline string containing the result of the execution

This function executes the command and the script waits for its completion.

structure of the result (comments after #, not part of the result)

Multiline string:

```code
N # a number being the return code
text
text
text
text # no, one or more lines execution output (stdout)
*****error***** # if the execution ended with an error
error text # or the return code was not 0
error text
error text # no, one or more lines error output (stderr)
```

---