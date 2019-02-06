# cm-coding-challenge

My response to the cm-coding-challenge @ https://github.com/mcspud/cm-coding-challenge.

Using React, Redux, Reselect

Immutable is listed as a dependency but I haven't actually got round to integrating this yet.

The webpack config is currently set to DEV and will generate the appropriate HTML test page with a link to the JS bundle in public_html/js/dist.  Webpack should create the js/dist dir automatically but it may need to be manually created.  

### NOTE: When building the bundle the webpack config is setup so that the webpack executable is run from within the config folder.

In order to get up and running as quickly as possible I've lowered some of the versions of various dependencies and modified the webpack config to allow for module.exports etc...

Finally I've also chosen to fetch the raw data from the github repo and converted it to JSON on the fly in the action rather than load the txt file directly.

Search function is a basic indexOf across all record properties (case insensitive I believe although I may have removed that).  Search is initiated via enter/return.  Sorting works ASC and DESC and by default is off.  Pagination is basic but functional.

![Screen](/public_html/screenshot.png)

Feedback appreciated.
