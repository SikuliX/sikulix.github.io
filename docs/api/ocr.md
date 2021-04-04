---
id: ocr
title: OCR & Text
sidebar_label: OCR & Text
---

## Text and OCR features

SikuliX uses the Java library ``Tess4j``, that allows to use the ``Tesseract`` features at the Java level. Internally it depends on Tesseract,
If you want to know anything about features not mentioned here or supported by SikuliX that are available in Tess4J/Tesseract, you have to dive into the details on the respective home pages of the packages.

-[Tess4J](http://tess4j.sourceforge.net/)
-[Tesseract](https://github.com/tesseract-ocr/tesseract)

:::note
Though the class names ``TextOCR`` (Python scripts) and ``TextRecognizer`` (Java API level) are still supported, they are deprecated. So you should not use them with new works anymore.

In both environments it is now the class name OCR.

On top ``TextOCR.start()`` or ``TextRecognizer.start()`` are no longer needed beforehand (all methods are static).

Simply start using the text/OCR features with ``Region`` or ``Image``.

In special cases, where you need to tweak the OCR engine, you can use the OCR features directly 
:::

## Accuracy of text recognition

According to the recommendations of ``Tesseract`` and experiences found in the net, SikuliX does some optimization of the images before handing over to ``OCR``:

- convert to grayscale
- do some edge sharpening
- revert images with light text on dark background to black on white
- resize the image to an optimum size

On the latter (optimum size) some comments:

- with Tessreact 3 the recommendation was to rezize to an image of 200 - 300 dpi
- with Tesseract 4 the best practice seems to be: resize to a size, where the average height of a capital letter (preferably the X) has a height of about 30 pixel

Both variants have drawbacks, but the pixel approach seems to be the most promising (own tests and experiences from the net). The dpi approach works too with slightly lower accuarcy, but is too dependent on the current screen settings, which in turn are differently handled by Java in different system environments.

To not make usage too complicated in the average, SikuliX comes with the following default:

The height of a capital X in the default font used in Java in the current screen environment is taken as the base for the resize to 30 pixel.

There are functions/methods (classes ``Region``, ``Image``, ``OCR``), that tell The OCR engine, to treat the image as a single line, a single word or even a single character. In some cases their usage might help to get what you expect.

Generally it makes sense, to try with a sample before investing in complex code:
```code
TODO: Example script to be added
```

If your interested in the reported accuracy (confidence), you have to use one of the SikuliX features, that return text matches:

```code
match.getScore()
```

which returns a decimal value between 0 and 1 (meant as percentage). Very good values are above 0.95, good values above 0.90.

To get the text in such cases, simply use:

```code
match.getText()
```
:::note
Even if a good confidence is reported, there might still be very few errors in the returned text, though the risk is very small. If you need exact results in case you have to intelligently combine the SikuliX and Tesseract features. Even lower confidence values do not mean, that the text is not correctly recognized. Suggestions and contributions are always very welcome.
:::

---

## Handling OCR options

There is one global options set (``OCR.Options``), that is used if nothing else is said.

Using ``myOptions = OCR.Options()`` you can create a new options set, derived from the initial global options. This can be modified using the setters shown below (``myOptions.XXX(value)``) and later be used with features allowing to specify an option set to use.

As well you can apply the setters to the global options (``OCR.globalOptions().XXX(value)``), to run OCR with specific defaults. At any time, you can reset the global options to its initial state using ``reset()``.

``status()`` reports the currently used global options (example for Windows 10 with standard screen settings):

Global settings ``OCR.options``:

```code
data = ...some-path.../tessdata
language(eng) oem(3) psm(3) height(15,1) factor(1,99) dpi(96) LINEAR
configs: conf1, conf2, ...
variables: key:value, ...
```

The information is usually not relevant, only in cases where you want to report a problem or you are using non-standard SikuliX-OCR-features. More Details you may find below.

For a specific options set (created before using ``someOptions = OCR.Options()``) you can use (Java) ``someOptions.toString()`` to get this information as text (use print someOptions in scripts).

The options setters can be chained:

```code
myOptions = OCR.Options().setter(value).setter(value)...
```

or used alone:

```code
myOptions = OCR.Options()
myOptions.setter(value)
myOptions.setter(value)
```

:::note on using IDE
After a script run, OCR is reset to the defaults of ``OEM``, ``PSM`` and text height. If ``Tesseract`` variables and/or configs have been set, those are removed as well. So each script run starts with a defined default state of the ``Tesseract`` engine.
:::

#### OCR engine mode (OEM)
The latest version of ``Tesseract`` (namely version 4) internally uses a new detection engine (LSTM), that has again raised accuracy and speed. If the corresponding language models are supplied at runtime (which is the case with SikuliX now), then this engine is used as a default (OEM = 3).

#### OCR page segmentation mode(PSM)
You can set the page segmentation mode (PSM), which tells ``Tesseract``, how to split the given image into rectangles, that are supposed to contain readable text.

---

## Switching Languages

In standard SikuliX runs the text features with the english language set, which is bundled with SikuliX. It is possible to add more languages to your SikuliX setup and switch between the installed languages at runtime.

These are the steps to switch to another language than the standard english (eng):

For SikuliX version 2.0.x+ we use the files for ``Tesseract 4`` (preferably ``tessdata_fast``)

- Step 1: Find the folder ``SikulixTesseract/tessdata`` in your ``SikuliX <app-data>`` folder

- Step 2: Download the languages needed from ``Tesseract`` languages (only the files with .traineddata)

- Step 3: Put the ``.traineddata`` files into the tessdata folder (Step 1)

In your script, that should use the language, say before using an OCR feature (``Options.language()``):

```code
OCR.globalOptions().language(xxx)
```

Another way to set a default language to be used after startup globally:

```code
Settings.OcrLanguage = "xxx"
```

This is then recognized with each subsequent script start in the same IDE session.

---

## Tesseract datapath

Instead of the above mentioned standard you can have your own folder with all stuff, that is needed by Tesseract at runtime. If you want to do that, simply have:

```code
Settings.OcrDataPath = <some absolute Path>
```

Before starting the ``Textrecognizer``. Take care, that all relevant files are in a subfolder tessdata.

This is then recognized with each subsequent script start in the same IDE session.

Use ``Options.dataPath()`` to switch the path dynamically:

```code
OCR.globalOptions().dataPath(someAbsolutePath)
```

---

## Tweaking Tesseract

About ``Tesseract`` variables, configurations, training and other gory details you have to consult the [Tesseract](https://github.com/tesseract-ocr/tesseract/wiki/Documentation) documentation.

But before you step into ``Tesseract`` you should read about [Lessons Learned and Best Practices](https://github.com/RaiMan/SikuliX1/wiki/How-to-get-the-best-from-OCR-and-text-features).

To set a variable as a single ``Tesseract`` setting, that controls a specific topic in the OCR process use ``Options_variable()``

To set a configuration which is a file containing a set of variables, that configure the behaviour of a tailored OCR process use ``Options_configs()``.

---

## Text and OCR features

**class OCR**
Static helper class for ``OCR`` via ``Tess4J/Tesseract``.

The methods in this class are not threadsafe.

### Global

**OEM**
OCR Engine modes.

  0 TESSERACT_ONLY Tesseract Legacy only.
  1 LSTM_ONLY LSTM only.
  2 TESSERACT_LSTM_COMBINED LSTM + Legacy.  
  3 DEFAULT Default, based on what is available. (DEFAULT)

- Usage: ``OCR.OEM.MODE``

**PSM**
Page segmentation modes.

  0 OSD_ONLY Orientation and script detection (OSD) only.
  1 AUTO_OSD Automatic page segmentation with OSD.
  2 AUTO_ONLY Automatic page segmentation, but no OSD, or OCR.
  3 AUTO Fully automatic page segmentation, but no OSD. (Default)
  4 SINGLE_COLUMN Assume a single column of text of variable sizes.
  5 SINGLE_BLOCK_VERT_TEXT Assume a single uniform block of vertically aligned text.
  6 SINGLE_COLUMN Assume a single uniform block of text.
  7 SINGLE_LINE Treat the image as a single text line.
  8 SINGLE_WORD Treat the image as a single word.
  9 CIRCLE_WORD Treat the image as a single word in a circle.
  10 SINGLE_CHAR Treat the image as a single character.
  11 SPARSE_TEXT Sparse text. Find as much text as possible in no particular order.
  12 SPARSE_TEXT_OSD Sparse text with OSD.
  13 RAW_LINE Raw line. Treat the image as a single text line, bypassing hacks that are Tesseract-specific.

- Usage: ``OCR.PSM.MODE``

**classmethod globalOptions()**
access/get the current global ``Options`` as singleton.
- **Returns**:	``(Options)`` the global Options

**classmethod reset()**
Resets the global options to the initial defaults.
  
  ```code
  oem = OcrEngineMode.DEFAULT.ordinal();
  psm = PageSegMode.AUTO.ordinal();
  language = Settings.OcrLanguage;
  dataPath = null; //(see comment)
  textHeight = getDefaultTextHeight();
  variables.clear();
  configs.clear();
  ```

  comment on ``dataPath==null: dataPath`` will be evaluated at the next use of an ``OCR`` feature
  to the SikuliX default or ``Settings.OcrDataPath`` (if set)
- **Returns**:	``(Options)`` the global Options

**classmethod status()**
prints out the current global options.

### Read Text

**classmethod readText(SFIRBS from)**
Reads text from the given source.
Uses the global options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
Returns:	
  ``(String)`` text

**classmethod readText(SFIRBS from, Options options)**
Reads text from the given source.
Uses the given options
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
  ``options`` – Options to be used
- **Returns**:	
  ``(String)`` text

### Read Lines

**classmethod readLine(SFIRBS from)**
Reads text from the given source (line).
assuming the source contains a single line of text.
Uses the global options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
- **Returns**:	
``(String)`` text

**classmethod readLine(SFIRBS from, Options options)**
Reads text from the given source (line).
assuming the source contains a single line of text.
Uses the given options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
  ``options`` – options for the used TextRecognizer
- **Returns**:	
  ``(String)`` text

**classmethod readLines(SFIRBS from)**
Treats text from the given source as lines.
Uses the global options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
- **Returns**:	
  ``(List<Match>)`` lines as a list of matches

**classmethod readLines(SFIRBS from, Options options)**
Treats text from the given source as lines.
Uses the given options.
- Parameters:	
  ``<SFIRBS>`` – File name, ``File``, ``Image``, ``Region``, ``BufferdImage`` or ``ScreenImage``
  ``from`` – source to read text from
  ``options`` – options for the used TextRecognizer
- **Returns**:	
  ``(List<Match>)`` lines as a list of matches

### Read Certain Words 

**classmethod readWord(SFIRBS from)**
Reads text from the given source (word).
assuming the source contains a single word of text.
Uses the global options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
- **Returns**:	
  ``(String)`` text

**classmethod readWord(SFIRBS from, Options options)**
Reads text from the given source (word).
assuming the source contains a single word of text.
Uses the given options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
  ``options`` – options for the used TextRecognizer
- **Returns**:	
``(String)`` text

**classmethod readWords(SFIRBS from)**
Treats text from the given source as words.
Uses the global options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
- **Returns**:	
  ``(List<Match>)`` words as alist of matches

**classmethod readWords(SFIRBS from, Options options)**
Treats text from the given source as words.
Uses the given options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
  ``options`` – options for the used TextRecognizer
- **Returns**:	
  ``(List<Match>)`` words as a list of matches

### Text Assumptions

**classmethod readChar(SFIRBS from)**
Reads text from the given source (character).
assuming the source contains a single character.
Uses the global options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
- **Returns**:	
  ``(String)`` text

**classmethod readChar(SFIRBS from, Options options)**
Reads text from the given source (character).
assuming the source contains a single character.
Uses the given options.
- Parameters:	
  ``<SFIRBS>`` – File name, File, Image, Region, BufferdImage or ScreenImage
  ``from`` – source to read text from
  ``options`` – options for the used TextRecognizer
- **Returns**:	
  ``(String)`` text

### Options

**class OCR.Options**
A container for the options relevant for using OCR on
``Region`` or ``Image``.
Use ``OCR.Options()`` to get a new option set
``use OCR.globalOptions()`` to access the global options

**Options()**
create a new ``Options`` set from the initial defaults settings.

**clone()**
makes a copy of this Options
- **Returns**:	``(Options)`` new Options as copy

**reset()**
resets this ``Options`` set to the initial defaults.
- **Returns**:	``(Options)`` this

**toString()**
Current state of this Options as some formatted lines of text.
  OCR.Options:
  data = …some-path…/tessdata
  language(eng) oem(3) psm(3) height(15,1) factor(1,99) dpi(96)
  configs: conf1, conf2, …
  variables: key:value, …
- **Returns**:	``(String)`` a text string as before

#### Handle OEM

**oem()**
get this OEM.
- **Returns**:	``(int)`` oem as int

**oem(int oem)**
set this OEM.
- Parameters:	``oem`` – as int
- **Returns**:	``(Options)`` this Options

**oem(OEM oem)**
set this OEM.
- Parameters:	``oem`` – as enum constant
- **Returns**:	``(Options)`` this Options

#### Page Segmentation Mode

**psm()**
get this PSM.
- **Returns**:	``(int)`` psm as int

**psm(int psm)**
set this PSM.
- Parameters:	``psm`` – as int
- **Returns**:	``(Options)`` this Options

**psm(PSM psm)**
set this PSM.
- Parameters:	``psm`` – as enum constant
- **Returns**:	``(Options)`` this Options

**resetPSM()**
Sets this ``PSM`` to ``-1``.

This causes ``Tess4J`` not to set the ``PSM`` at all.
Only use it, if you know what you are doing.
- **Returns**:	``(Options)`` this Options

**asLine()**
Configure Options to recognize a single line.
- **Returns**:	``(Options)`` this Options

**asWord()**
Configure Options to recognize a single word.
- **Returns**:	``(Options)`` this Options

**asChar()**
Configure Options to recognize a single character.
- **Returns**:	``(Options)`` this Options

#### Handle languages

**language()**
get the cutrrent language

**see language()**
- **Returns**:	``(String)`` the language short string

**language(String language)**
Set the language short string.
  (must not be null or empty,
  see ``Settings.OcrLanguage()`` for a useable fallback)
  According to the ``Tesseract`` rules this is a 3-lowercase-letters string
  like eng, deu, fra, rus, ….
  For special cases it might be something like xxx_yyy (chi_sim)
  or even xxx_yyyy (deu_frak) or even xxx_yyy_zzzz (chi_tra_vert), but always all lowercase.
  Take care that you have the corresponding ….traineddata file in the datapath/tessdata folder
- **Parameters**:	``language`` – the language string
- **Returns**:	``(Options)`` this Options

#### Handle datapath

**dataPath()**
get the current ``datapath`` in this Options.
might be null, if no ``OCR`` feature was used until now
if null, it will be evaluated at time of ``OCR`` feature usage to the default
SikuliX path or to ``Settings.OcrDataPath`` (if set)
- **Returns**:	``(String)`` the current Tesseract datapath in this Options

**dataPath(String dataPath)**
Set folder for ``Tesseract`` to find language and configs files.
in the ``tessdata`` subfolder (the path spec might be given without the trailing /tessdata)

:::note
That all is in place at time of ``OCR`` feature usage
if null, it will be evaluated at time of ``OCR`` feature usage to the default
SikuliX path or to ``Settings.OcrDataPath`` (if set)
:::

**see language()**
- **Parameters**:	``dataPath`` – the absolute filename string
- **Returns**:	``(Options)`` this Options

#### Handle the pre-OCR image optimization

**smallFont()**
Convenience: Configure the Option’s optimization.
Might give better results in cases with small
fonts with a pixel height lt 12 (font sizes lt 10)
- **Returns**:	``(Options)`` this Options

**textHeight()**
current base for image optimization before OCR.
- **Returns**:	``(float)`` value

**textHeight(float height)**
Configure image optimization.
should be the (in case average) height in pixels of an uppercase X in the image’s text
- **Parameters**: ``height`` – a number of pixels
- **Returns**:	``(Options)`` this Options

**fontSize(int size)**
Configure the image optimization.
should be the (in case average) fontsize as base for internally calculating the OCR.Options.textHeight()
- **Parameters**:	``size`` – of a font
- **Returns**:	``(Options)`` this Options

**lightFont()**
Convenience: Configure optimization.
Might give better results in cases with
text in light color on darker background
TAKE CARE: the region should NOT have other background around the darker background containing the text (example is buttons)
- **Returns**:	``(Options)`` this Options

#### Handle Tesseract variables

**variables()**
- **Returns**:	``(Map<String, String>)`` the currently stored variables

**variable(String key, String value)**
set a variable for Tesseract.
you should know, what you are doing!
- **Parameters**:	
  ``key`` – the key
  ``value`` – the value
- **Returns**:	
  ``(Options)`` this Options

#### Handle Tesseract configs

**configs()**
get current configs
- **Returns**:	``(List<String>)`` currently stored names of configs files

**configs(String... configs)**
set one ore more configs file names.
you should know, what you are doing!
- **Parameters**:	``configs`` – one or more configs filenames
- **Returns**:	``(Options)`` this Options

**configs(``List<String> configs``)**
set a list of configs file names, you should know, what you are doing!
- **Parameters**:	``configs`` – a list of configs filenames
- **Returns**:	``(Options)`` this Options

---
