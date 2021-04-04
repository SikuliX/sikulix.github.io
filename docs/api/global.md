---
id: global
title: Global Settings
sidebar_label: Global Settings
---

#### Java Level

Java maintains a global storage for settings (key/value pairs), that can be accessed by the program/script. Sikuli uses it for some of it’s settings too. Normally it is not necessary to access these settings at the Java level from a Sikuli script, since SikuliX provides getter and setter methods for accessing values, that make sense for scripting. One example is the list of paths, that SikuliX maintains to specify additional places to search for images (please refer to Importing other Sikuli Scripts for more information).

If needed, you may access the java settings storage as shown in the following example:

```java
import java.lang.System

# get a value
val = System.getProperty("key-of-property")

# set a property's value
System.setProperty("key-of-property", value)
```

#### Jython/Python Level

You may use all settings, that are defined in standard Python/Jython and that are available in your system environment.

The modules ```sys``` and ```time``` are already imported, so you can use their methods without the need for an import statement.

```sys.path``` may be one of the most valuable settings, since it is used by Python/Jython to locate modules, that are referenced using ```import module```. It is a list of path’s, that is e.g. maintained by SikuliX to implement Importing other SikuliX Scripts as a standard compliant feature (exception: .Sikuli scripts cannot form a module tree).

If you want to use ```sys.path```, it is recommended to do it as shown in the following example, to avoid appending the same entry again:

```python
myPath = "some-absolute-path"
if not myPath in sys.path:
        sys.path.append(myPath)
```
#### SikuliX Level

SikuliX internally uses the class ```Settings``` to store globally used settings. Publicly available attributes may be accessed by using ```Settings.[name-of-an-attribute]``` to get it’s value and ```Settings.attribute = value``` to set it. It is highly recommended to only modify attributes, that are described in this document or when you really know, what you are doing.

Actually all attributes of some value for scripting are described in the topic Controlling SikuliX Scripts and their Behavior.

To store some settings across SikuliX IDE sessions, SikuliX utilizes the Java feature Preferences.

As persistent storage Java uses:

- on Windows the registry branch HKCUSoftwareJavaSoftPrefsorgsikuli…
- on Mac a plist file in ~/Library/Preferences/org.sikuli…..plist
- on Linux usually at ~/.java/.userPrefs/org/sikuli/prefs.xml

The content is controlled by the IDE’s Preferences panel. It is safe to delete this branch/file, to get a default setup and might help in some situations, wher the startup of the IDE does not work or crashes.

## Presistent Data

You can have a so called Property File somewhere on the file system, that you can prefill with key-value-pairs representing information, that can be used by your scripts for whatever purpose at runtime. So it can be used instaed of commandline parameters, for some kind of data-driven approach or for any other solution, that needs information to be persistent over time.

```code
# this is a property file
key1 = value1
key2 = value2
...
```
At runtime in your script, you first load such a property file into an in-memory store and then access the values using their keys (both basically are strings). You might change existing values, add new values and remove values. At any time you might save the store content back to the originating file or to another file.

Currently there is no Auto-Save feature, so that your changes are lost in case of crashes before you saved the store back to a file. The feature might not be fully thread safe.

#### Features that operate on the store as entity

***loadOpts(filePath)***
Loads a property file into an internal store

- Parameters:	filePath – absolute or relative to the working folder
- Returns:	the reference to the internal store to be used with the store functions

***saveOpts(store)***
Saves the store back to the file it was loaded from

- Parameters:	store – the reference to a loaded store
- Returns:	true if it worked, false otherwise

***saveOpts(store, filepath)***
Saves the store to the given file, overwritten without notice

- Parameters:	
    - store – the reference to a loaded store
    - filePath – absolute or relative to the working folder
- Returns:	
    true if it worked, false otherwise

***makeOpts()***
Makes a new, empty internal store, that might be saved to a file later

- Returns:	the reference to the internal store to be used with the store functions

***delOpts(store)***
Purges all key-value-pairs from the store (make it empty)

- Parameters:	store – the reference to a loaded store
- Returns:	true if it worked, false otherwise

***hasOpts(store)***
Counts the key-value-pairs in the store

- Parameters:	store – the reference to a loaded store
- Returns:	a positive number (0 means empty)

***getOpts(store)***
Loads the key-value-pairs into a dictionary (Java: Map(String, String)), to be able to use more powerful features on the store information

- Parameters:	store – the reference to a loaded store
- Returns:	the dictionary filled with the key-value-pairs

***setOpts(store, map)***
Stores the key-value-pairs from a dictionary (Java: Map(String, String)) to the given store

- Parameters:	
    - store – the reference to a loaded store
    - map – the dictionary/map containing the key-value-pairs
- Returns:	
    The number of stored key-value-pairs (0 might signal a problem)

#### Features that operate on individual entries in a loaded store

***hasOpt(store, key)***
Checks the existence of a key-value-pair

- Parameters:	
    - store – the reference to a loaded store
    - key – the key as string of a stored key-value-pair
- Returns:	
    True if the key exists, false otherwise

***getOpt(store, key[, default])***
Reads the value of a specific key and get the default value, if the key does not exist. If the key does not exists and no default is given, an empty string is returned.

- Parameters:	
    - store – the reference to a loaded store
    - key – the key as string of a stored key-value-pair
    - default – an optional value in case the key does not exist in the store
- Returns:	
    The stored value or the default

***setOpt(store, key, value)***
Sets the value of a specific key. if the key does not exist, the key-value-pair is added, otherwise the value is overwritten.

- Parameters:	
    - store – the reference to a loaded store
    - key – the key as string of a stored key-value-pair
    - value – a string value to be stored with the given key
- Returns:	
    The stored value before the change, an empty string if the key did not exist yet

***delOpt(store, key)***
Deletes the key-value-pair from the store

- Parameters:	
    - store – the reference to a loaded store
    - key – the key as string of a stored key-value-pair
- Returns:	
    The stored value before the deletion, an empty string if the key did not exist yet

##### Convenience functions for number values

Since the values in the store are strings only, the following functions take care for the necessary conversions. All returned numbers are of format double.

***getOptNum(store, key[, default])***
Reads the value of a specific key and get the default value, if the key does not exist. If the key does not exists and no default is given, a 0.0 is returned.

- Parameters:	
    - store – the reference to a loaded store
    - key – the key as string of a stored key-value-pair
    - default – an optional number value in case the key does not exist in the store
- Returns:	
    the stored value as double or the default

***setOptNum(store, key, value)***
Set the value of a specific key. if the key does not exist, the key-value-pair is added, otherwise the value is overwritten.

- Parameters:	
    - store – the reference to a loaded store
    - key – the key as string of a stored key-value-pair
    - value – an valid number value to be stored with the given key
- Returns:	
    The stored value before the change, a 0.0 if the key did not exist yet

***The following feature only works on the same machine***

… and has nothing to do with the above feature, but can of course be combined.

You might use SikuliX’s persistent storage, to store and reload your own information accross SikuliX sessions or only across different runs of same or different scripts/programs.

There is no feature to preload the store before the first run nor to export your information.

Sikulix.***prefStore(key, value)***
Store a key-value-pair in Javas persistent preferences store

- Parameters:	
    - key – an item name as string
    - value – a string value to be stored as the item’s content

Sikulix.***prefLoad(key[, value])***
Retrieve the value of a previously stored key-value-pair using key as the item’s name

- Parameters:	
    - key – an item name as string
    - value – an optional string value to be returned, if the item was not yet stored like some default
- Returns:	
    The item’s content if the item exists, otherwise an empty string or the given default

Sikulix.***prefRemove(key)***
Permanently remove the key-value-pair using key as the item’s name

- Parameters:	key – an item name as string
- Returns:	the item’s content if the item exists, otherwise an empty string

Sikulix.***prefRemove()***
Permanently remove all key-value-pairs stored before using Sikulix.prefStore()

- Parameters:	key – an item name as string
- Returns:	the item’s content if the item exists, otherwise an empty string

---

## Runtime Environment Information 

The class ```Env``` is deprecated and should not be used anymore. The contained features are moved to other places and redirected from inside class ```Env``` to be downward compatible.

:::note
In the following the non-Env methods are the replacements, that should be used instead.
:::

Settings.***getOS()***
Env.***getOS()***
Settings.***getOSVersion()***
Env.***getOSVersion()***

Get the type ( getOS() ) and version string ( getOSVersion() ) of the operating system your script is running on.

An example using these methods on a Mac is shown below:

```code
# on a Mac
myOS = Settings.getOS()
myVer = Settings.getOSVersion()

if myOS == OS.MAC:
        print "Mac " + myVer # e.g., Mac 10.6.3
else:
        print "Sorry, not a Mac"

myOS = Settings.getOS()
if myOS == "MAC" or myOS.startswith("M"):
        print "Mac " + myVer # e.g., Mac 10.6.3
else:
        print "Sorry, not a Mac"
```

There are convenience functions, to check wether we are running on a specific system:

Settings.***isWindows()***
Settings.***isMac()***
Settings.***isLinux()***
- Returns:	True if we are running on this system, False otherwise

Settings.***getVersion()***
Env.***getSikuliVersion()***
Gets the version of SikuliX.

- Returns:	a string containing the version string

```code
if not Settings.getSikuliVersion().contains("1.0.1"):
        print "This script needs SikuliX 1.0.1"
        exit(1)
```

Settings.***getVersionBuild()***
Env.***getSikuliVersionBuild()***
Gets the version of SikuliX with detailed build info (number and date-time)

- Returns:	a string containing the version string

```code
print Settings.getVersionBuild()
# prints: 1.1.4-SNAPSHOT-#205-2019-02-22_10:50
```

App.***getClipboard()***
Env.***getClipboard()***
Gets the content of the clipboard if it is text, otherwise an empty string.

:::note
When using ```Env.getClipboard()``` together with ```paste()```, paste internally uses the clipboard to transfer text to other applications, the clipboard will contain what you just pasted. Therefore, if you need the content of the clipboard, you should call ```Env.getClipboard()``` before using ```paste()```.
:::

:::Tip 
When the clipboard content was copied from a web page that mixes images and text, you should be aware, that there may be whitespace characters around and inside your text, that you might not have expected. In this case, you can use ```Env.getClipboard().strip()``` to at least get rid of surrounding white spaces.
:::

Key.***isLockOn(key-constant)***
Env.***isLockOn(keyConstant)***
Get the current status ( on / off ) off the respective key. Only one key can be specified.

- Parameters:	keyConstant – one of the key constants Key.CAPS_LOCK, Key.NUM_LOCK, Key.SCROLL_LOCK
- Returns:	True if the specified key is on, False otherwise

Further information about key constants can be found in Class Key.

Mouse.***at()***
Env.***getMouseLocation()***
Get the current location of the mouse cursor.

- Returns:	a Location object of the position of the mouse cursor on the screen.

---

## Settings for speed and reliability 

:::Note 
It is not recommended, to use this.
:::

With version 1.2 the matching process will be revised anyway and might bring other options. If you really want to speed up the search process, take care, that you are searching in a region being as small as possible.

Here you get more information about how to make your workflow fast and robust.

Vision.***setParameter(param, value)***
Set the parameter param of the vision algorithm to value.

- Parameters:	
    - param – a string that indicates the parameter to set.
    - value – a float value.

Vision.***getParameter(param)***
Get the parameter param of the vision algorithm.

- Parameters:	param – a string that indicates the parameter to get.
- Returns:	the float value of the specified parameter.

***MinTargetSize***
```MinTargetSize``` is the minimum image size to which SikuliX can resize.

If you feel that SikuliX is running too slow, you might try a smaller value than 12. On the other hand, if you see SikuliX returns a match that is not what you expect, i.e. a false match, try to increase MinTargetSize to make SikuliX be more robust to small details.

You can tune this parameter using the following Jython code:

```python
from org.sikuli.natives import Vision
Vision.setParameter("MinTargetSize", 6) # the default is 12.
Setting the size to a smaller value would make the matching algorithm be faster.
```

---
