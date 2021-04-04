---
id: keys
title: Keys
sidebar_label: Keys
---
*** *class* Key ***
Applicable usage situations for these predefined constants of special keys and key modifiers can be found in Acting on a ```Region``` and ```Low Level Mouse and Keyboard Actions```.

## Special Keys

The methods supporting the use of special keys are
- ```type()```
- ```keyDown()```
- ```keyUp()```

***Usage***: ```Key.CONSTANT```
(where CONSTANT is one of the following key names, uppercase mandatory).

String concatenation with with other text or other key constants is possible using ``` `` + `_`.```

```code
type("some text" + Key.TAB + "more text" + Key.TAB + Key.ENTER)
# or eqivalent
type("some text\tmore text\n")
```

miscellaneous keys

```code
ENTER, TAB, ESC, BACKSPACE, DELETE, INSERT
```

miscellaneous keys

```code
SPACE
```

function keys

```code
F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15
```

navigation keys

```code
HOME, END, LEFT, RIGHT, DOWN, UP, PAGE_DOWN, PAGE_UP
```

special keys

```code
PRINTSCREEN, PAUSE, CAPS_LOCK, SCROLL_LOCK, NUM_LOCK
```

:::Note 
The status ( on / off ) of the keys Key.CAPS_LOCK, Key.NUM_LOCK and Key.SCROLL_LOCK can be evaluated with the method Env.isLockOn().
:::

numpad keys

```code
NUM0, NUM1, NUM2, NUM3, NUM4, NUM5, NUM6, NUM7, NUM8, NUM9
SEPARATOR, ADD, MINUS, MULTIPLY, DIVIDE
```

---

## Key Modifiers

#### modifier keys

```code
ALT, CMD, CTRL, META, SHIFT, WIN, ALTGR
```

A key is called a modifier key, when it is used in conjunction with other keys by pressing and holding it while typing the other keys. The keys used most commonly as modifier keys are SHIFT, ALT (left alt key, CTRL (might be strg on Windows) and the CMD key (Apple key on OS X). On Windows you additionally have the Windows key and the alt key on the right.

the plain ```type()``` command has 2 parameters:
- parameter 1: the keys, that should be pressed/released one after the other
- parameter 2: the modifier keys, that alltogether should be pressed and held during the typing and released at the end.

For parameter 2 there are 2 options:
- new version: (a key is a key ;-): Key.XXX
- old version (kept for upwards compatibility): KeyModifier.XXX

… and these early versions should not be used anymore

```code
KEY_ALT, KEY_CTRL, KEY_SHIFT, KEY_WIN, KEY_CMD, KEY_META
```

The modifier keys can be combined using``` `` + `_` ```, if more than one key modifier is needed.

```code
# example with the recommended Key.XXX version
type(Key.ESC, Key.CTRL + Key.ALT)
```

Note for Java programming:
These constants are mapped to the according constants of ```java.awt.event.InputEvent```.

---
