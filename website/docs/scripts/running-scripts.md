---
id: running-scripts
title: Running Scripts
sidebar_label: Running Scripts
---

## Where and how can a SikuliX script be stored

When you need to distribute your SikuliX scripts you have two options: <code>zip-file</code> and <code>jar-file</code>, both variants pack the SikuliX script content in one file, which makes distribution easier. Both can run with SikuliX.

The jar-file variant has an option to be packed together with the scripting and SikuliX feature support (self contained), so it might be run on systems only having a valid Java installation.

- #### variant zip-file

It can be created in the SikuliX IDE with the file menu entry “Export packed source” and gets the ending .skl instead of .sikuli. As such it cannot be reopened for editing nor used for import, it can only be run using SikuliX features on systems having a valid SikuliX setup. In fact it is simply a zip-file, which can be brought back to a .sikuli folder using a zip utility. So be aware, that this variant does not really hide your script content.

- #### variant jar-file

It can be created in the SikuliX IDE (file menu entry “Export as jar”). It can be run using SikuliX features on systems having a valid SikuliX setup. The script source is contained in compiled form (Java byte code) and hence not visible, even if one accesses the jar content. So this variant gives some level of secrecy for your scripted workflow.

---

## How to run a SikuliX script

You can run scripts by simply clicking run from the IDE or using the command line to run saved scripts (.sikuli) and exported scripts (.skl and .jar).  

You may also call/run scripts from a script that is currently running, which saves the startup time for the called script and keeps available the original parameters given and the current image path.

```runScript(script_path, *parameter)```

Runs the script found at the given script-path handing over the given parameters in sys.argv[1+]. The called script has it’s own bundle path, but the current image path. On exit the bundle path of the calling script is restored.

- Param:	```script_path``: a path to a script folder (rules see below)
- Param:	```parameter```: one or more parameters seperated by comma
- Returns:	the return code that the called script has given with exit(n) (exception: n = 1 - see note)

:::note
If the called script runs into an exception (e.g. FindFailed), that is not catched internally, the exception info is logged as [error] messages and the returned value is set to 1. To sort it out, the called script should use exit(0) (which is the default) on success and use exit(n) with n > 1, to signal other cases to the calling script. **Do not use values < 0**.
:::
An example:

```
exitValue = runScript(whatever)
if exitValue > 1:
   print "there was a special case"
elif exitValue == 1:
   print "there was an exception"
else:
   print "ran with success"
exit(exitValue)
```

**Make sure**: each parameter MUST be a simple string.

#### Rules for the given script_path

- absolute path to a folder in the file system
- relative path to a folder taken as relative to the working folder
- the path spec can contain leading or intermediate ../
- a path preceded by ./ means the same folder, that the calling script is located
- a pointer to a folder in the HTTP net
- in any case .sikuli can be omitted
- if it is a .skl, then it must be noted as script.skl

**Special usage notes for scripts located in the net**
- must be accessible via HTTP
- where location is to the folder containing the script file (Python, Ruby or JavaScript) and the images (no .sikuli appended!)
- The contained script file must have the same name as the script folder and a suffix
    - for JavaScript ```.js```
    - for Python ```.py.txt``
    - for Ruby ```.rb.txt```
    - the ```.txt``` suffixes are necessary, to avoid download problems

This feature allows to create a main script, that contains a row of ```runScript()``` commands, thus running these scripts one after the other in the same context (no startup delay). Using the return codes and the parameters allows to create medium complex workflows based on smaller reuseable entities.

#### Running snippets

```runScript(snippet)```

- **Param**:	snippet: a string containing the scripting statements after the word identifying the script type
- **Returns**:	the return code that was returned by the interpreter running this snippet

Currently available:

- AppleScript on Mac (script type word: applescript)
- PowerShell on Windows (script type word: powershell)

**Example for Applescript**:

```returnCode = runScript('applescript tell application "Mail" to activate')```

or like this for a multiline snippet:
```
cmd = """
applescript
tell application "Mail" to activate
display alert "Mail should be visible now"
"""
returnCode = runScript(cmd)
```

**Example for PowerShell**:

```returnCode = runScript('powershell get-process')```

or like this for a multiline snippet:

```
cmd = """
powershell
get-process
"""
returnCode = runScript(cmd)
```

If the snippet produces some output on stdout and/or stderror, this is accessible after return using:

```commandOutput = RunTime.get().getLastCommandResult()```

---
