# code-quiz-project-


Objective
---------

The objective of this project was to further enhance the students knowledge of Javascript
and the capabilities of "Set Time Interval" when used with Javascript to create an
application .  Developer was also introduced to JSON and it ability to manipulate data when using local storage.

Foundation of Application
-------------------------

The application's main premise was to move from one page to another asking the user a
multiple choice question with the user determining the best answer . The process was monitored by an overall timer and if the user selected the correct answer the timer continued , if the user chose the incorrect answer , time would be taken off the clock 
giving the user less time to complete the remaining questions .  Each question itself was a time event and if the user didn't answer the question in the time interval of the  asked question , the next question would be posed and a new timer would be set . If the user failed to answer the question in the alloted time given him/her , the application would end , e.g, if you were alloted 20 seconds to answer the first question and the user hadn't made a choice , the program would end but the second question might be made available.  The question would be answered and the application would total all scores up until the last question answered , present the user with a final tally and then give him / her the ability to store his/ her initials and the score received. Should the user answer all questions before the alloted time ran out, the timer would stop and the user would be presented the opportunity to log his / her results to local storage.

Validation
----------

The following scenarios were executed to see if the requirements of the project were met:

(a) 1st question was offered to the user and he / she didn't make a selection
    expected result - timer for question would expire , score would be shown to user
    and usr would log score and initials to Local Storage

(b) 1st and second question asked but time expired on 3rd question because of no action 
    taken by user
    expected result - score would be tallied for 1st two question with the possibility of the 3rd question being display and if so , the third question would be answered , although the clock has stopped , score totalled and the user given the chance to store name / score to local storage.

 (c) all questions asked / answered -  all questions answered by user
     expected results - if timer has remaining time left , the timer would sto and the user given the opportunity to log his / her initials / score to local storage.

Future enhancements
-------------------

the obvious enhancement would be to reduce the time of the event giving the user less time
to make a decision or expanding the number of questions while keeping the alloted time the same.  Either of these situations would result in the user / developer the ability to give a self assessment of his knowledge of the subject and make a decision on how to move forward should he / she want to further diversify their knowledge based on the objective of the quiz subject.
