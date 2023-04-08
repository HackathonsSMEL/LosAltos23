# LosAltos23
Project for Los Altos Hacks 2023

This project is a google extension that recognizes the important parts of an online passage or article using an ML software and gives the user the option to either highlight, underline, or bold those important parts. 

This project was inspired by struggles we face as students in this growing online world, where we are often reading articles online and struggle to retain important information in such long passages. 

This tool allows us to easily find and absord the most important parts of an online passage through machine learning technology that identifies the key words and details throughout the passage as a whole.

We believe that this tool can be applicable to all kinds of students and people, and will be useful for students of all levels of learning. In the future, we plan to polish the detail selection and user experience as a whole.

The items in the js folder take the passage or article from the chrome tab in and then use the OpenAI's DaVinci API to determine what the important parts in them are. We then take the settings on the user's google extension portal to mark the areas that are important to the passage.

The items in the "popup" folder contain the front end development code as well as the basic javascript behind it. They dictate how the extension looks to the user and how the user interacts with the extension. We plan on adding more features relating to frequency of important details as well as summarization tools.