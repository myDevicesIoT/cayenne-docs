# Welcome to the Cayenne Docs

## Introduction
I will be walking you through editing content from Cayenne's boutiful Documentation setup. This is a work-in-progress, and collaboration is always encouraged.


## Important Links
Markdown Cheatsheet (the syntax we will be using)

https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

MacDown (Markdown editor for Mac)

http://macdown.uranusjr.com/


## Getting Started
This section will highlight the common actions you might take while editing the docs. The instructions below describe the process using GitHub's built-in web editor.

### Making a minor edit
Let's say you find something incorrectly written or you would like to update some text. First, you would find the main section the article is located in. 

**We'll use Getting Started for our example:**

1. Navigate to the Home directory of the repo by clicking cayenne-docs at the top of the page.
2. Then, select the docs directory by clicking the link.
3. In that folder, you will see the various high-level sections of the Docs. Select the GETTINGSTARTED.md by clicking it.
4. You will now see a preview of this section. Above the preview, on the grey bar, you will see a pencil icon. Click that to begin editing.
5. Find the portion of text you would like to edit. Make your changes, and then preview them by selecting the eye icon labeled "Preview changes".
6. Once you are satisfied with the results, click Commit changes. 
*(If you want to add some style, code, or specialized text, follow the link to the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for a quick breakdown. If you want to add an image, follow the steps listed below.)*

### Adding an image to your edit
This step is a little more tricky and involves uploading your image through Wordpress.

**We'll use adding a screenshot for our example:**

1. Login to the [Cayenne Wordpress admin panel](http://www.cayenne-mydevices.com/wp-admin).
2. Navigate to the Media menu, and select the [Add New](http://www.cayenne-mydevices.com/wp-admin/media-new.php) link.
3. Click "Select Files" and upload your image.
4. When the upload is complete, click the Edit link located the right of the thumbnail.
5. On this screen, you will find a few different things you'll need to copy and enter into the example code below to embed your image. If your image is larger than 660px, you will have to continue to the 6th step as well.

    **File URL:** IMAGE_URL <br/>
    **Width:** WIDTH (If the width is greater than 660px, goto step 6 to get the correct size)<br/>
    **Height:** HEIGHT <br/>
    **Alt:** A short description of this image

6. If your width is greater than 660px, stay on the Edit Media page:
   * Click on the "Edit Image" button located below your uploaded media.
   * A new set of tools appears, and the to right of the image you will see a menu called "Scale Image". 
   * In the first box located below "New dimensions", enter 660. 
   * This will give you the appropriate size ratio for your large image. 
   * Use the 660 for the width, and use the number to the right of it for the height.
7. Fill out the example code below with your new data. Paste the code into place and preview your changes.
    
**Image Example Code**
```

<p style="text-align:center"><br/><img src="IMAGE_URL" width="WIDTH" height="HEIGHT" alt="ALT"><br/><br/></p>

```

