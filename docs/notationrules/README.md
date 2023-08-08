# Enclst
The Enclst is a text file that satisfies 

- which the extension is ``.enclist``
- which is written in the [Enclist Notation](#enclst-notation)

In case you want to handle files with extensions other than .enclst as enclst, and if you don't want to handle .enclst files as enclst, see below.

# Enclst Notation

The **Enclst Notation** consists of **Title** string and **ItemList** separated by a **blank line**, fx:

```
Plant Encyclopedias

https://www.bhg.com/gardening/plant-dictionary/ | Plant Encyclopedia
https://www.plantsnap.com/plant-encyclopedia/ | Plant Encyclopedia: Complete Online Plant and Flower ...
https://www.picturethisai.com/wiki | Online Plant Encyclopedia and Common Popular Plants
```

The ``first line`` is the **Title** of this Enclist which is separated by the **blank line** that is ``line 2`` from the remaining **ItemList**

Each part is defined as follows:

- Title  
A **single line string** that is terminated by a new line code like ``the first line``.  


- Blank line  
A blank line like ``line 2`` which has only line feed. The Encyclolist application recognizes the lines after this blank line as **itemlist.**

- ItemList  
Multiple strings where one line represents one item.

## Title

The **Title** is a **single line string** that is terminated by a new line code.  

If there are multiple lines before the first blank line, only the first line will be recognized as the title. 

```
Plant Encyclopedias, this is the title of this Enclst
This line is not title, just be ignored
This lie is also not title

https://www.bhg.com/gardening/plant-dictionary/ | Plant Encyclopedia
https://www.plantsnap.com/plant-encyclopedia/ | Plant Encyclopedia: Complete Online Plant and Flower ...
https://www.picturethisai.com/wiki | Online Plant Encyclopedia and Common Popular Plants
```

Note that the current version of the Encyclolist application simply ignores the rest of the lines, but future versions may interpret those lines to have some special meaning. Anyway, currently only the ``first line`` is recognized as the **title**

## Item List
The item list is lines of items each line consists of the **URL**, a vertical bar **|** and **item title** as follows:

```
https://www.bhg.com/gardening/plant-dictionary/ | Plant Encyclopedia
```

The Encyclolist application use the above **URL** as a bookmark link and **item title** as a line title.

More precisely, the Encyclolist application recognizes the first vertical bar delimited forward as the **URL** and the rest as the **item title**. So even if the item title string itself contains **|** , they are treated as part of the title normally.

```
https://www.bhg.com/gardening/plant-dictionary/ | ItemTitle |no problem|
```

FYI **|** is not a character that can be used in URLs so there is no real case where it appears in URLs. But in case you put **|** inside your URL, The Encyclolist application miss-recognizes the first half of the string separated by **|** as the URL.

The Encyclolist application simply discards lines that cannot be recognized as item. More precisely if there is no **|**, this line just be ignored.

## Special case

In case the **first line is blank**, the Encyclolist application recognizes that this enclst has **blank title** whcih consist of only brank character. If you want to omit the title, start with a blank line like this.

```

https://www.bhg.com/gardening/plant-dictionary/ | Plant Encyclopedia
https://www.plantsnap.com/plant-encyclopedia/ | Plant Encyclopedia: Complete Online Plant and Flower ...
https://www.picturethisai.com/wiki | Online Plant Encyclopedia and Common Popular Plants
```

In case there are **no blank lines**, the Encyclolist application recognizes that the first line is the **title** and this ecnlst has **blank ItemList** which has no item. This is probably not the result you wanted, you simply forgot to start with a blank line to omit the title.

In case there are **several blank lines**, The Encyclolist application recognizes as **title** of the first line and as **ItemList** as remaining. Also, the Encyclolist application simply discards lines that cannot be recognized as item. As result, these multi-blank line enclst is recognized as the same as normal single blank line enclst

```
Plant Encyclopedias

https://www.bhg.com/gardening/plant-dictionary/ | Plant Encyclopedia

https://www.plantsnap.com/plant-encyclopedia/ | Plant Encyclopedia: 
Complete Online Plant and Flower ...

https://www.picturethisai.com/wiki | Online Plant Encyclopedia and Common Popular Plants
```

