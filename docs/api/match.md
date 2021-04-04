---
id: match
title: Matching an Image
sidebar_label: Matching an Image
---

## class Match

An object of class Match represents the result of a successful find operation. It has the rectangle dimension of the image, that was used to search. It knows the point of its upper left corner on an existing monitor, where it was found.

Since class ```Match``` extends class ```Region```, all methods of class ```Region``` can be used with a match object.

---

## Match Attributes

A match object is created as the result of an explicit [find operation](#). It can be saved in a variable for later use with actions like ```click()```.

It has the rectangle dimension of the image, that was used to search. It knows the point of its upper left corner on an existing monitor, where it was found. It knows the similarity it was found with and a click point to be used, if set by a pattern.

```code
# m is a reference to a match object, if found
m = find(🍏)
print m # message area: Match[10,0 30x22] score=1.00, target=center

# m is a reference to a match object, if found
m = find(Pattern(🍏).similar(0.5).targetOffset(100,0))
print m # message area: Match[10,0 30x22] score=1.00, target=(105,11)
```
For all other aspects, the features and attributes of class ```Region``` apply.

***class Match***
- ***getScore()***
    Get the similarity score the image or pattern was found. The value is between 0 and 1.

- ***getTarget()***
    Get the location object that will be used as the click point.

Typically, when no offset was specified by Pattern.targetOffset(), the click point is the center of the matched region. If an offset was given, the click point is the offset relative to the center.

---

## findAll() Matches

A find operation ```Region.findAll()``` returns an iterator object that can be used to fetch all found matches as match objects one by one. A reference to the iterator is stored in the respective region and can be accessed using ```Region.getLastMatches()```.

Important to know:

per definition, an iterator can be stepped through only once - it is empty afterwards
You can read more about the basics of operations with iterators from the description of ```Finder``` class. To save contained matches for later use, you can convert them to list.

```code
findAll(⭐) # find all matches
mm = list(getLastMatches())
```

Example: using ```while:``` with default screen

```code
findAll(⭐) # find all matches
mm = SCREEN.getLastMatches()
while mm.hasNext(): # loop as long there is a first and more matches
                print "found: ",  mm.next() # access the next match in the row

print mm.hasNext() # is False, because mm is empty now
print mm.next() # is None, because mm is empty now
print SCREEN.getLastMatches().hasNext() # is False also ;-)
```

Example: using ```with:``` with default screen

```code
with findAll(⭐) as mm:
        while mm.hasNext(): # loop as long there is a first and more matches
                print "found: ",  mm.next() # access the next match
# mm will be None afterwards (destroyed automatically)
```

---
