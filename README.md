# Welcome to the Cayenne Docs

## Introduction
I will be walking you through editing content from Cayenne's boutiful Documentation setup. This is a work-in-progress, and collaboration is always encouraged.


## Important Links
Markdown Cheatsheet (the syntax we will be using)<br/>
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

MacDown (Markdown editor for Mac)<br/>
http://macdown.uranusjr.com/


## Getting Started
This section will highlight the common actions you might take while editing the docs. The instructions below describe the process using GitHub's built-in web editor.

### Switching to the Staging version
Are you looking for the Staging version of the Docs? On the main repo page, right above the files, select the dropdown labeled Branch. From there, select the Staging branch. You are now in the Staging version of the Docs.

### Making a text edit
Let's say you find something incorrectly written or you would like to update some text. First, you would find the main section the article is located in. 

**We'll use Getting Started for our example:**

1. Navigate to the Home directory of the repo by clicking cayenne-docs at the top of the page.
2. Then, select the docs directory by clicking the link.
3. In that folder, you will see the various high-level sections of the Docs. Select the GETTINGSTARTED.md by clicking it.
4. You will now see a preview of this section. Above the preview, on the grey bar, you will see a pencil icon. Click that to begin editing.
5. Find the portion of text you would like to edit. Make your changes, and then preview them by selecting the eye icon labeled "Preview changes".
6. Once you are satisfied with the results, click Commit changes. 
*(If you want to add some style, code, or specialized text, follow the link to the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for a quick breakdown. If you want to add an image, follow the steps listed below.)*

**Image Example Code**
```

<p style="text-align:center"><br/><img src="IMAGE_URL" width="WIDTH" height="HEIGHT" alt="ALT"><br/><br/></p>

```

### I need to add more anchor links, is there sample code for this?
If you need to add additional anchor links to a section in the Docs, use the sample code below and fill in the anchor link (e.g. #apis) without the # sign. 

**In this example, we're linking to a fictional #help-me section**
```

<p id="help-me" class="anchor-link"></p>

```

**Sample code for copy + pasting purposes**
```

<p id="ANCHOR_LINK_HERE" class="anchor-link"></p>

```