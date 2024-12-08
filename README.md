# userChrome.css

My minimalistic Firefox userChrome.css. The configurations in linux-userChrome.css and win-userChrome.css are nearly identical and can be used on both Windows and Linux systems. Only minimal modifications were necessary to adapt them for different machines.

## Preview

![preview](./preview.png)

## How to Enable Custom CSS in Firefox:

1. Enable Custom Stylesheet Support:

   - Open Firefox and enter "about:config" in the address bar
   - Search for "toolkit.legacyUserProfileCustomizations.stylesheets"
   - Set this option to "true" by clicking the toggle button
   - Alternatively, you can set this in your user.js file

2. Locate Your Profile Folder:

   - Type "about:profiles" in the Firefox address bar
   - Look for the entry marked as "Root Directory" under your current profile
   - This is where you'll need to add your custom styles

3. Create the CSS Directory:

   - Navigate to your profile folder
   - Create a new folder named "chrome"
   - Place your userChrome.css file inside this chrome folder

4. Restart Firefox for the changes to take effect

## YouTube video about creating a Firefox browser theme

[How to Create Your Own Custom Firefox Theme](https://www.youtube.com/watch?v=bw_M7q3Mtag&t=197s)
