# Welcome to Comfy Classroom
[Project Deployment via Expo.io](https://expo.io/@mgutierrez/projects/comfy-app)

[Inital Project Proposal](https://docs.google.com/document/d/1rQRC_19CSoVAdtN6KrDOg8cQ6wrSJf2Ig5gmwA9D-Ng/edit#)

## What is this app?
Comfy Classroom is intended to be a moble resource for teachers as their student retrun to the classroom. It has the ability for tecahers to jot down notes about their students (which are then rendered in an easy-to-access scrollable list), refer back to them
on an as-needed basis, and additionally flag which students may require additional academic assistance.

### Comfy Classroom Home Page:

<img width="300" alt="homepage_loaded" src="https://user-images.githubusercontent.com/63027187/114330955-e513e380-9b10-11eb-89e9-7182077db843.png">

### Example of a Rendered Student Details Page:

<img width="300" alt="student_detailed" src="https://user-images.githubusercontent.com/63027187/114330976-f3fa9600-9b10-11eb-9221-f10fa4d91478.png">

### Instruction Page:

<img width="300" alt="instruction_page" src="https://user-images.githubusercontent.com/63027187/114330908-c6155180-9b10-11eb-8799-3b1a9c85a8ba.png">

### Resources Page: 

<img width="300" alt="resources_page" src="https://user-images.githubusercontent.com/63027187/114330933-d4fc0400-9b10-11eb-8df4-01b62a2e9ae3.png">


## Component Overview:

Comfy Classroom's component hierarchy is straight-forward. App.js imports Welcome.js, Headerbar.js and StudentAdd.js, the latter hosting the "meat" of the application. StudentAdd.js was the most demanding to build. I
My data (here, a given class' students) is stored as an array of objects. The appropriate indicies are matched using a filter function so that the user selection corresponds with the intended student. The roster is passed into the details modal, displaying the inputed strings from when the object was created by the user.

<img width="999" alt="Screen Shot 2021-04-12 at 9 47 03 AM" src="https://user-images.githubusercontent.com/63027187/114405722-f393e680-9b74-11eb-8ee8-77bff552fa21.png">


In Welcome.js, two buttons at the top of the home page allow the user to access the instruction and resource modals. This code was straightforward, albeit somewhat rote to write. All resources are accessed via React Native's linking component and are wrapped in a Touchable Opacity component to mimic a traditional hyperlink.

<img width="1159" alt="Screen Shot 2021-04-12 at 9 48 04 AM" src="https://user-images.githubusercontent.com/63027187/114405162-65b7fb80-9b74-11eb-8241-04af23e85b93.png">


# Shipping Comfy Classroom - An Exploration of PM Duties
In the below section I document the development process for this application. 

## What was the inspiration for this app? What purpose does it serve?
This app was inspired by conversations with my sister, an 8th Grade Civics teacher in Chelsea, MA. Having told me on numerous times how many of her students are apprehensive about returning to in-person instruction,
I built this app to serve as a go-to dashboard for teachers as their classrooms return to normalacy. Her students were hit incredibly hard by the COVID-19 pandemic, both in-terms of the personal 

## What was the process for approaching this application? 
Given my interest in purusing a role in product management, I chose to approach this project in a manner, that based on my current understanding of the role, would provide a simulation of what a PM's role in such a product may be.
Obviously my focus was still on engineering this application, but I chose to monitor my progress with the project, and in a somewhat contrived manner, held myself accountable as a PM might do for their team.
Following discussion of my code I've prepared some brief thoughts regarding my experience "managing" this product. For more detail thoughts, feel free to look at my Dev.to post.

### Determining what to build and which features to prioiritize:
To the extent possible, I wanted this project's ultimate outcome to be delivery of a product that satisfied users' needs. How did I identify these needs?
Prior to beginning design / development of my application, I leaned on my network to solicit input from actual teachers. I [used SurveyMonkey](https://www.surveymonkey.com/r/39LPKG7) with the intention of assesing the following:
- Can I identify my userbase? Do survey respondants intend to use my app, and with what frequency? What would inhibit usage?
- Can I categorize how respondants believe their students feel about returning to in-person instruction?
- What features would educators find most valuable to include in an application that target teachers providing in-person instruction?

First and foremost, it's important to state that my survey's utility suffered from:
- A smaller than anticipated (n=10) sample size
- Fewer than 40% of respondents know me personally and that may have introduced bias into my results
- Inability to ask more than 10 questions and use all question formats (I did not pay for a premium product from SurveyMonkey), forcing me to rely on more qualitiative questions

Regarding the above survey objectives, I feel as though I was most successful in 
- Learning how my respondants percieve the shift back to in-person instruction and how they believe their students feel about this transition
- Learned which proposed features my users would find most valuable

I was surpised to learn that my respondants did not feel that their students were particularly concerned about returning to the classroom. The majority of respondants believe their students are neutral/ambivalent about returning to class.

<img width="680" alt="Screen Shot 2021-04-11 at 9 43 06 PM" src="https://user-images.githubusercontent.com/63027187/114330850-a3833880-9b10-11eb-9833-c10553f7e7e4.png">

I was surpised to learn that my respondants did not see any use in a chat feature in the application. As detailed in my [original project proposal](https://docs.google.com/document/d/1rQRC_19CSoVAdtN6KrDOg8cQ6wrSJf2Ig5gmwA9D-Ng/edit#), I had originally wanted to use Socket.io to incorporate a live chat where students could anonymously communicate their concerns to teachers. 
Not a single respondant prioritized this feature. Rather, my sample equally weighted the importance of my other three proposed features.
Needless to say, this dictated my design and engineering process greatly (and admittedly) made me feel a little less concerned about shipping my app by the 04/11 deadline. 

<img width="680" alt="Screen Shot 2021-04-11 at 9 47 46 PM" src="https://user-images.githubusercontent.com/63027187/114330834-97977680-9b10-11eb-9516-8626e46c00a7.png">

Lastly, my survey confirmed the utility of this application (albeit, as mentioned above, answers could have been shaped by bias). Just under 80% of my respondants said that this application, if shipped with the proposed features, would provide a better understanding of how their studetns are feeling. 

<img width="680" alt="Screen Shot 2021-04-11 at 9 50 42 PM" src="https://user-images.githubusercontent.com/63027187/114330780-78004e00-9b10-11eb-9d33-c0d0052207ad.png">


### Crafting User Stories:
The above survey provided me with a springboard for figuring out what my userbase (teachers) would find useful in my app. Based on the survey results, I drafted the following User Stories to guide my build:

As a user, I want
- to use an application that lets me know which students require additional emotional and academic support. 
- to have a clean and seamless mobile experience.
- to have an app that displays students' status, whether it be pertaining to academics or emotional state.

I added the following user stories to supplement the above: 
As a user, I want
- to be provided with accurate (no political bias) and useful resources for educators
- to be provided with clear instructions for app usage
- to have the ability to take detailed notes about my students

## Determining my MVP:
Having worked through my user stories, I developed the following description of my MVP:

Comfy classroom will be a mobile application intended to serve as a quick reference and aid for teachers. The app will revolve around an "attendance-like" list where teachers can set statuses for their students and refer back to them on an as-needed basis. The application will additionally have easy-to-access resources (perhaps Youtube videos from CDC, DOE, local shool district, etc) and an instruction section. This application must be shipped by 10 AM EST 04/12


## Resources Consulted: 
I consulted the resources below as I built this application. I've attempted to categorize them to serve as a future React Native resource for myself.

### Learning React Native
- [React Native - The Practical Guide [2021 Edition] Created by 
Academind by Maximilian Schwarzmüller
, 
Maximilian Schwarzmüller](https://www.udemy.com/course/react-native-the-practical-guide/)
- [Setting up the React Native Environment](https://reactnative.dev/docs/environment-setup)
- [Expo Documentation](https://docs.expo.io/)

### Design
- [Color Palette](https://icolorpalette.com/download/palette/461584_color_palette.jpg)
- [Color Palette Pt. 2](https://icolorpalette.com/347905_617c12_304a24_508053_a9dcc6)

### Engineering
- [Stack Overflow - Rendering two items in flatlist](https://stackoverflow.com/questions/49189181/how-can-i-render-2-items-in-a-flatlist-in-react-native-and-redux)
- [Stack Overflow - Index Manipulation w/ React Hooks](https://stackoverflow.com/questions/60699385/selecting-item-in-array-by-index-while-using-react-hooks)
- [React Native Hooks - Best Practices](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)

### Components
- [Native Base](https://docs.nativebase.io/Components.html#Components)
- [Brief Blurb on React Native](https://www.codeinwp.com/blog/react-native-component-libraries/)
- [Icon Visual Dictionary](https://github.com/akhil-geekyants/icon-list/blob/master/screenshots/ios.gif)
- [React Native Dev Documentation - Modals](https://reactnative.dev/docs/modal)
- [Stack Overflow - Creating Modals](https://stackoverflow.com/questions/53446933/simple-way-to-create-a-pop-up-window-with-react-native)

### Debugging
- [Stack Overflow - Console Logging when using an Emulator](https://stackoverflow.com/questions/30115372/how-to-do-logging-in-react-native)
