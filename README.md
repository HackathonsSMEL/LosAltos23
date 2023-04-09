# LosAltos23
Project for Los Altos Hacks 2023

Read Better is a google extension that identifies the most important details of any highlighted text. It operates as a javascript-based app with a very simple UI to fit for any visual needs (common symptom of ADHD). It uses a language-based machine learning model to analyze the highlighted text to identify what details are most useful and important to understand, helping to retain the main ideas and details.

ADHD is a prevalent disability in the world, with more than 3.5% of the world's population suffering from the disorder. One of our team members is part of this 3.5%, dealing with the effects of an ADHD-ridden education and lifestyle. One of his biggest problems in learning is focused reading, where he finds himself unable to focus on one text for a long period of time. We designed Read Better to help him - along the millions of others across the world - have the same level of focused education that the rest of us are so lucky to have. 

We believe that this tool can be applicable to all kinds of students and people, and will be useful for students of all levels of learning. In the future, we plan to polish the detail selection and user experience as a whole.

The items in the js folder take the passage or article from the chrome tab in and then use the OpenAI's DaVinci API to determine what the important parts in them are. We then take the settings on the user's google extension portal to mark the areas that are important to the passage.

The items in the "popup" folder contain the front end development code as well as the basic javascript behind it. They dictate how the extension looks to the user and how the user interacts with the extension. We plan on adding more features relating to frequency of important details as well as summarization tools.