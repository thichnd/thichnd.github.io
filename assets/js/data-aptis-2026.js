let jsonListening = [
    // Practice 1
    { "questions": [
    {
      "title": "Question 1: A person calls a friend about his new car. How much does the small car cost him?",
      "answers": [
        { "name": "A. 3250 pounds" },
        { "name": "B. 3550 pounds" },
        { "name": "C. 4250 pounds" }
      ],
      "correctAnswer": "A"
    },
    {
      "title": "Question 2: Two people are talking about meeting for dinner. What time does Ahmed meet Rose?",
      "answers": [
        { "name": "A. half past seven" },
        { "name": "B. quarter past seven" },
        { "name": "C. quarter to eight" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 3: A man calls the teleshop. What is the teleshop number?",
      "answers": [
        { "name": "A. 102030" },
        { "name": "B. 201030" },
        { "name": "C. 301020" }
      ],
      "correctAnswer": "B"
    },
    {
      "title": "Question 4: A man is talking to a shopping assistant. What color top is he going to buy?",
      "answers": [
        { "name": "A. Green" },
        { "name": "B. Blue" },
        { "name": "C. Black" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 5: Anna is calling her brother Max. What does Anna do later in the afternoon?",
      "answers": [
        { "name": "A. Stay late at the office" },
        { "name": "B. Pick up her kids" },
        { "name": "C. Hang out with friends" }
      ],
      "correctAnswer": "A"
    },
    {
      "title": "Question 6: Vincent is calling James. Why does Vincent call James?",
      "answers": [
        { "name": "A. To say hello" },
        { "name": "B. To suggest a drink" },
        { "name": "C. To arrange meeting" }
      ],
      "correctAnswer": "B"
    },
    {
      "title": "Question 7: A man is talking about his trip. What did he enjoy last year?",
      "answers": [
        { "name": "A. Go for a walk" },
        { "name": "B. Go picnic" },
        { "name": "C. Go cycling" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 8: A woman is talking about her job. What encouraged her to become a scientist?",
      "answers": [
        { "name": "A. Her mother" },
        { "name": "B. A large stone" },
        { "name": "C. The computer" }
      ],
      "correctAnswer": "B"
    },
    {
      "title": "Question 9: A man is talking about the city concert. How will the concert end?",
      "answers": [
        { "name": "A. The city's favorite group" },
        { "name": "B. Fireworks performance" },
        { "name": "C. Singing from orchestra" }
      ],
      "correctAnswer": "A"
    },
    {
      "title": "Question 10: A man is talking about his family trip. What does the man's wife enjoy?",
      "answers": [
        { "name": "A. walking" },
        { "name": "B. shopping" },
        { "name": "C. photography" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 11: Jana is talking to her friend. What does Jana's sister look like?",
      "answers": [
        { "name": "A. Curly hair" },
        { "name": "B. Short" },
        { "name": "C. Thin" }
      ],
      "correctAnswer": "B"
    },
    {
      "title": "Question 12: A man is calling his sister. Where are they going to meet?",
      "answers": [
        { "name": "A. At the university" },
        { "name": "B. At the station" },
        { "name": "C. At the park" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 13: A woman is talking about her vacation. What is the relationship between the speaker and Lisa?",
      "answers": [
        { "name": "A. Best friends" },
        { "name": "B. Mother and daughter" },
        { "name": "C. Teacher and student" }
      ],
      "correctAnswer": "A"
    },
	{
      "title": "Question 14.1: Four people are talking about their exercise preferences. Speaker A enjoys:",
      "answers": [
        { "name": "A. Mountain biking" },
        { "name": "B. Walking" },
        { "name": "C. Going for a run" }
      ],
      "correctAnswer": "A"
    },
    {
      "title": "Question 14.2: Four people are talking about their exercise preferences. Speaker B enjoys:",
      "answers": [
        { "name": "A. Mountain biking" },
        { "name": "B. Walking" },
        { "name": "C. Going for a run" },
        { "name": "D. Horse riding" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 14.3: Four people are talking about their exercise preferences. Speaker C enjoys:",
      "answers": [
        { "name": "A. Mountain biking" },
        { "name": "B. Walking" },
        { "name": "C. Going for a run" },
        { "name": "D. Horse riding" }
      ],
      "correctAnswer": "B"
    },
    {
      "title": "Question 14.4: Four people are talking about their exercise preferences. Speaker D enjoys:",
      "answers": [
        { "name": "A. Mountain biking" },
        { "name": "B. Walking" },
        { "name": "C. Going for a run" },
        { "name": "D. Horse riding" }
      ],
      "correctAnswer": "D"
    },
    {
      "title": "Question 15.1: Two people discussing the Internet. There is too much information on the Internet.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A"
    },
    {
      "title": "Question 15.2: Finding information on the Internet requires skills.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 15.3: The use of Internet affects the way we think.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B"
    },
    {
      "title": "Question 15.4: The Internet makes young people less patient.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 16.1: Listen to an announcer talking about a newly released novel. What does the announcer say about the new novel?",
      "answers": [
        { "name": "A. It is different from his earlier works" },
        { "name": "B. It is romantic and soft" },
        { "name": "C. It is less famous than his earlier works" }
      ],
      "correctAnswer": "A"
    },
    {
      "title": "Question 16.2: Listen to an announcer talking about a newly released novel. What does the announcer say the writer should do in the future?",
      "answers": [
        { "name": "A. The writer should continue to write this genre" },
        { "name": "B. The writer should go back to his original genre" },
        { "name": "C. He should listen to critics before writing his next work" }
      ],
      "correctAnswer": "C"
    },
    {
      "title": "Question 17.1: Listen to an expert talking about professionalism. What does the expert say being professional is all about?",
      "answers": [
        { "name": "A. To maintain positive attitude" },
        { "name": "B. To create good working environment" },
        { "name": "C. To make good impressions" }
      ],
      "correctAnswer": "A"
    },
    {
      "title": "Question 17.2: Listen to an expert talking about professionalism. What does the expert say about the definition of professionalism?",
      "answers": [
        { "name": "A. It is the same of 40 years ago" },
        { "name": "B. Our definition of it is changing" },
        { "name": "C. It will not change anymore" }
      ],
      "correctAnswer": "B"
    }
  ]
    },

    // Practice 2
      {
    "questions": [
      {
        "title": "Question 1: A woman is talking about her house. What is she going to change in their house?",
        "answers": [
          { "name": "A. The window" },
          { "name": "B. The car" },
          { "name": "C. The computer" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 2: A receptionist is checking the client list of a clinic. How many clients are Americans?",
        "answers": [
          { "name": "A. One" },
          { "name": "B. Two" },
          { "name": "C. Three" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 3: Listen to Anna talking about her routine. Where does Anna go for a walk every morning?",
        "answers": [
          { "name": "A. park" },
          { "name": "B. neighborhood" },
          { "name": "C. college" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 4: Listen to a girl calling the cafe. What did she forget, and where did she leave it?",
        "answers": [
          { "name": "A. on the counter" },
          { "name": "B. in the corner" },
          { "name": "C. near the door" }
        ],
        "correctAnswer": "B"
      },
      {
        "title": "Question 5: Helen is calling a friend. Where is her family standing while seeing her off to college?",
        "answers": [
          { "name": "A. library complex" },
          { "name": "B. university area" },
          { "name": "C. Residential area" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 6: A tour guide is talking about the vacation list of activities. What can people do in the afternoon?",
        "answers": [
          { "name": "A. Join a dance class" },
          { "name": "B. Play golf" },
          { "name": "C. Go shopping" }
        ],
        "correctAnswer": "B"
      },
      {
        "title": "Question 7: Doctor's office is calling about a change in the appointment. When is the new appointment?",
        "answers": [
          { "name": "A. On Thursday 13th" },
          { "name": "B. On Thursday 30th" },
          { "name": "C. On Friday 14th" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 8: Alice is calling her friend. What did she lose?",
        "answers": [
          { "name": "A. A book" },
          { "name": "B. A laptop" },
          { "name": "C. A phone" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 9: The woman is calling a friend about meeting for dinner. How long does it take to get to the station?",
        "answers": [
          { "name": "A. 30 minutes" },
          { "name": "B. 40 minutes" },
          { "name": "C. 50 minutes" }
        ],
        "correctAnswer": "B"
      },
      {
        "title": "Question 10: Listen to a man talking about their train journey. What time did the train depart?",
        "answers": [
          { "name": "A. 9:00" },
          { "name": "B. 9:30" },
          { "name": "C. 10:00" }
        ],
        "correctAnswer": "B"
      },
      {
        "title": "Question 11: Listen to a woman asking about a flight. How much does the flight in the morning cost?",
        "answers": [
          { "name": "A. 300 pounds" },
          { "name": "B. 350 pounds" },
          { "name": "C. 400 pounds" }
        ],
        "correctAnswer": "B"
      },
      {
        "title": "Question 12: Listen to a friend talking about selling her music player. How much did she sell it for?",
        "answers": [
          { "name": "A. 50 dollars" },
          { "name": "B. 60 dollars" },
          { "name": "C. 40 dollars" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 13: Listen to a woman explaining why she was late. What is the main reason she gets late?",
        "answers": [
          { "name": "A. Overslept" },
          { "name": "B. Forgot something" },
          { "name": "C. Missed the train" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 14.1: Four people talking about exercise. Speaker A...",
        "answers": [
          { "name": "A. Have fun exercising with others" },
          { "name": "B. Improve work performance" },
          { "name": "C. Hate exercising" },
          { "name": "D. Find exercise tiring" }
        ],
        "correctAnswer": "B"
      },
      {
        "title": "Question 14.2: Four people talking about exercise. Speaker B...",
        "answers": [
          { "name": "A. Have fun exercising with others" },
          { "name": "B. Improve work performance" },
          { "name": "C. Hate exercising" },
          { "name": "D. Find exercise tiring" }
        ],
        "correctAnswer": "D"
      },
      {
        "title": "Question 14.3: Four people talking about exercise. Speaker C...",
        "answers": [
          { "name": "A. Have fun exercising with others" },
          { "name": "B. Improve work performance" },
          { "name": "C. Hate exercising" },
          { "name": "D. Find exercise tiring" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 14.4: Four people talking about exercise. Speaker D...",
        "answers": [
          { "name": "A. Have fun exercising with others" },
          { "name": "B. Improve work performance" },
          { "name": "C. Hate exercising" },
          { "name": "D. Find exercise tiring" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 15.1: Two people discussing Politics. Young people are more into politics.",
        "answers": [
          { "name": "A. Woman" },
          { "name": "B. Man" },
          { "name": "C. Both" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 15.2: Social media change politics.",
        "answers": [
          { "name": "A. Woman" },
          { "name": "B. Man" },
          { "name": "C. Both" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 15.3: People are now better informed on politics.",
        "answers": [
          { "name": "A. Woman" },
          { "name": "B. Man" },
          { "name": "C. Both" }
        ],
        "correctAnswer": "B"
      },
      {
        "title": "Question 15.4: More women pursue politics.",
        "answers": [
          { "name": "A. Woman" },
          { "name": "B. Man" },
          { "name": "C. Both" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 16.1: Listen to a writer talking about her experience. What helps her most in writing?",
        "answers": [
          { "name": "A. Writing every day for 15-20 minutes" },
          { "name": "B. Create dedicated periods for writing" },
          { "name": "C. Finding a quiet space to work" }
        ],
        "correctAnswer": "C"
      },
      {
        "title": "Question 16.2: What does the writer regret during her writer's block?",
        "answers": [
          { "name": "A. Refuse to seek advice of others" },
          { "name": "B. Ignoring feedback from editors" },
          { "name": "C. Writing without a plan" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 17.1: The radio is talking about a musician's career and latest albums. What has the musician decided regarding his singing career?",
        "answers": [
          { "name": "A. He will retire from singing professionally" },
          { "name": "B. He will make a comeback after a long break" },
          { "name": "C. He will inform fans about new albums" }
        ],
        "correctAnswer": "A"
      },
      {
        "title": "Question 17.2: The radio is talking about a musician's career and latest albums. What could the musician have achieved with his recent albums?",
        "answers": [
          { "name": "A. He could have been more successful" },
          { "name": "B. He could have inspired future generations in general" },
          { "name": "C. He could have gotten a bigger fan base" }
        ],
        "correctAnswer": "A"
      }
        ]
    },
    // Practice 3
        {
      "questions": [
        {
          "title": "Question 1: A mom is calling her son to remind him about picking up groceries. How much is an egg?",
          "answers": [
            { "name": "A. £1.50 (One pounds fifty)" },
            { "name": "B. £2.50 (Two pounds fifty)" },
            { "name": "C. £3.50 (Three pounds fifty)" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 2: An author is talking about her daily routine. When does she usually write?",
          "answers": [
            { "name": "A. In the mornings" },
            { "name": "B. In the afternoons" },
            { "name": "C. In the evenings" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 3: Jack is calling to invite a friend to his house. What color is Jack's house?",
          "answers": [
            { "name": "A. Blue" },
            { "name": "B. Green" },
            { "name": "C. Red" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 4: A man is calling his wife. Where will they meet?",
          "answers": [
            { "name": "A. At home" },
            { "name": "B. In the garden" },
            { "name": "C. Outside the shop" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 5: A man is talking about his eating habit. What time does he usually eat?",
          "answers": [
            { "name": "A. 6 o'clock" },
            { "name": "B. 7 o'clock" },
            { "name": "C. 8 o'clock" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 6: Julie is asking her professor about the assignment. When is the work due?",
          "answers": [
            { "name": "A. On Thursday morning" },
            { "name": "B. On Friday morning" },
            { "name": "C. On Saturday morning" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 7: James is talking about his family members. In what way are his mother and aunt alike?",
          "answers": [
            { "name": "A. They were both thin" },
            { "name": "B. They both had blue eyes" },
            { "name": "C. They both had long hair" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 8: A tour guide is introducing a tourist destination. How many people live in the town?",
          "answers": [
            { "name": "A. 8,000" },
            { "name": "B. 9,000" },
            { "name": "C. 10,000" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 9: A man and a woman are talking about their old school days. What was the man's favorite thing about school?",
          "answers": [
            { "name": "A. Math classes" },
            { "name": "B. Geography classes" },
            { "name": "C. History classes" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 10: Jorge is calling his friend about their plan for the weekend. What time does the football match start?",
          "answers": [
            { "name": "A. 11 p.m" },
            { "name": "B. 1 p.m" },
            { "name": "C. 6 p.m" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 11: A man is talking about his routine after work. What is the man going to do after work?",
          "answers": [
            { "name": "A. Goes running" },
            { "name": "B. Cycles home" },
            { "name": "C. Meets his client" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 12: A professor is talking to his student. What does the professor ask his student to do?",
          "answers": [
            { "name": "A. Speak at a conference" },
            { "name": "B. Write another thesis" },
            { "name": "C. Tutor another student" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 13: Two friends are talking about their favorite activities. What is the woman's favorite form of entertainment?",
          "answers": [
            { "name": "A. Reading books" },
            { "name": "B. Going to the theatre" },
            { "name": "C. Playing chess with her cousin" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 14.1: Four people talking about protecting the environment. Speaker A...",
          "answers": [
            { "name": "A. Using less electricity" },
            { "name": "B. Using less water" },
            { "name": "C. Shopping online" },
            { "name": "D. Not driving to work" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 14.2: Four people talking about protecting the environment. Speaker B...",
          "answers": [
            { "name": "A. Using less electricity" },
            { "name": "B. Using less water" },
            { "name": "C. Shopping online" },
            { "name": "D. Not driving to work" }
          ],
          "correctAnswer": "D"
        },
        {
          "title": "Question 14.3: Four people talking about protecting the environment. Speaker C...",
          "answers": [
            { "name": "A. Using less electricity" },
            { "name": "B. Using less water" },
            { "name": "C. Shopping online" },
            { "name": "D. Not driving to work" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 14.4: Four people talking about protecting the environment. Speaker D...",
          "answers": [
            { "name": "A. Using less electricity" },
            { "name": "B. Using less water" },
            { "name": "C. Shopping online" },
            { "name": "D. Not driving to work" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 15.1: Two educators discussing university. The internet makes education more accessible.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 15.2: Social interactions are essential to university life.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 15.3: A diverse curriculum is not always a good thing.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 15.4: Competitions between universities should be encouraged.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 16.1: An office worker talking about working from home. What does she say?",
          "answers": [
            { "name": "A. There are no distractions" },
            { "name": "B. Not good as expected" },
            { "name": "C. Video calls are superior to face-to-face conversation" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 16.2: According to the author, working from home...",
          "answers": [
            { "name": "A. Needs a big home office" },
            { "name": "B. Does not require self-motivation" },
            { "name": "C. Depends on your situation and personality" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 17.1: Listen to an expert talking about the importance of sleep. The most important thing to help sleep well is...",
          "answers": [
            { "name": "A. Blocking noise and light is the key" },
            { "name": "B. Beds are best for sleeping" },
            { "name": "C. Resting sufficiently is necessary" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 17.2: Listen to an expert talking about the importance of sleep. What is the public attitude towards sleeping?",
          "answers": [
            { "name": "A. The media overemphasize the subject" },
            { "name": "B. The young generation tends to have unhealthy sleeping habits" },
            { "name": "C. Sleeping quality has deteriorated over time" }
          ],
          "correctAnswer": "A"
        }
      ]
    },
    // Practice 4
        {
      "questions": [
        {
          "title": "Question 1: A man is calling his friend, Maria. When will he see her?",
          "answers": [
            { "name": "A. at 9 am on Sunday" },
            { "name": "B. at 10 am on Saturday" },
            { "name": "C. at 8 am on Sunday" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 2: A man is calling his colleague about a meeting with clients. When will the meeting start?",
          "answers": [
            { "name": "A. at 9.15" },
            { "name": "B. at 10.15" },
            { "name": "C. at 11.15" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 3: A customer is calling the hotline of a department store. Which number to press in order to buy a computer?",
          "answers": [
            { "name": "A. One" },
            { "name": "B. Two" },
            { "name": "C. Three" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 4: An expert is talking about the lack of satisfaction at work. What should be the solution?",
          "answers": [
            { "name": "A. Raise the salary" },
            { "name": "B. Seek a new job" },
            { "name": "C. Request a transfer" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 5: A man is talking to his friend. Why does he need to learn to drive?",
          "answers": [
            { "name": "A. He lost his driving license" },
            { "name": "B. He has to drive to work" },
            { "name": "C. He bought a new car" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 6: A tour guide is talking about birds' behaviors. What do birds do in the winter?",
          "answers": [
            { "name": "A. Stay together for group protection" },
            { "name": "B. Building nests" },
            { "name": "C. Migrate to a new place" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 7: Two friends are talking about their school days. What was the woman good at?",
          "answers": [
            { "name": "A. Swimming" },
            { "name": "B. Plays football" },
            { "name": "C. Running" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 8: Pierre and Emma are talking together about the picnic on the weekend. What will they bring to the picnic?",
          "answers": [
            { "name": "A. Drinks" },
            { "name": "B. Salads" },
            { "name": "C. Food" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 9: A tour guide is talking about the group's traveling schedule. Where will the group wait for the bus?",
          "answers": [
            { "name": "A. by the hotel's side entrance" },
            { "name": "B. behind the hotel's main entrance" },
            { "name": "C. by the hotel's main entrance" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 10: Listen to the announcement from a travel agent representative. Why is the air travel cancelled?",
          "answers": [
            { "name": "A. Engine failure" },
            { "name": "B. Poor weather conditions" },
            { "name": "C. Delay at transit spot" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 11: A saleswoman is talking to a customer about a house. What is not original?",
          "answers": [
            { "name": "A. Floor" },
            { "name": "B. Furniture" },
            { "name": "C. Architecture" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 12: Listen to a weather forecast. Where will the weather be best?",
          "answers": [
            { "name": "A. In the south" },
            { "name": "B. In the west" },
            { "name": "C. In the east" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 13: Adam is calling his friend. When will he need the computer?",
          "answers": [
            { "name": "A. Tuesday" },
            { "name": "B. Friday" },
            { "name": "C. Saturday" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 14.1: Four people talking about doing arts. Speaker A...",
          "answers": [
            { "name": "A. Doing as a social activity" },
            { "name": "B. Doing arts with children" },
            { "name": "C. Doing arts as part of the job" },
            { "name": "D. Doing arts alone" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 14.2: Four people talking about doing arts. Speaker B...",
          "answers": [
            { "name": "A. Doing as a social activity" },
            { "name": "B. Doing arts with children" },
            { "name": "C. Doing arts as part of the job" },
            { "name": "D. Doing arts alone" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 14.3: Four people talking about doing arts. Speaker C...",
          "answers": [
            { "name": "A. Doing as a social activity" },
            { "name": "B. Doing arts with children" },
            { "name": "C. Doing arts as part of the job" },
            { "name": "D. Doing arts alone" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 14.4: Four people talking about doing arts. Speaker D...",
          "answers": [
            { "name": "A. Doing as a social activity" },
            { "name": "B. Doing arts with children" },
            { "name": "C. Doing arts as part of the job" },
            { "name": "D. Doing arts alone" }
          ],
          "correctAnswer": "D"
        },
        {
          "title": "Question 15.1: Urban farming discussion. Living space is more important than farming space.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 15.2: Urban farming discussion. Farming space is appealing.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 15.3: Urban farming discussion. Farming space will benefit the urban economy.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 15.4: Urban farming discussion. Farming space is in need of more food.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 16.1: A critic talking about a newly broadcast TV series. What happened to the TV series?",
          "answers": [
            { "name": "A. It didn't receive enough investment in the early stage" },
            { "name": "B. It was overlooked by critics" },
            { "name": "C. It caught the audience's attention from the start" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 16.2: According to the expert, what is the series' potential?",
          "answers": [
            { "name": "A. New seasons will be produced due to great demand" },
            { "name": "B. It inspires young filmmakers to follow a new style" },
            { "name": "C. It can help reach new customers" }
          ],
          "correctAnswer": "C"
        },
            {
          "title": "Question 17.1: Listen to an advertising expert talking about the advertising industry. What does the expert say about the negative side of advertising?",
          "answers": [
            { "name": "A. Series are damaged by overexposure" },
            { "name": "B. Advertisements might sometimes be repetitive, which is annoying" },
            { "name": "C. Advertising costs the same amount of money to produce a movie" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 17.2: Listen to an advertising expert talking about the advertising industry. In what way can advertising affect sports?",
          "answers": [
            { "name": "A. They help to attract more fans" },
            { "name": "B. They can boost ticket sales and sales of sports-related items" },
            { "name": "C. They can generate negative publicity for the sport" }
          ],
          "correctAnswer": "C"
        }
      ]
    },
    // Practice 5
        {
      "questions": [
        {
          "title": "Question 1: Listen to an announcement. Which platform to wait for the train?",
          "answers": [
            { "name": "A. Platform 2" },
            { "name": "B. Platform 5" },
            { "name": "C. Platform 8" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 2: An artist is talking about her job. What is the difference in her job?",
          "answers": [
            { "name": "A. She works from 9 to 5" },
            { "name": "B. She doesn't work on weekends" },
            { "name": "C. She works irregular hours" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 3: Listen to a conversation between the teacher and a parent. What will the father do?",
          "answers": [
            { "name": "A. Enroll him in summer school" },
            { "name": "B. Arrange private classes for his son" },
            { "name": "C. Talk to the principal" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 4: A woman is talking about her weekends. What did she do last week?",
          "answers": [
            { "name": "A. Went hiking" },
            { "name": "B. Stayed at home" },
            { "name": "C. Attended a party" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 5: A teacher and a student are talking about transportation. How does the teacher go to school?",
          "answers": [
            { "name": "A. He drives" },
            { "name": "B. He takes the bus" },
            { "name": "C. He walks" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 6: Anne is calling her daughter Sally. What does Anne need?",
          "answers": [
            { "name": "A. Eggs" },
            { "name": "B. Bread" },
            { "name": "C. Milk" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 7: A mom is talking to her son. What does he like to study?",
          "answers": [
            { "name": "A. Art" },
            { "name": "B. Science" },
            { "name": "C. History" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 8: A woman is talking about her family's holidays. What did the family do last year?",
          "answers": [
            { "name": "A. Traveled abroad" },
            { "name": "B. Camping" },
            { "name": "C. Went to the beach" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 9: A man is talking about how he goes to work. Why does he prefer traveling by train?",
          "answers": [
            { "name": "A. It's cheaper than biking" },
            { "name": "B. It's practical" },
            { "name": "C. It’s faster than flying" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 10: Listen to the instructions of a university. Where is the main office?",
          "answers": [
            { "name": "A. On the third floor" },
            { "name": "B. On the first floor" },
            { "name": "C. In the basement" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 11: A woman is talking about shopping places. Where is she going to go shopping?",
          "answers": [
            { "name": "A. At the downtown market" },
            { "name": "B. At a new shopping center" },
            { "name": "C. At the mall" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 12: A tour guide is making an announcement. Why was the tour canceled?",
          "answers": [
            { "name": "A. Not enough people" },
            { "name": "B. Bad weather" },
            { "name": "C. Transportation problems" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 13: A man is talking about his job. What does the man want to do next?",
          "answers": [
            { "name": "A. Become a writer" },
            { "name": "B. Become a chef again" },
            { "name": "C. Start teaching history again" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 14.1: Four people talking about online shopping. Speaker A...",
          "answers": [
            { "name": "A. It saves time" },
            { "name": "B. It is cheaper" },
            { "name": "C. Products are delivered" },
            { "name": "D. There are more choices" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 14.2: Four people talking about online shopping. Speaker B...",
          "answers": [
            { "name": "A. It saves time" },
            { "name": "B. It is cheaper" },
            { "name": "C. Products are delivered" },
            { "name": "D. There are more choices" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 14.3: Four people talking about online shopping. Speaker C...",
          "answers": [
            { "name": "A. It saves time" },
            { "name": "B. It is cheaper" },
            { "name": "C. Products are delivered" },
            { "name": "D. There are more choices" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 14.4: Four people talking about online shopping. Speaker D...",
          "answers": [
            { "name": "A. It saves time" },
            { "name": "B. It is cheaper" },
            { "name": "C. Products are delivered" },
            { "name": "D. There are more choices" }
          ],
          "correctAnswer": "D"
        },
        {
          "title": "Question 15.1: Local center discussion. Exhibitions should be different and diverse.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 15.2: Local center discussion. Traditional customs are gradually losing their significance.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 15.3: Local center discussion. Local festivals will disappear in the near future.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 15.4: Local center discussion. Schools are important in shaping future generations.",
          "answers": [
            { "name": "A. Woman" },
            { "name": "B. Man" },
            { "name": "C. Both" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 16.1: A TV producer sharing thoughts on the latest scripts. What does the producer think about the dialogues?",
          "answers": [
            { "name": "A. The characters' backgrounds are not adequately explored" },
            { "name": "B. They seem unrealistic" },
            { "name": "C. They reflect real-life conversations well" }
          ],
          "correctAnswer": "A"
        },
        {
          "title": "Question 16.2: How is the current industry demand affecting the quality of script production?",
          "answers": [
            { "name": "A. It is allowing for more thorough script development" },
            { "name": "B. It is leading to more innovative ideas" },
            { "name": "C. It is negatively influencing script production" }
          ],
          "correctAnswer": "C"
        },
        {
          "title": "Question 17.1: Listen to a critic giving opinions about a restaurant. What are the critic's opinions about the restaurant?",
          "answers": [
            { "name": "A. The food is not fresh" },
            { "name": "B. The service is not good" },
            { "name": "C. The chef lacks experience" }
          ],
          "correctAnswer": "B"
        },
        {
          "title": "Question 17.2: Listen to a critic giving opinions about a restaurant. What can compete with online food delivery?",
          "answers": [
            { "name": "A. Organic ingredients" },
            { "name": "B. Providing a ready-made pack for customers" },
            { "name": "C. Customers feel valued and welcome" }
          ],
          "correctAnswer": "C"
        }
      ]
    },
    // Practice 6 SUM
    {
  "questions": [
    {
      "title": "Question 1: What time do they meet?",
      "answers": [
        { "name": "A. 7.30pm" },
        { "name": "B. 6.30pm" },
        { "name": "C. 9.30pm" }
      ],
      "correctAnswer": "B",
      "Audio": "https://youtu.be/np45fcsNkUg",
      "Transcript": "Hey Alex, it’s me. Just wanted to remind you about our plan for tonight. We’re meeting at 6:30 PM, so try not to be late! I know you usually finish work around 6, so that should give you enough time to get there. If anything changes, just let me know. Oh, and by the way, Jake might join us a bit later, around 7:30 or so. Alright, see you soon!"
    },
    {
      "title": "Question 2: What did she like the most about the movie?",
      "answers": [
        { "name": "A. the car scenes" },
        { "name": "B. the fight scenes" },
        { "name": "C. the mountain scenes" }
      ],
      "correctAnswer": "C",
      "Audio": "https://youtu.be/DMFu7TyAmEk",
      "Transcript": "I watched the movie last weekend, and overall, I really enjoyed it. There were plenty of exciting moments, especially the fast car scenes at the beginning, which kept me on the edge of my seat. The fight scenes were also quite impressive, with a lot of action and energy. However, what stayed with me the most was the way the film showed the mountains. The wide shots of the snowy peaks and quiet valleys were absolutely beautiful and made the story feel much more powerful. Even days later, those mountain scenes are what I remember most clearly."
    },
    {
      "title": "Question 3: Where did they meet?",
      "answers": [
        { "name": "A. The parking lot" },
        { "name": "B. The front entrance" },
        { "name": "C. The school gate" }
      ],
      "correctAnswer": "B",
      "Audio": "https://youtu.be/Awk7AYe9_cw",
      "Transcript": "Hi May, it’s John. I just wanted to remind you that we’re meeting this afternoon to visit the art exhibition by Leonard Hughes at five o’clock. At first, I thought we could meet near the parking lot, or even wait by the school gate, but that area is usually very crowded at this time of day. So in the end, I think it’s best if we meet at the front entrance of Building A, where the exhibition is being held. I’ll be standing right next to the main doors at 4:45. If you’re running late, just give me a call. See you soon!"
    },
    {
      "title": "Question 4: What country will they study next semester?",
      "answers": [
        { "name": "A. France" },
        { "name": "B. Italy" },
        { "name": "C. Germany" }
      ],
      "correctAnswer": "A",
      "Audio": "https://youtu.be/kPr53Tcv75w",
      "Transcript": " Good morning, everyone. Before we finish today, I’d like to give you a quick overview of what we’ll be studying next semester. Some of you may remember that last year we focused on Germany, and before that, we spent quite a lot of time discussing Italian history and culture. However, next term, our main topic will be France. We’ll look at key historical events, social changes, and how the country influenced Europe as a whole. I believe this will be a particularly impressive subject, and I’m sure many of you will find it both challenging and enjoyable."
    },
    {
      "title": "Question 5: Which room will they study in?",
      "answers": [
        { "name": "A. Room 201" },
        { "name": "B. Room 301" },
        { "name": "C. Room 302" }
      ],
      "correctAnswer": "B",
      "Audio": "https://youtu.be/iZAFLEJOlqk",
      "Transcript": "Hello everyone, this is your chemistry teacher. I’m calling to give you a quick update about our practical class this Friday. We will still meet at two o’clock as planned. Originally, the session was scheduled to take place in Room 201, and some of you may also have heard about using Room 302 as an alternative. However, due to an unexpected technical issue, the class will now be held in Room 301 instead. See you then."
    },
    {
      "title": "Question 6: Who did she take the picture of?",
      "answers": [
        { "name": "A. The girl's team" },
        { "name": "B. The boy’s team" },
        { "name": "C. Anna, Sara and the girl's team" }
      ],
      "correctAnswer": "A",
      "Audio": "https://youtu.be/BR8RO-N1kBc",
      "Transcript": "Last weekend, I went to watch a sports match with some friends. At first, I thought about taking a picture of the boys’ team because they were playing really well. Anna and Sara were standing nearby, and they even suggested that I include them in the photo. However, in the end, I took a picture of the girls’ team—the team I play for. We had worked hard all season, and I wanted to capture that moment."
    },
    {
      "title": "Question 7: Where do they go when they travel to India?",
      "answers": [
        { "name": "A. Go to the park" },
        { "name": "B. Go to famous places" },
        { "name": "C. Go out to eat" }
      ],
      "correctAnswer": "A",
      "Audio": "https://youtu.be/pJSXZFxDwQs",
      "Transcript": "I’ve traveled to India several times, and people often assume that I spend most of my time visiting famous landmarks or going out to eat local food. Of course, I do enjoy trying Indian dishes, and I’ve seen some well-known places too. However, what I really like to do when I’m there is go to the park. I enjoy walking through public parks, watching people relax, and experiencing everyday life. That’s usually where I spend most of my time when I travel to India."
    },
    {
      "title": "Question 8: Which door do they need to take to get to Edinburgh?",
      "answers": [
        { "name": "A. Two" },
        { "name": "B. Three" },
        { "name": "C. Four" }
      ],
      "correctAnswer": "A",
      "Audio": "https://youtu.be/suMEeSNVKP8",
      "Transcript": "Attention, please. The train is now preparing to depart, so passengers are advised to move quickly to their boarding doors. Passengers travelling to Edinburgh should proceed through door number two. Door three will be used for passengers going to Glasgow, and door four is reserved for local trains only. Please ensure you are at the correct door before boarding begins."
    },
    {
      "title": "Question 9: How long does it take to get to the station?",
      "answers": [
        { "name": "A. 15 minutes" },
        { "name": "B. 20 minutes" },
        { "name": "C. 25 minutes" }
      ],
      "correctAnswer": "B",
      "Audio": "https://youtu.be/3yc-Hb0oY_U",
      "Transcript": "Attention please, passengers travelling to the city centre. Your train will arrive at Riverside Station in approximately twenty minutes. After arriving at the station, you will need to continue your journey for another fifteen minutes to reach your final destination in the city centre. Please remain seated and listen for further announcements."
    },
    {
      "title": "Question 10: What time is the meeting?",
      "answers": [
        { "name": "A. 2pm" },
        { "name": "B. 10am" },
        { "name": "C. 11am" }
      ],
      "correctAnswer": "A",
      "Audio": "https://youtu.be/Lv9TL2PkBeY",
      "Transcript": "This is a reminder of Mr. Thompson’s schedule. Today, he will leave for the airport at 10 a.m., and at 11 a.m. he is scheduled to complete the check-in process for his flight to Ho Chi Minh City. Please note that tomorrow afternoon at 2 p.m., he has an important meeting with a business partner. All necessary documents should be prepared in advance."
    },
    {
      "title": "Question 11: Kevin is talking about his hotel experience. What did he complain about?",
      "answers": [
        { "name": "A. The room was small" },
        { "name": "B. The food was expensive" },
        { "name": "C. The place was cold" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/11-Kevin is talking about his hotel experience.wav",
      "Transcript": "Last week, I stayed in a hotel during a business trip to another city. The hotel was in a convenient location, and the staff were polite and professional. However, there was one major problem that made my stay uncomfortable. The place was very cold, especially during the night. I tried using the heating system several times, but it didn’t seem to work properly. Because of that, I couldn’t sleep very well and felt tired the next morning."
    },
    {
      "title": "Question 12: Sophie is talking about her weekly routine. What does the student do every Tuesday?",
      "answers": [
        { "name": "A. Attend a meeting" },
        { "name": "B. Write a report" },
        { "name": "C. Play sports" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Sophie is talking about her weekly routine.wav",
      "Transcript": "My weekly routine is usually very busy because I’m studying several subjects this year. Tuesdays are probably the most difficult days for me because I have classes all morning and then extra work in the afternoon. Every Tuesday, I need to write a report for my business course. Sometimes the reports are short, but other times they take many hours to finish. Even though it can be stressful, I know this practice is helping me improve my writing and research skills."
    },
    {
      "title": "Question 13: James is talking about his university essay. What do they write about?",
      "answers": [
        { "name": "A. Scientists" },
        { "name": "B. Historians" },
        { "name": "C. Artists" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/James is talking about his university essay.wav",
      "Transcript": "For my final university project this term, I decided to focus on historians..."
    },
    {
      "title": "Question 14: Mr. Brown is talking to the students before the event. Which room is the presentation in?",
      "answers": [
        { "name": "A. The meeting room" },
        { "name": "B. The computer room" },
        { "name": "C. The library" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Mr. Brown is talking to the students before the event.wav",
      "Transcript": "Student: Excuse me, Mr. Brown. I’m looking for the presentation room..."
    },
    {
      "title": "Question 15: Kevin is speaking to his friend after work. What is he going to do?",
      "answers": [
        { "name": "A. Go shopping" },
        { "name": "B. Get something to eat" },
        { "name": "C. Visit a friend" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Kevin is speaking to his friend after work.wav",
      "Transcript": "Friend: You look tired after work today... Kevin: I think I’ll get something to eat first..."
    },
    {
      "title": "Question 16: Paul is discussing his schedule with his manager. How many days does the man have to work?",
      "answers": [
        { "name": "A. 3 days" },
        { "name": "B. 7 days" },
        { "name": "C. 5 days" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Paul is discussing his schedule with his manager.wav",
      "Transcript": "Manager: Paul, how long do you think this job will take?... Paul: I probably need about three days..."
    },
    {
      "title": "Question 17: Linda is talking about her trip preparations. What did she bring with her?",
      "answers": [
        { "name": "A. A laptop" },
        { "name": "B. A camera" },
        { "name": "C. A games machine" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/Linda is talking about her trip preparations.wav",
      "Transcript": "I’m really excited about my trip tomorrow... Besides clothes and snacks, I also packed my games machine..."
    },
    {
      "title": "Question 18: Lisa is explaining why her colleague is absent. Why can’t he work today?",
      "answers": [
        { "name": "A. He feels sick" },
        { "name": "B. He is visiting family" },
        { "name": "C. He has another appointment" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/Lisa is explaining why her colleague is absent.wav",
      "Transcript": "Several people asked me today why Daniel wasn’t at work this morning... he has another appointment..."
    },
    {
      "title": "Question 19: Mrs. Green is giving instructions to her class. What are the students writing about?",
      "answers": [
        { "name": "A. Technology" },
        { "name": "B. Animals" },
        { "name": "C. Land" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/Mrs. Green is giving instructions to her class.wav",
      "Transcript": "Today in class, I asked all of my students to complete a writing activity... The topic is about land..."
    },
    {
      "title": "Question 20: Helen is speaking with the company workers. Where is she taking the employees?",
      "answers": [
        { "name": "A. To a different country" },
        { "name": "B. To a nearby city" },
        { "name": "C. To a new office" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Helen is speaking with the company workers.wav",
      "Transcript": "Worker: Helen, I heard the company is planning a special trip this year... Helen: We’re taking the employees to a different country..."
    },
    {
      "title": "Question 21: David and Anna are waiting for the bus together. Which bus stops near the house?",
      "answers": [
        { "name": "A. Number six" },
        { "name": "B. Number twelve" },
        { "name": "C. Number eight" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/David and Anna are waiting for the bus together.wav",
      "Transcript": "David: Anna, which bus do you usually take home after work?... Anna: I normally take bus number eight because it stops right near my house..."
    },
    {
      "title": "Question 22: Tom is talking to Sarah at the bus station. How much does the bus ticket cost?",
      "answers": [
        { "name": "A. $15" },
        { "name": "B. $20" },
        { "name": "C. $35" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Tom is talking to Sarah at the bus station.wav",
      "Transcript": "Tom: Excuse me, Sarah. Do you know how much a bus ticket to the city center costs?... Sarah: Yes, I asked the driver a few minutes ago. It’s twenty dollars..."
    },
    {
      "title": "Question 23: Lucy is asking her mom about tonight’s plan. What time is dinner?",
      "answers": [
        { "name": "A. 6:45 p.m." },
        { "name": "B. 7:30 p.m." },
        { "name": "C. 8:15 p.m." }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Lucy is asking her mom about tonights plan.wav",
      "Transcript": "Lucy: Mom, are we having dinner at home tonight or eating out?... Mom: We’ll eat at seven thirty p.m. because your father comes home late today..."
    },
    {
      "title": "Question 24: Mr. Taylor is reminding students about homework. What does the teacher want the students to do?",
      "answers": [
        { "name": "A. Read more books" },
        { "name": "B. Complete the assignments on time" },
        { "name": "C. Work in groups" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Mr. Taylor is reminding students about homework.wav",
      "Transcript": "Before the lesson finished today, I spoke to the class about homework and deadlines... I reminded everyone that they need to complete the assignments on time..."
    },
    {
      "title": "Question 25: Emma is speaking with her brother in the kitchen. How much money is left in the kitchen?",
      "answers": [
        { "name": "A. 25 pounds" },
        { "name": "B. 10 pounds" },
        { "name": "C. 5 pounds" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Emma is speaking with her brother in the kitchen.wav",
      "Transcript": "Emma: I need some money to buy bread and milk... Brother: Let me check… yes, there’s still ten pounds here..."
    },
    {
      "title": "Question 26: Maria is asking the receptionist about her class. What floor is the French class on?",
      "answers": [
        { "name": "A. Third floor" },
        { "name": "B. First floor" },
        { "name": "C. Second floor" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/Maria is asking the receptionist about her class.wav",
      "Transcript": "Maria: Hello, I’m new here. Could you tell me where the French class is?... Receptionist: Certainly. The French class is on the second floor..."
    },
    {
      "title": "Question 27: Sophia and Jack are discussing the new medical center. What is the new medical center next to?",
      "answers": [
        { "name": "A. A supermarket" },
        { "name": "B. A train station" },
        { "name": "C. A school" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Sophia and Jack are discussing the new medical center.wav",
      "Transcript": "Sophia: Have you seen the new medical center in town yet?... Jack: It’s next to the train station, across from the supermarket..."
    },
    {
      "title": "Question 28: Part 2 - A place for studying (Speaker A)",
      "answers": [
        { "name": "A. On public transport" },
        { "name": "B. At home" },
        { "name": "C. In the coffee shop" },
        { "name": "D. In the park" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/P2-14.1. On public transport.mp3",
      "Transcript": "The distance from my house to school is 20 km... when I'm on the train, I use the time to do homework..."
    },
    {
      "title": "Question 29: Part 2 - A place for studying (Speaker B)",
      "answers": [
        { "name": "A. On public transport" },
        { "name": "B. At home" },
        { "name": "C. In the coffee shop" },
        { "name": "D. In the park" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P2_14.2. At home .mp3",
      "Transcript": "I don't like studying in very crowded places... I usually sit on the sofa in the living room to study..."
    },
    {
      "title": "Question 30: Part 2 - A place for studying (Speaker C)",
      "answers": [
        { "name": "A. On public transport" },
        { "name": "B. At home" },
        { "name": "C. In the coffee shop" },
        { "name": "D. In the park" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/P2_14.3. In the coffee shop .mp3",
      "Transcript": "I don't like studying in very quiet places... There's a coffee shop near my house, and I often go there to study..."
    },
    {
      "title": "Question 31: Part 2 - A place for studying (Speaker D)",
      "answers": [
        { "name": "A. On public transport" },
        { "name": "B. At home" },
        { "name": "C. In the coffee shop" },
        { "name": "D. In the park" }
      ],
      "correctAnswer": "D",
      "Audio": "/test-sum-01/P2_14.4. In the park .mp3",
      "Transcript": "I notice that most people prefer doing their homework in the classroom... I prefer sitting under the trees in the park to study..."
    },
    {
      "title": "Question 32: Part 3 - Arts (15.1) Art is only suitable for the privileged few",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P3_15. Topic: Arts.wav",
      "Transcript": ""
    },
    {
      "title": "Question 33: Part 3 - Arts (15.2) The government should invest more in arts",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/P3_15. Topic: Arts.wav",
      "Transcript": ""
    },
    {
      "title": "Question 34: Part 3 - Arts (15.3) Children should be exposed to art early",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/P3_15. Topic: Arts.wav",
      "Transcript": ""
    },
    {
      "title": "Question 35: Part 3 - Arts (15.4) In the future, art will become more accessible",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/P3_15. Topic: Arts.wav",
      "Transcript": ""
    },
    {
      "title": "Question 36: Part 3 - Children Technology (15.1) Children are interested in tech-based learning",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/Children Technology.wav",
      "Transcript": ""
    },
    {
      "title": "Question 37: Part 3 - Children Technology (15.2) Families require help with management of technology",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Children Technology.wav",
      "Transcript": ""
    },
    {
      "title": "Question 38: Part 3 - Children Technology (15.3) Children can learn to regulate their online interactions",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Children Technology.wav",
      "Transcript": ""
    },
    {
      "title": "Question 39: Part 3 - Children Technology (15.4) Children find it difficult to communicate offline",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/Children Technology.wav",
      "Transcript": ""
    },
    {
      "title": "Question 40: Part 3 - Environmental Volunteering Programme (15.1) Littering will always be a problem",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Environmental Volunteering Programme.wav",
      "Transcript": ""
    },
    {
      "title": "Question 41: Part 3 - Environmental Volunteering Programme (15.2) The volunteers' motivations do not affect the programme outcome",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Environmental Volunteering Programme.wav",
      "Transcript": ""
    },
    {
      "title": "Question 42: Part 3 - Environmental Volunteering Programme (15.3) Media exaggerates the benefits of the programme",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/Environmental Volunteering Programme.wav",
      "Transcript": ""
    },
    {
      "title": "Question 43: Part 3 - Environmental Volunteering Programme (15.4) Punishment is the most effective way to prevent littering",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Environmental Volunteering Programme.wav",
      "Transcript": ""
    },
    {
      "title": "Question 44: Part 4 - Traveling -Listen to a person talk about her brother's passion for traveling and answer the questions below. (16.1) Why does the brother find traveling meaningful?",
      "answers": [
        { "name": "A. Because it allows him to escape his professional responsibilities." },
        { "name": "B. Because he wants to document his trips for social media influence." },
        { "name": "C. Because it brings him joy and chances to learn about different cultures." }
      ],
      "correctAnswer": "C",
      "Audio": "https://youtu.be/iNblXP9xZjo",
      "Transcript": ""
    },
    {
      "title": "Question 45: Part 4 - Traveling (16.2) How is traveling similar to reading a book?",
      "answers": [
        { "name": "A. Both are considered mandatory activities for academic success." },
        { "name": "B. Both help people discover new worlds and grow as a person." },
        { "name": "C. Both require a high level of physical endurance and preparation." }
      ],
      "correctAnswer": "B",
      "Audio": "https://youtu.be/iNblXP9xZjo",
      "Transcript": ""
    },
    {
      "title": "Question 46: Part 4 - Criticism Of The New Novel - Listen to a literary critic review a new novel and answer the questions below.- (17.1) Why do some readers struggle to connect with the characters?",
      "answers": [
        { "name": "A. Their motivations are explained too clearly." },
        { "name": "B. There are too many main characters to follow." },
        { "name": "C. They are difficult to relate to." }
      ],
      "correctAnswer": "C",
      "Audio": "https://youtu.be/6iUoenCikyg",
      "Transcript": ""
    },
    {
      "title": "Question 47: Part 4 - Criticism Of The New Novel (17.2) What criticism do readers have about the storyline?",
      "answers": [
        { "name": "A. It is too complex for a general audience." },
        { "name": "B. It lacks originality." },
        { "name": "C. The plot twists are too predictable for experts." }
      ],
      "correctAnswer": "B",
      "Audio": "https://youtu.be/6iUoenCikyg",
      "Transcript": ""
    },
    {
      "title": "Question 48: Part 4 - A promotion campaign for a product (17.1) What do people think about this promotion campaign?",
      "answers": [
        { "name": "A. It is being ignored completely" },
        { "name": "B. It is too simple to be effective" },
        { "name": "C. It is making exaggerated claims" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/A promotion campaign for a product (ver02).wav",
      "Transcript": ""
    },
    {
      "title": "Question 49: Part 4 - A promotion campaign for a product (17.2) What does the speaker think about this campaign?",
      "answers": [
        { "name": "A. It lacks creativity" },
        { "name": "B. It is reaching the wrong audience" },
        { "name": "C. It costs too much to make to be profitable" }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/A promotion campaign for a product (ver02).wav",
      "Transcript": ""
    },
    {
      "title": "Question 50: Part 4 - Television series (16.1) What is one major strength of successful television series?",
      "answers": [
        { "name": "A. They focus mainly on famous actors." },
        { "name": "B. It has the consistent quality throughout." },
        { "name": "C. They are usually shorter than films." }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P4_16. Topic: television series .wav",
      "Transcript": ""
    },
    {
      "title": "Question 51: Part 4 - Television series (16.2) What does the speaker suggest about changes in television production?",
      "answers": [
        { "name": "A. Streaming platforms have reduced production costs." },
        { "name": "B. Television series are becoming less creative." },
        { "name": "C. Viewer habits influence the way that series are made." }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/P4_16. Topic: television series .wav",
      "Transcript": ""
    },
    {
      "title": "Question 52: Part 4 - Making plans (16.1) What is a key benefit of making plans?",
      "answers": [
        { "name": "A. They make life more predictable." },
        { "name": "B. They help you make decisions." },
        { "name": "C. They reduce the need for communication." }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P4_16. Topic: making plans.wav",
      "Transcript": ""
    },
    {
      "title": "Question 53: Part 4 - Making plans (16.2) What is a difficulty when planning?",
      "answers": [
        { "name": "A. It discourages people from taking risks." },
        { "name": "B. It requires you to set yourself certain limits." },
        { "name": "C. It only works in professional situations." }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P4_16. Topic: making plans.wav",
      "Transcript": ""
    },
    {
      "title": "Question 54: Part 4 - A book about a scientist (16.1) What does the reviewer say about the style of the book?",
      "answers": [
        { "name": "A. It uses simple language to describe complex ideas" },
        { "name": "B. It focuses mainly on scientific data." },
        { "name": "C. It is written mainly for academic readers." }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/P4_16. Topic: a book about a life of a scientist.wav",
      "Transcript": ""
    },
    {
      "title": "Question 55: Part 4 - A book about a scientist (16.2) What does the reviewer say compared to others?",
      "answers": [
        { "name": "A. It presents completely new information." },
        { "name": "B. It is more detailed than earlier biographies." },
        { "name": "C. It is similar to the previous book about the scientist." }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/P4_16. Topic: a book about a life of a scientist.wav",
      "Transcript": ""
    },
    {
      "title": "Question 56: Part 4 - Criticism of the new novel (17.1) What did the reviewer think was a positive aspect?",
      "answers": [
        { "name": "A. The writing style was highly original." },
        { "name": "B. The characters were interesting." },
        { "name": "C. The storyline was unpredictable." }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P4_17. Topic: criticism of the new novel .wav",
      "Transcript": ""
    },
    {
      "title": "Question 57: Part 4 - Criticism of the new novel (17.2) What does the reviewer suggest about the impact?",
      "answers": [
        { "name": "A. It may divide readers’ opinions." },
        { "name": "B. It will establish the author's popularity." },
        { "name": "C. It will mainly appeal to academic audiences." }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P4_17. Topic: criticism of the new novel .wav",
      "Transcript": ""
    },
    {
      "title": "Question 58: Part 4 - A break from studying (17.1) Why didn’t he go straight to the university?",
      "answers": [
        { "name": "A. He wanted to earn money before studying." },
        { "name": "B. His family advised him to wait." },
        { "name": "C. He wasn’t ready to start higher education." }
      ],
      "correctAnswer": "C",
      "Audio": "/test-sum-01/P4_17. Topic: A break from studying.wav",
      "Transcript": ""
    },
    {
      "title": "Question 59: Part 4 - A break from studying (17.2) What did he think he learnt from the year’s break?",
      "answers": [
        { "name": "A. How to manage academic pressure." },
        { "name": "B. To be more independent." },
        { "name": "C. The importance of choosing the right degree." }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/P4_17. Topic: A break from studying.wav",
      "Transcript": ""
    },
    {
      "title": "Question 60: Part 4 - How to use time effectively (16.1) What is the main idea of the talk?",
      "answers": [
        { "name": "A. Effective time management" },
        { "name": "B. Working without any plan" },
        { "name": "C. Doing fewer tasks each day" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/What is the main problem with productivity strategies?.wav",
      "Transcript": ""
    },
    {
      "title": "Question 61: Part 4 - How to use time effectively (16.2) What is the main problem with productivity strategies?",
      "answers": [
        { "name": "A. They are too expensive to use" },
        { "name": "B. They require effort to use effectively" },
        { "name": "C. They only work in theory for students" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/What is the main problem with productivity strategies?.wav",
      "Transcript": ""
    },
    {
      "title": "Question 62: Part 4 - Biography (16.1) What is the strength of the book?",
      "answers": [
        { "name": "A. It is a very short story" },
        { "name": "B. It has a good description of a specific period of time" },
        { "name": "C. It focuses only on famous people" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Topic: Biography.wav",
      "Transcript": ""
    },
    {
      "title": "Question 63: Part 4 - Biography (16.2) What do the critics say about the book?",
      "answers": [
        { "name": "A. It is an unconventional biography" },
        { "name": "B. It is too difficult to understand" },
        { "name": "C. It contains too many fictional details" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Topic: Biography.wav",
      "Transcript": ""
    },
    {
      "title": "Question 64: Part 4 - Podcast Discussion (16.1) Why did the new podcast fail?",
      "answers": [
        { "name": "A. The content was too long" },
        { "name": "B. Creators do not promote their shows" },
        { "name": "C. It had too many listeners" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Topic: Postcard Discussion.wav",
      "Transcript": ""
    },
    {
      "title": "Question 65: Part 4 - Podcast Discussion (16.2) What is the speaker’s opinion about podcasting?",
      "answers": [
        { "name": "A. It is a waste of time" },
        { "name": "B. It is a great way to build a community" },
        { "name": "C. It is only useful for entertainment" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Topic: Postcard Discussion.wav",
      "Transcript": ""
    },
    {
      "title": "Question 66: Part 4 - Industry of making music (16.1) What is the key to a long career in music?",
      "answers": [
        { "name": "A. Having a large number of fans" },
        { "name": "B. Believing in her musical instincts" },
        { "name": "C. Winning many awards early" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Topic: Industry of making music.wav",
      "Transcript": ""
    },
    {
      "title": "Question 67: Part 4 - Industry of making music (16.2) What is the speaker’s opinion about the current music industry?",
      "answers": [
        { "name": "A. Performers find it hard to get started" },
        { "name": "B. It is easier than ever to become famous" },
        { "name": "C. Most musicians prefer traditional styles" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Topic: Industry of making music.wav",
      "Transcript": ""
    },
    {
      "title": "Question 68: Part 4 - Industry of making music (16.2) What is the speaker’s opinion about the current music industry?",
      "answers": [
        { "name": "A. Performers find it hard to get started" },
        { "name": "B. It is easier than ever to become famous" },
        { "name": "C. Most musicians prefer traditional styles" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Topic: Industry of making music.wav",
      "Transcript": ""
    },
    {
      "title": "Question 69: Part 4 - Industry of making music (extra) What is the key to a long career in music?",
      "answers": [
        { "name": "A. Having a large number of fans" },
        { "name": "B. Believing in her musical instincts" },
        { "name": "C. Winning many awards early" }
      ],
      "correctAnswer": "B",
      "Audio": "/test-sum-01/Topic: Industry of making music.wav",
      "Transcript": ""
    },
    {
      "title": "Question 70: Part 4 - Industry of making music (extra) What is the speaker’s opinion about the current music industry?",
      "answers": [
        { "name": "A. Performers find it hard to get started" },
        { "name": "B. It is easier than ever to become famous" },
        { "name": "C. Most musicians prefer traditional styles" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Topic: Industry of making music.wav",
      "Transcript": ""
    },
	{
      "title": "Question 70: What is the speaker’s opinion about the current music industry?",
      "answers": [
        { "name": "A. Performers find it hard to get started" },
        { "name": "B. It is easier than ever to become famous" },
        { "name": "C. Most musicians prefer traditional styles" }
      ],
      "correctAnswer": "A",
      "Audio": "/test-sum-01/Topic: Industry of making music.wav",
      "Transcript": ""
    }
  ]
},

    // Practice 6
  {
  "questions": [
    {
      "title": "Question 1: Tom is calling his friend. What time will they meet?",
      "answers": [
        { "name": "A. 6 PM" },
        { "name": "B. 5 PM" },
        { "name": "C. 7 PM" }
      ],
      "correctAnswer": "C",
      "Transcript": "Hey Mike, it's Tom! ... Let's meet at the park at 7 P.M."
    },
    {
      "title": "Question 2: Lucy is calling her friend. What is her sister like?",
      "answers": [
        { "name": "A. She is young" },
        { "name": "B. They have similar characters" },
        { "name": "C. She will be wearing a red coat" }
      ],
      "correctAnswer": "B",
      "Transcript": "She looks just like me, so you'll recognize her easily."
    },
    {
      "title": "Question 3: A finance expert is giving advice to young people. What shouldn't they do?",
      "answers": [
        { "name": "A. Spend too much on clothes." },
        { "name": "B. Ask for more money." },
        { "name": "C. Save for emergencies." }
      ],
      "correctAnswer": "B",
      "Transcript": "Young people, especially, need to be careful about borrowing money."
    },
    {
      "title": "Question 4: A man is talking about his daily routine. What does he do after work?",
      "answers": [
        { "name": "A. Goes to the gym." },
        { "name": "B. Plays football." },
        { "name": "C. Reads books." }
      ],
      "correctAnswer": "B",
      "Transcript": "After work, I like to relax by playing football with my friends."
    },
    {
      "title": "Question 5: Lily is talking about her daily routine. What does she do in the evening?",
      "answers": [
        { "name": "A. Goes for a walk" },
        { "name": "B. Plays video games." },
        { "name": "C. Cooks dinner." }
      ],
      "correctAnswer": "A",
      "Transcript": "After dinner, I usually go for a walk to relax."
    },
    {
      "title": "Question 6: A woman is talking to a police officer. What did she lose?",
      "answers": [
        { "name": "A. Wallet" },
        { "name": "B. Phone" },
        { "name": "C. Car" }
      ],
      "correctAnswer": "B",
      "Transcript": "I was walking in the park and I think I lost my phone."
    },
    {
      "title": "Question 7: A man and a woman are going shopping. What does he buy in the store?",
      "answers": [
        { "name": "A. A T-shirt" },
        { "name": "B. A suit for the office" },
        { "name": "C. A pair of shoes" }
      ],
      "correctAnswer": "B",
      "Transcript": "I really need a suit for the office."
    },
    {
      "title": "Question 8: A student is talking about housing. Where does he live now?",
      "answers": [
        { "name": "A. In a small village" },
        { "name": "B. In an apartment" },
        { "name": "C. In a town hall" }
      ],
      "correctAnswer": "C",
      "Transcript": "Right now, I'm staying in a town hall near my university."
    },
    {
      "title": "Question 9: Listen to a radio man talking about a new popular song. Which is the most attractive part of the song?",
      "answers": [
        { "name": "A. The words" },
        { "name": "B. The instruments" },
        { "name": "C. The cover art" }
      ],
      "correctAnswer": "A",
      "Transcript": "However, the most attractive part of all is the words."
    },
    {
      "title": "Question 10: Listen to a saleswoman talking about a property. Which room is the largest?",
      "answers": [
        { "name": "A. Bedroom" },
        { "name": "B. Kitchen" },
        { "name": "C. Bathroom" }
      ],
      "correctAnswer": "B",
      "Transcript": "But the kitchen is the star of the house—it's the largest room."
    },
    {
      "title": "Question 11: Listen to a student talking about his study. What course is the student going to take this year?",
      "answers": [
        { "name": "A. Math" },
        { "name": "B. Computer" },
        { "name": "C. Science" }
      ],
      "correctAnswer": "B",
      "Transcript": "This year, I'm really excited because I'm going to take a computer course."
    },
    {
      "title": "Question 12: A girl is talking about a show she will attend. What will it end with?",
      "answers": [
        { "name": "A. A dance performance" },
        { "name": "B. A big celebration" },
        { "name": "C. A surprise performance" }
      ],
      "correctAnswer": "C",
      "Transcript": "But the best part is that it will end with a surprise performance!"
    },
    {
      "title": "Question 13: A boy is talking about his cat. What does he feed the cat?",
      "answers": [
        { "name": "A. Mice" },
        { "name": "B. Insects" },
        { "name": "C. Fish" }
      ],
      "correctAnswer": "C",
      "Transcript": "He absolutely loves fish. Every time I give him some, he gets so excited!"
    },
    {
      "title": "Question 14.1: Speaker A _____",
      "answers": [
        { "name": "A. Prefer to study late at night" },
        { "name": "B. Prefer to study at various places" },
        { "name": "C. Prefer to study with music" },
        { "name": "D. Prefer to study in a quiet place" }
      ],
      "correctAnswer": "A",
      "Transcript": "I find that late-night hours work best for my studying."
    },
    {
      "title": "Question 14.2: Speaker B _____",
      "answers": [
        { "name": "A. Prefer to study late at night" },
        { "name": "B. Prefer to study at various places" },
        { "name": "C. Prefer to study with music" },
        { "name": "D. Prefer to study in a quiet place" }
      ],
      "correctAnswer": "B",
      "Transcript": "Changing my study space has really helped me focus better."
    },
    {
      "title": "Question 14.3: Speaker C _____",
      "answers": [
        { "name": "A. Prefer to study late at night" },
        { "name": "B. Prefer to study at various places" },
        { "name": "C. Prefer to study with music" },
        { "name": "D. Prefer to study in a quiet place" }
      ],
      "correctAnswer": "C",
      "Transcript": "Having some background music makes a noticeable difference."
    },
    {
      "title": "Question 14.4: Speaker D _____",
      "answers": [
        { "name": "A. Prefer to study late at night" },
        { "name": "B. Prefer to study at various places" },
        { "name": "C. Prefer to study with music" },
        { "name": "D. Prefer to study in a quiet place" }
      ],
      "correctAnswer": "D",
      "Transcript": "I usually end up in a quiet room at home or a secluded corner in the library."
    },
    {
      "title": "Question 15.1: The Internet makes education more accessible",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C",
      "Transcript": "We can both agree that the internet has made education more accessible."
    },
    {
      "title": "Question 15.2: Social interactions are essential to university life",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Transcript": "I still believe that social interactions are a crucial part of university life."
    },
    {
      "title": "Question 15.3: Diverse curriculum is not always a good thing",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Transcript": "A diverse curriculum sounds good in theory, but it can overwhelm students."
    },
    {
      "title": "Question 15.4: Competitions should be encouraged",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Transcript": "Another thing I'm really in favor of is encouraging competition between universities."
    },
    {
      "title": "Question 16.1: What was the lecturer's opinion about both authors' past work?",
      "answers": [
        { "name": "A. They have both been overlooked by academics." },
        { "name": "B. They make reference to each other's work." },
        { "name": "C. One was less successful than the other." }
      ],
      "correctAnswer": "A",
      "Transcript": "Both of these figures have often been overlooked by academics."
    },
    {
      "title": "Question 16.2: What did the lecturer say about both authors?",
      "answers": [
        { "name": "A. Their reputation goes beyond their target audience." },
        { "name": "B. They should have been more popular." },
        { "name": "C. It is not always easy for the meanings to be identified." }
      ],
      "correctAnswer": "C",
      "Transcript": "It is not always easy for the meanings in their works to be identified."
    },
    {
      "title": "Question 17.1: What is the expert's opinion about sport competitions?",
      "answers": [
        { "name": "A. Provide school with external investments" },
        { "name": "B. Nurture potential sportsmen for the country." },
        { "name": "C. They can cause harmful effects" }
      ],
      "correctAnswer": "C",
      "Transcript": "Competitive sports can have negative effects."
    },
    {
      "title": "Question 17.2: What is the expert's advice for schools?",
      "answers": [
        { "name": "A. Should consider sports as a mandatory subject." },
        { "name": "B. Provides them with a balance in their lives." },
        { "name": "C. Keep students focus on academic subjects" }
      ],
      "correctAnswer": "B",
      "Transcript": "Schools should view sports as a way to provide balance in students' lives."
    }
  ]
},

    // Practice 7
    {
  "questions": [
    {
      "title": "Question 1: A woman is talking about her family's weekend. What does the family do most weekends?",
      "answers": [
        { "name": "A. Goes for a walk" },
        { "name": "B. Goes picnic" },
        { "name": "C. Goes to the beach" }
      ],
      "correctAnswer": "A",
      "Transcript": "We love spending time together and often go for a walk in the park."
    },
    {
      "title": "Question 2: A man is talking to a shop assistant. What does the man buy in the shop?",
      "answers": [
        { "name": "A. Mugs" },
        { "name": "B. Candles" },
        { "name": "C. Clothes" }
      ],
      "correctAnswer": "C",
      "Transcript": "That sounds good! I think I'll buy some clothes for my friends."
    },
    {
      "title": "Question 3: A man is talking on the phone. What did the man lose?",
      "answers": [
        { "name": "A. Jacket" },
        { "name": "B. Glasses" },
        { "name": "C. Books" }
      ],
      "correctAnswer": "B",
      "Transcript": "I think I might have lost my glasses when I was at your store earlier today."
    },
    {
      "title": "Question 4: Jack is phoning his mom. What does Jack need to buy for his sister?",
      "answers": [
        { "name": "A. Chocolates" },
        { "name": "B. Milk" },
        { "name": "C. Fruit" }
      ],
      "correctAnswer": "A",
      "Transcript": "I need to buy some chocolates for my sister's birthday."
    },
    {
      "title": "Question 5: Lucy is calling her brother. What does the brother have to drink?",
      "answers": [
        { "name": "A. Milk" },
        { "name": "B. Medicine" },
        { "name": "C. Water" }
      ],
      "correctAnswer": "C",
      "Transcript": "I'm worried that you're not drinking enough water."
    },
    {
      "title": "Question 6: Anna is calling her friend. Where will they meet?",
      "answers": [
        { "name": "A. At the marketplace" },
        { "name": "B. At the mall" },
        { "name": "C. At the park" }
      ],
      "correctAnswer": "A",
      "Transcript": "I wanted to see if we are still meeting at the marketplace later."
    },
    {
      "title": "Question 7: Listen to an auction man talking about a cabinet. Which part of the cabinet is original?",
      "answers": [
        { "name": "A. The drawer" },
        { "name": "B. The doors" },
        { "name": "C. The handles" }
      ],
      "correctAnswer": "A",
      "Transcript": "What makes it special is that the drawer is kept original."
    },
    {
      "title": "Question 8: Listen to a voice message. How does Evan feel?",
      "answers": [
        { "name": "A. Sick" },
        { "name": "B. Happy" },
        { "name": "C. Tired" }
      ],
      "correctAnswer": "A",
      "Transcript": "I heard you're not feeling well, and I'm really worried about you."
    },
    {
      "title": "Question 9: Two friends are talking about their trip. What will the weather be like?",
      "answers": [
        { "name": "A. Cold and wet" },
        { "name": "B. Hot and sunny" },
        { "name": "C. Warm and dry" }
      ],
      "correctAnswer": "A",
      "Transcript": "But I heard the weather is going to be cold and wet."
    },
    {
      "title": "Question 10: A man is talking about his holiday. How is he going to travel to the city?",
      "answers": [
        { "name": "A. by car" },
        { "name": "B. by train" },
        { "name": "C. by bus" }
      ],
      "correctAnswer": "B",
      "Transcript": "The best part is that I will travel by train."
    },
    {
      "title": "Question 11: Listen to a nutrition expert. What time is the best for children to eat fruit?",
      "answers": [
        { "name": "A. In the evening" },
        { "name": "B. In the afternoon" },
        { "name": "C. In the morning" }
      ],
      "correctAnswer": "C",
      "Transcript": "The best time for children to eat fruit is in the morning."
    },
    {
      "title": "Question 12: Greg is talking about a working day in his life. How does he go to work?",
      "answers": [
        { "name": "A. By bus" },
        { "name": "B. By bike" },
        { "name": "C. On foot" }
      ],
      "correctAnswer": "A",
      "Transcript": "I go by bus every day, which takes about 30 minutes."
    },
    {
      "title": "Question 13: Listen to a tour guide. Where is the office located?",
      "answers": [
        { "name": "A. Next to the park" },
        { "name": "B. Opposite the hotel" },
        { "name": "C. Above a restaurant" }
      ],
      "correctAnswer": "B",
      "Transcript": "Our office is opposite the hotel where you are staying."
    },
    {
      "title": "Question 14.1: Speaker A _____",
      "answers": [
        { "name": "A. Walk with friends" },
        { "name": "B. Go by bus" },
        { "name": "C. Walk alone" },
        { "name": "D. Drive car" }
      ],
      "correctAnswer": "A",
      "Transcript": "I get to catch up with my friends, laugh about silly things..."
    },
    {
      "title": "Question 14.2: Speaker B _____",
      "answers": [
        { "name": "A. Walk with friends" },
        { "name": "B. Go by bus" },
        { "name": "C. Walk alone" },
        { "name": "D. Drive car" }
      ],
      "correctAnswer": "B",
      "Transcript": "I hop on the bus, find a seat if I'm lucky, and just watch the world go by."
    },
    {
      "title": "Question 14.3: Speaker C _____",
      "answers": [
        { "name": "A. Walk with friends" },
        { "name": "B. Go by bus" },
        { "name": "C. Walk alone" },
        { "name": "D. Drive car" }
      ],
      "correctAnswer": "C",
      "Transcript": "Mornings are quiet, and that's how I like it. It's just me, the fresh air..."
    },
    {
      "title": "Question 14.4: Speaker D _____",
      "answers": [
        { "name": "A. Walk with friends" },
        { "name": "B. Go by bus" },
        { "name": "C. Walk alone" },
        { "name": "D. Drive car" }
      ],
      "correctAnswer": "D",
      "Transcript": "Every morning, it's just me, my car, and the open road."
    },
    {
      "title": "Question 15.1: Living space is more important than farming space",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Transcript": "Cities are already overcrowded. There isn't enough space for housing, let alone farming."
    },
    {
      "title": "Question 15.2: Farming space is appealing",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Transcript": "Unused spaces that are too small for housing can be converted into farming areas."
    },
    {
      "title": "Question 15.3: Farming space will benefit the urban economy",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Transcript": "Producing vegetables closer to where they're consumed can actually be beneficial."
    },
    {
  "title": "Question 15.4: Farming space is in need of more food",
  "answers": [
    { "name": "A. Woman" },
    { "name": "B. Man" },
    { "name": "C. Both" }
  ],
  "correctAnswer": "A",
  "Transcript": "More people from rural areas are moving to cities, and food has become a critical issue. It's vital that we adapt over time."
  },
  {
  "title": "Question 16.1: What happened to the TV series?",
  "answers": [
    { "name": "A. It didn't receive enough investment at the early stage." },
    { "name": "B. It was overlooked by critics." },
    { "name": "C. It caught the audience's attention from the start." }
  ],
  "correctAnswer": "C",
  "Transcript": "A famous TV series called Mystery City was recently broadcasted, and it caught the audience's attention from the start."
},
{
  "title": "Question 16.2: According to the expert, what is the series' potential?",
  "answers": [
    { "name": "A. New seasons will be produced due to great demand." },
    { "name": "B. It inspires young filmmakers to follow a new movie-making style." },
    { "name": "C. It can help reach new customers." }
  ],
  "correctAnswer": "C",
  "Transcript": "Beyond just entertaining, Mystery City has also helped its network reach new customers."
},
{
  "title": "Question 17.1: What does the expert say about advertising?",
  "answers": [
    { "name": "A. It helps to reach new customers." },
    { "name": "B. Advertisements might sometimes be repetitive which is annoying." },
    { "name": "C. Advertising costs the same amount of money to produce a movie." }
  ],
  "correctAnswer": "A",
  "Transcript": "Innovative advertising strategies help brands expand their customer base to other countries."
},
{
  "title": "Question 17.2: In what way can advertising affect sports?",
  "answers": [
    { "name": "A. They help to attract more fans." },
    { "name": "B. They can boost ticket sales and sales of sports related items." },
    { "name": "C. They are not always good for sport fans" }
  ],
  "correctAnswer": "C",
  "Transcript": "While advertisements may boost the game's visibility and attract new audiences, they can sometimes detract from the viewing experience."
}
  ]
},
    // Practice 8
    {
  "questions": [
    {
      "title": "Question 1: Listen to the announcement. When does the train leave?",
      "answers": [
        { "name": "A. At 9:15" },
        { "name": "B. At 9:30" },
        { "name": "C. At 9:45" }
      ],
      "correctAnswer": "A",
      "Transcript": "The train to London will now leave at 9:15, not 9:30 as planned."
    },
    {
      "title": "Question 2: Listening to a tour guide talking about Rock City. How old is the city?",
      "answers": [
        { "name": "A. 2500 years" },
        { "name": "B. 1500 years" },
        { "name": "C. 3500 years" }
      ],
      "correctAnswer": "B",
      "Transcript": "People first started living here about 1500 years ago."
    },
    {
      "title": "Question 3: Listening to Sarah leaving a message for her friend. When does she want to meet?",
      "answers": [
        { "name": "A. Two o'clock" },
        { "name": "B. Three o'clock" },
        { "name": "C. One o'clock" }
      ],
      "correctAnswer": "B",
      "Transcript": "Can we change the time to three o'clock instead?"
    },
    {
      "title": "Question 4: Listen to a woman talking about what she has just bought. What is the dress she wears like?",
      "answers": [
        { "name": "A. black and white" },
        { "name": "B. long and white" },
        { "name": "C. long and red" }
      ],
      "correctAnswer": "C",
      "Transcript": "It's a beautiful dress. The dress is long and red, just like a sunset!"
    },
    {
      "title": "Question 5: A man is seeking advice on future career. What is he going to do?",
      "answers": [
        { "name": "A. To work in business" },
        { "name": "B. To become a teacher" },
        { "name": "C. To study at college" }
      ],
      "correctAnswer": "A",
      "Transcript": "I guess that would be my choice then. I am not suitable to become a teacher."
    },
    {
      "title": "Question 6: Listen to Anna talk about her old manager, George. What did Anna say about George?",
      "answers": [
        { "name": "A. he didn't like her" },
        { "name": "B. he taught her a lot" },
        { "name": "C. he was very strict" }
      ],
      "correctAnswer": "B",
      "Transcript": "He was a very smart man, and he taught me a lot about work."
    },
    {
      "title": "Question 7: Listen to Sarah talking about her hobby. What does she do in her free time?",
      "answers": [
        { "name": "A. Read books and paint" },
        { "name": "B. Watch movies and go shopping" },
        { "name": "C. go to the theater and play sports" }
      ],
      "correctAnswer": "C",
      "Transcript": "In my free time, I love to go to the theater... I also enjoy playing sports with my friends."
    },
    {
      "title": "Question 8: Linda is talking about what she likes to eat. What does she have for lunch?",
      "answers": [
        { "name": "A. Tea" },
        { "name": "B. Coffee" },
        { "name": "C. Juice" }
      ],
      "correctAnswer": "A",
      "Transcript": "When it comes to lunch, I really enjoy a warm cup of tea."
    },
    {
      "title": "Question 9: A woman is talking about her holiday plan. Where is she going on holidays?",
      "answers": [
        { "name": "A. the cave" },
        { "name": "B. the beach" },
        { "name": "C. the mountains" }
      ],
      "correctAnswer": "C",
      "Transcript": "But I've made up my mind - I'm going to the mountains!"
    },
    {
      "title": "Question 10: A man is talking about the environment of the countryside. What is the main cause of poor air quality?",
      "answers": [
        { "name": "A. Smokes from factories" },
        { "name": "B. Vehicles on the roads" },
        { "name": "C. Fires in the countryside" }
      ],
      "correctAnswer": "C",
      "Transcript": "Farmers often start fires to clean their fields. These fires make a lot of smoke."
    },
    {
      "title": "Question 11: A man is calling his friend to meet for coffee. Where is the coffee shop located?",
      "answers": [
        { "name": "A. opposite the gift shop" },
        { "name": "B. next to the gift shop" },
        { "name": "C. behind the gift shop" }
      ],
      "correctAnswer": "A",
      "Transcript": "The coffee shop is right across from it, opposite the gift shop."
    },
    {
      "title": "Question 12: Two colleagues talk about meeting. When do they want to meet?",
      "answers": [
        { "name": "A. On Tuesday" },
        { "name": "B. On Sunday" },
        { "name": "C. On Saturday" }
      ],
      "correctAnswer": "A",
      "Transcript": "So, I was wondering if we could meet on Tuesday instead."
    },
    {
      "title": "Question 13: A man is calling his teacher to meet for the assignment. When is the meeting?",
      "answers": [
        { "name": "A. On Thursday afternoon" },
        { "name": "B. On Tuesday morning" },
        { "name": "C. On Thursday morning" }
      ],
      "correctAnswer": "C",
      "Transcript": "So, I'm pretty sure we settled on Thursday morning at 10 AM in your office."
    },
    {
      "title": "Question 14.1: Speaker A _____",
      "answers": [
        { "name": "A. products are delivered" },
        { "name": "B. it is cheaper" },
        { "name": "C. it saves time" },
        { "name": "D. it has more choices" }
      ],
      "correctAnswer": "A",
      "Transcript": "No more carrying heavy bags... The delivery driver brings it right to my doorstep."
    },
    {
      "title": "Question 14.2: Speaker B _____",
      "answers": [
        { "name": "A. products are delivered" },
        { "name": "B. it is cheaper" },
        { "name": "C. it saves time" },
        { "name": "D. it has more choices" }
      ],
      "correctAnswer": "B",
      "Transcript": "Online stores are practically giving stuff away compared to what you'd pay in-store."
    },
    {
      "title": "Question 14.3: Speaker C _____",
      "answers": [
        { "name": "A. products are delivered" },
        { "name": "B. it is cheaper" },
        { "name": "C. it saves time" },
        { "name": "D. it has more choices" }
      ],
      "correctAnswer": "C",
      "Transcript": "With online shopping, it's like time stretches out in your favor."
    },
    {
      "title": "Question 14.4: Speaker D _____",
      "answers": [
        { "name": "A. products are delivered" },
        { "name": "B. it is cheaper" },
        { "name": "C. it saves time" },
        { "name": "D. it has more choices" }
      ],
      "correctAnswer": "D",
      "Transcript": "The selection online? It's insane! You can find anything—stuff you didn't even know existed."
    },
    {
      "title": "Question 15.1: Auditions are most important for an actor's career.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Transcript": "I've always believed that auditions are the most important part of an actor's career."
    },
    {
      "title": "Question 15.2: Actors tend to respond best to strong and engaging scripts.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Transcript": "Strong scripts really bring out the best in them."
    },
    {
  "title": "Question 15.3: Theater acting and screen acting are quite different from each other.",
  "answers": [
    { "name": "A. Woman" },
    { "name": "B. Man" },
    { "name": "C. Both" }
  ],
  "correctAnswer": "C",
  "Transcript": "I also think there's a huge difference between theater acting and screen acting. The two require completely different skill sets."
},
{
  "title": "Question 15.4: Actors should be praised and recognized as much as possible.",
  "answers": [
    { "name": "A. Woman" },
    { "name": "B. Man" },
    { "name": "C. Both" }
  ],
  "correctAnswer": "C",
  "Transcript": "Actors deserve as much praise as possible... Encouragement and praise go a long way."
},
{
  "title": "Question 16.1: What is one of the main criticisms of the Regional Development Plan?",
  "answers": [
    { "name": "A. It doesn't provide enough alternatives to driving." },
    { "name": "B. It places too much emphasis on public transportation." },
    { "name": "C. It is too expensive to implement the plan." }
  ],
  "correctAnswer": "A",
  "Transcript": "One of the main criticisms we've received is that our plan doesn't provide enough alternatives to driving."
},
{
  "title": "Question 16.2: What challenge is the Regional Development Plan likely to face?",
  "answers": [
    { "name": "A. It may be delayed due to funding issues." },
    { "name": "B. It could face difficulties in gaining government approval." },
    { "name": "C. It is likely to meet resistance from local communities." }
  ],
  "correctAnswer": "C",
  "Transcript": "The real challenge we're anticipating is the likelihood of resistance from local communities."
},
{
  "title": "Question 17.1: What does the producer think about the dialogues in the new show?",
  "answers": [
    { "name": "A. The characters' backgrounds are not adequately explored" },
    { "name": "B. They seem unrealistic." },
    { "name": "C. They reflect real-life conversations well." }
  ],
  "correctAnswer": "A",
  "Transcript": "The biggest gap right now is that we haven't adequately explored the characters’ backstories through their dialogue."
},
{
  "title": "Question 17.2: How is the current industry demand affecting the quality of script production?",
  "answers": [
    { "name": "A. It is allowing for more thorough script development." },
    { "name": "B. It is leading to more innovative ideas." },
    { "name": "C. It is negatively influencing script production." }
  ],
  "correctAnswer": "C",
  "Transcript": "Market demand and tight broadcast deadlines are pushing us to rush through the script development cycle... the final quality of the project takes a hit."
}
]},
    // Practice 9
    {
  "questions": [
    {
      "title": "Question 1: The woman is walking into a local store. How much are the cleaning products?",
      "answers": [
        { "name": "A. One pound fifty" },
        { "name": "B. Two pounds fifty" },
        { "name": "C. Three pounds fifty" }
      ],
      "correctAnswer": "A",
      "Transcript": "Today they're only one pound fifty."
    },
    {
      "title": "Question 2: Listen to the chief announce to students. When is lunch ready?",
      "answers": [
        { "name": "A. 12:30 p.m" },
        { "name": "B. 2:00 p.m" },
        { "name": "C. 1:15 p.m" }
      ],
      "correctAnswer": "B",
      "Transcript": "Lunch will be ready at 2:00 p.m."
    },
    {
      "title": "Question 3: Listen to David talking about the conference. How long did he talk in the speech?",
      "answers": [
        { "name": "A. 30 minutes" },
        { "name": "B. 45 minutes" },
        { "name": "C. 15 minutes" }
      ],
      "correctAnswer": "C",
      "Transcript": "My speech lasted about 15 minutes."
    },
    {
      "title": "Question 4: Listen to the director talking about sales of his company. How many copies of Freeze Frame magazine were sold?",
      "answers": [
        { "name": "A. Over 300,000 copies" },
        { "name": "B. Over 3,000 copies" },
        { "name": "C. Over 30,000 copies" }
      ],
      "correctAnswer": "A",
      "Transcript": "We sold over 300,000 copies!"
    },
    {
      "title": "Question 5: Listen to the conversation between Douglas and Kay. Why does Douglas call Kay?",
      "answers": [
        { "name": "A. ask for a favor" },
        { "name": "B. suggest a meeting" },
        { "name": "C. say thank you" }
      ],
      "correctAnswer": "C",
      "Transcript": "I wanted to call you today to say thank you for all your help with the project."
    },
    {
      "title": "Question 6: A man and woman are discussing their plans for the evening. What do they decide to do?",
      "answers": [
        { "name": "A. Make plans later" },
        { "name": "B. Go to the movie" },
        { "name": "C. Stay at home" }
      ],
      "correctAnswer": "A",
      "Transcript": "It might be better to plan when we can decide together."
    },
    {
      "title": "Question 7: Listen to Marry talking to Jane while waiting for James. What did they decide to do?",
      "answers": [
        { "name": "A. Have meeting without him" },
        { "name": "B. Continue waiting for him" },
        { "name": "C. Cancel the meeting" }
      ],
      "correctAnswer": "A",
      "Transcript": "I feel like we could have the meeting without him."
    },
    {
      "title": "Question 8: A woman shares her job with her friend. Why does she want to become a writer?",
      "answers": [
        { "name": "A. to earn much money" },
        { "name": "B. to help people" },
        { "name": "C. to become famous" }
      ],
      "correctAnswer": "B",
      "Transcript": "My main reason is to help people improve themselves."
    },
    {
      "title": "Question 9: A woman tells her friend about her plans for the day. What is she going to do?",
      "answers": [
        { "name": "A. Have coffee" },
        { "name": "B. Have lunch" },
        { "name": "C. Drink tea" }
      ],
      "correctAnswer": "A",
      "Transcript": "I'm going to meet a friend at a cozy café... coffee is definitely on my mind!"
    },
    {
      "title": "Question 10: Listen to a woman explaining her morning routine. Why does she get up early?",
      "answers": [
        { "name": "A. have some quiet time" },
        { "name": "B. to go to work early" },
        { "name": "C. to take care of children" }
      ],
      "correctAnswer": "A",
      "Transcript": "I usually wake up early to enjoy some quiet time."
    },
    {
      "title": "Question 11: A man is talking about his routine after work. What is he going to do?",
      "answers": [
        { "name": "A. Goes running" },
        { "name": "B. Cycles home" },
        { "name": "C. Meets his client" }
      ],
      "correctAnswer": "A",
      "Transcript": "I like to go for a run after work to clear my mind."
    },
    {
      "title": "Question 12: Linda is talking about her mother. What do mother and daughter have in common?",
      "answers": [
        { "name": "A. Similar appearance" },
        { "name": "B. Similar interests" },
        { "name": "C. Similar personalities" }
      ],
      "correctAnswer": "B",
      "Transcript": "We both enjoy many of the same activities, like reading and gardening."
    },
    {
      "title": "Question 13: Listen to a tour guide introducing the tour. Where will tea be served?",
      "answers": [
        { "name": "A. On the Mountain Boat" },
        { "name": "B. On the River Boat" },
        { "name": "C. On the Beach Boat" }
      ],
      "correctAnswer": "B",
      "Transcript": "While on the river boat, you can enjoy afternoon tea."
    },
    {
      "title": "Question 14.1: Speaker A _____",
      "answers": [
        { "name": "A. give away used items" },
        { "name": "B. buy environmentally friendly products" },
        { "name": "C. reuse containers for storing food" },
        { "name": "D. not buy commercial cleaning products" }
      ],
      "correctAnswer": "A",
      "Transcript": "I've started giving away my old clothes and furniture instead of dumping them."
    },
    {
      "title": "Question 14.2: Speaker B _____",
      "answers": [
        { "name": "A. give away used items" },
        { "name": "B. buy environmentally friendly products" },
        { "name": "C. reuse containers for storing food" },
        { "name": "D. not buy commercial cleaning products" }
      ],
      "correctAnswer": "B",
      "Transcript": "I only purchase products that are sustainably sourced or made from recycled materials."
    },
    {
      "title": "Question 14.3: Speaker C _____",
      "answers": [
        { "name": "A. give away used items" },
        { "name": "B. buy environmentally friendly products" },
        { "name": "C. reuse containers for storing food" },
        { "name": "D. not buy commercial cleaning products" }
      ],
      "correctAnswer": "C",
      "Transcript": "I've started reusing containers for storing food... I use glass jars and old containers."
    },
    {
      "title": "Question 14.4: Speaker D _____",
      "answers": [
        { "name": "A. give away used items" },
        { "name": "B. buy environmentally friendly products" },
        { "name": "C. reuse containers for storing food" },
        { "name": "D. not buy commercial cleaning products" }
      ],
      "correctAnswer": "D",
      "Transcript": "I stopped buying commercial cleaning products altogether. Now, I make my own cleaning solutions."
    },
    {
      "title": "Question 15.1: Community design can influence people's behavior.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "C",
      "Transcript": "It's fascinating how the way a space is designed can actually change how people relate to each other."
    },
    {
      "title": "Question 15.2: Creating community can take time.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Transcript": "When you move to a new town or start over in a completely different setting, it takes a while before you really feel integrated."
    },
    {
  "title": "Question 15.3: Work communities and social communities are the same.",
  "answers": [
    { "name": "A. Woman" },
    { "name": "B. Man" },
    { "name": "C. Both" }
  ],
  "correctAnswer": "A",
  "Transcript": "Whether it's colleagues at work or friends outside, the essence is the same—feeling seen, supported, and involved."
},
{
  "title": "Question 15.4: Technology has changed how community forms.",
  "answers": [
    { "name": "A. Woman" },
    { "name": "B. Man" },
    { "name": "C. Both" }
  ],
  "correctAnswer": "C",
  "Transcript": "Online platforms are redefining what community means... Technology really has changed the game."
},
{
  "title": "Question 16.1: How does life change for graduates after university?",
  "answers": [
    { "name": "A. They feel more stressed about job seeking" },
    { "name": "B. They are likely to stick to their academic routines" },
    { "name": "C. They are likely to be more flexible and open-minded" }
  ],
  "correctAnswer": "C",
  "Transcript": "Unlike during my university days, I don't have a fixed schedule anymore. This has made me more adaptable and open-minded."
},
{
  "title": "Question 16.2: What is a common characteristic of the job market after university?",
  "answers": [
    { "name": "A. More opportunities for networking" },
    { "name": "B. More competitive" },
    { "name": "C. Many jobs offer great benefits" }
  ],
  "correctAnswer": "B",
  "Transcript": "The job market was quite an eye-opener... I didn't realize just how fierce the competition would be."
},
{
  "title": "Question 17.1: What is the main issue with the product's promotion campaign?",
  "answers": [
    { "name": "A. It is using outdated advertising methods" },
    { "name": "B. They use exaggerated claims" },
    { "name": "C. It is not targeting the correct market" }
  ],
  "correctAnswer": "B",
  "Transcript": "One major issue is that the advertisements make exaggerated claims."
},
{
  "title": "Question 17.2: Why is the product struggling to stand out in the market?",
  "answers": [
    { "name": "A. It is priced too high compared to its competitors" },
    { "name": "B. It is too similar to many existing products" },
    { "name": "C. It is not available in enough stores" }
  ],
  "correctAnswer": "B",
  "Transcript": "The real issue is that PowerBoost is too similar to many existing products."
}
]},
    // Practice 10
{
  "questions": [
    {
      "title": "Question 1: Listen to the speaker talking on the radio. What is she talking about?",
      "answers": [
        { "name": "A. Her favorite hobby" },
        { "name": "B. Her journey to work" },
        { "name": "C. Her weekend plans" }
      ],
      "correctAnswer": "B",
      "Transcript": "Every morning, I take the same route to work."
    },
    {
      "title": "Question 2: Listen to the conversation about the directions. Where is the library located?",
      "answers": [
        { "name": "A. On the left of the square" },
        { "name": "B. In front of the square" },
        { "name": "C. Behind the square" }
      ],
      "correctAnswer": "A",
      "Transcript": "You'll see it on the left side, just past the bakery."
    },
    {
      "title": "Question 3: Listen to the woman talking about her holiday plans. Where is she going next?",
      "answers": [
        { "name": "A. The east" },
        { "name": "B. The north" },
        { "name": "C. The south" }
      ],
      "correctAnswer": "C",
      "Transcript": "This time, I'm heading to the south, where the mountains are."
    },
    {
      "title": "Question 4: Listen to a writer talking about her job. What was her first job?",
      "answers": [
        { "name": "A. Teacher" },
        { "name": "B. Doctor" },
        { "name": "C. Engineer" }
      ],
      "correctAnswer": "A",
      "Transcript": "My first job was actually as a teacher."
    },
    {
      "title": "Question 5: Listen to the conversation. Who is she taking a photo of?",
      "answers": [
        { "name": "A. The boys' and the girls' team" },
        { "name": "B. The girls' team" },
        { "name": "C. Sue and Lily" }
      ],
      "correctAnswer": "B",
      "Transcript": "I'm just about to take a photo of the girls' team now."
    },
    {
      "title": "Question 6: Listen to the speaker talking about their weekly schedule. When is the meeting scheduled?",
      "answers": [
        { "name": "A. Monday morning" },
        { "name": "B. Friday evening" },
        { "name": "C. Wednesday afternoon" }
      ],
      "correctAnswer": "C",
      "Transcript": "The most important thing is the meeting on Wednesday afternoon."
    },
    {
      "title": "Question 7: Listening to a man talking about his business trip. What does he like in Dubai?",
      "answers": [
        { "name": "A. He enjoys the food there" },
        { "name": "B. He enjoys his job there" },
        { "name": "C. He enjoys the people there" }
      ],
      "correctAnswer": "B",
      "Transcript": "I really enjoy my work here. It's challenging, but that's what makes it exciting."
    },
    {
      "title": "Question 8: Listening to a woman's announcement. Where will they wait for the bus?",
      "answers": [
        { "name": "A. Behind the hotel's main entrance" },
        { "name": "B. By the hotel's main entrance" },
        { "name": "C. By the hotel's side entrance" }
      ],
      "correctAnswer": "B",
      "Transcript": "We'll wait for the bus by the hotel's main entrance."
    },
    {
      "title": "Question 9: Stephanie is looking for a job taking care of children. How old is she?",
      "answers": [
        { "name": "A. 21" },
        { "name": "B. 20" },
        { "name": "C. 22" }
      ],
      "correctAnswer": "A",
      "Transcript": "This year, I am 21 years old."
    },
    {
      "title": "Question 10: Listen to a woman giving advice on saving money. What advice does she give?",
      "answers": [
        { "name": "A. Buy in bulk" },
        { "name": "B. Use the public transport" },
        { "name": "C. Put money into the bank" }
      ],
      "correctAnswer": "B",
      "Transcript": "The best tip I have is to use public transport instead of driving."
    },
    {
      "title": "Question 11: Listen to a teacher talking about meeting preparations. What is the teacher preparing now?",
      "answers": [
        { "name": "A. Set up the chairs" },
        { "name": "B. Organize the documents" },
        { "name": "C. Order the food" }
      ],
      "correctAnswer": "C",
      "Transcript": "Then, of course, I have to order the food so we can eat during the break."
    },
    {
      "title": "Question 12: Listen to an actor discussing his hobbies. What does the actor like to do?",
      "answers": [
        { "name": "A. Drawing" },
        { "name": "B. Watching movies" },
        { "name": "C. Playing sports" }
      ],
      "correctAnswer": "A",
      "Transcript": "Actually, I love drawing. It helps me clear my mind and get creative."
    },
    {
      "title": "Question 13: Listen to a principal talking about new school facilities. What new facility will the school have?",
      "answers": [
        { "name": "A. a new library" },
        { "name": "B. a sports field" },
        { "name": "C. the performance space" }
      ],
      "correctAnswer": "C",
      "Transcript": "The school will have a new performance space for plays, concerts, and other events."
    },
    {
      "title": "Question 14.1: Speaker A _____",
      "answers": [
        { "name": "A. prefer running in the street" },
        { "name": "B. at the seaside" },
        { "name": "C. on the running track" },
        { "name": "D. in the fitness center" }
      ],
      "correctAnswer": "A",
      "Transcript": "Running in the street is what I love most."
    },
    {
      "title": "Question 14.2: Speaker B _____",
      "answers": [
        { "name": "A. prefer running in the street" },
        { "name": "B. at the seaside" },
        { "name": "C. on the running track" },
        { "name": "D. in the fitness center" }
      ],
      "correctAnswer": "B",
      "Transcript": "There's nothing better than running by the seaside."
    },
    {
      "title": "Question 14.3: Speaker C _____",
      "answers": [
        { "name": "A. prefer running in the street" },
        { "name": "B. at the seaside" },
        { "name": "C. on the running track" },
        { "name": "D. in the fitness center" }
      ],
      "correctAnswer": "C",
      "Transcript": "For me, the running track is the best place to run."
    },
    {
      "title": "Question 14.4: Speaker D _____",
      "answers": [
        { "name": "A. prefer running in the street" },
        { "name": "B. at the seaside" },
        { "name": "C. on the running track" },
        { "name": "D. in the fitness center" }
      ],
      "correctAnswer": "D",
      "Transcript": "Inside, I don't have to worry about it being too hot, cold, or rainy."
    },
    {
      "title": "Question 15.1: Continuity is very important in the workplace.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "B",
      "Transcript": "Continuity is important in keeping everyone focused."
    },
    {
      "title": "Question 15.2: Job security cannot always be guaranteed.",
      "answers": [
        { "name": "A. Woman" },
        { "name": "B. Man" },
        { "name": "C. Both" }
      ],
      "correctAnswer": "A",
      "Transcript": "Job security isn't something we can rely on anymore."
    },
   {
  "title": "Question 15.3: Job satisfaction is an important motivator.",
  "answers": [
    { "name": "A. Woman" },
    { "name": "B. Man" },
    { "name": "C. Both" }
  ],
  "correctAnswer": "C",
  "Transcript": "One thing we both can agree on is that job satisfaction is a huge motivator."
},
{
  "title": "Question 15.4: Technology is good for the entire economy.",
  "answers": [
    { "name": "A. Woman" },
    { "name": "B. Man" },
    { "name": "C. Both" }
  ],
  "correctAnswer": "B",
  "Transcript": "Technology has been a game-changer for the economy, making things more efficient."
},
{
  "title": "Question 16.1: How does the speaker recommend saving money effectively?",
  "answers": [
    { "name": "A. Saving a large amount only on a daily basis." },
    { "name": "B. Organizing their resources more effectively" },
    { "name": "C. Use credit cards to manage expenses" }
  ],
  "correctAnswer": "B",
  "Transcript": "One of the best ways to save effectively is to set aside a fixed amount every month."
},
{
  "title": "Question 16.2: Who does the speaker believe can save money most successfully?",
  "answers": [
    { "name": "A. Get advice from people that have experience" },
    { "name": "B. Keep all your savings in a single account" },
    { "name": "C. Avoid making any long-term financial plans" }
  ],
  "correctAnswer": "A",
  "Transcript": "One key piece of advice is to get help from people who know more than you."
},
{
  "title": "Question 17.1: What is the speaker's opinion about security cameras at work?",
  "answers": [
    { "name": "A. People are unnecessarily worried about them" },
    { "name": "B. Most people don't even realize cameras are present." },
    { "name": "C. Cameras should be placed to ensure complete coverage." }
  ],
  "correctAnswer": "A",
  "Transcript": "Honestly, I think people worry too much about it. These cameras aren't there to spy on us."
},
{
  "title": "Question 17.2: How does the speaker suggest people should feel about security cameras at work?",
  "answers": [
    { "name": "A. People often find them intimidating and invasive." },
    { "name": "B. Many believe they are only useful after incidents have occurred." },
    { "name": "C. People should feel reassured about their presence" }
  ],
  "correctAnswer": "C",
  "Transcript": "Instead of feeling worried, we should feel glad that our company cares about our safety."
}
]}


  ]


  let jsonReading = [
    // Practice 1 
    {"questions":[{"title":"PASSAGE 1 - 1. According to the passage, the 2000 Sydney Paralympics basketball team...","answers":[{"name":"a. won the gold medal despite cheating.\t"},{"name":"b. were in a grey area.\t"},{"name":"c. were rightly accused of cheating.\t"},{"name":"d. were accused of cheating when they did not.\t"}],"correctAnswer":"C"},{"title":"2. British Team cyclist Philip Hindes...","answers":[{"name":"a. lost a medal because he cheated.\t"},{"name":"b. used gamesmanship to win a medial.\t"},{"name":"c. won a medal despite cheating.\t"},{"name":"d. lost a medal because of gamesmanship.\t"}],"correctAnswer":"B"},{"title":"3. Badminton player Carolina Marins...","answers":[{"name":"a. used gamesmanship to win a game.\t"},{"name":"b. used gamesmanship, but lost a game.\t"},{"name":"c. cheated and won a game.\t"},{"name":"d. did not cheat, but was disqualified.\t"}],"correctAnswer":"A"},{"title":"4. Cricketers who leave the field when they feel the ball touch their legs...","answers":[{"name":"a. are breaking the rules.\t"},{"name":"b. are rare.\t"},{"name":"c. are using gamesmanship.\t"},{"name":"d. are following the rules.\t"}],"correctAnswer":"B"},{"title":"5. Diego Maradona is mentioned because he\u2026","answers":[{"name":"a. took advantage of a referee\u0027s mistake.\t"},{"name":"b. challenged a referee\u0027s decision.\t"},{"name":"c. persuaded a referee to make a decision.\t"},{"name":"D."}],"correctAnswer":"A"},{"title":"6. Rivaldo...","answers":[{"name":"a. didn\u0027t realise he was breaking a rule.\t"},{"name":"b. exaggerated an injury.\t"},{"name":"c. was punished for bending the rules.\t"},{"name":"d. was accused of cheating when he did not.\t"}],"correctAnswer":"C"},{"title":"7. The four badminton teams were disqualified...","answers":[{"name":"a. despite not cheating.\t"},{"name":"b. because they cheated.\t"},{"name":"c. because they were sporting.\t"},{"name":"d. after winning their games.\t"}],"correctAnswer":"A"},{"title":"PASSAGE 2 - 1. Residents of the Czech Republic...","answers":[{"name":"a. consume more alcohol than any other country in the world.\t"},{"name":"b. have the highest combined rates of smoking, obesity and drinking alcohol.\t"},{"name":"c. smoke more than any other country in Eastern Europe.\t"},{"name":"d. are more obese than people in both the USA and the rest of Europe.\t"}],"correctAnswer":"B"},{"title":"2. The writer of this article thinks that the Clinic Compare study...","answers":[{"name":"a. accurately identified the healthiest and least healthy nations.\t"},{"name":"b. did not include enough countries in its study.\t"},{"name":"c. failed to identify the healthiest countries accurately.\t"},{"name":"d. is inaccurate because health issues have changed since the study.\t"}],"correctAnswer":"C"},{"title":"3. According to the article,","answers":[{"name":"a. there is more malnutrition than obesity in Mozambique.\t"},{"name":"b. there are more diseases of affluence in DR Congo than in the USA.\t"},{"name":"c. life expectancy in DR Congo is the lowest in the world.\t"},{"name":"d. access to medical facilities and doctors in Malawi is gradually rising.\t"}],"correctAnswer":"A"},{"title":"4. The text indicates that...","answers":[{"name":"a. Nepal has more pollution from vehicles and industries than Afghanistan.\t"},{"name":"b. Fewer people die as a result of air pollution in Afghanistan than in Nepal.\t"},{"name":"c. 2.4 billion people are currently suffering from diseases associated with air pollution.\t"},{"name":"d. People put their health at risk when cooking on kerosene, wood, dung and coal.\t"}],"correctAnswer":"D"},{"title":"5. According to the text, the USA is higher than Spain with regards to...","answers":[{"name":"a. the number of people who walk to work.\t"},{"name":"b. the amount of air pollution\t"},{"name":"c. the affordability of its health care.\t"},{"name":"d. its ability to respond to disease outbreaks.\t"}],"correctAnswer":"D"},{"title":"6. According to the text, what is the reason for high obesity rates in the Pacific Islands?\t","answers":[{"name":"a. The traditional diet is high in fat.\t"},{"name":"b. People prefer to buy imported food.\t"},{"name":"c. Fresh food is no longer grown locally.\t"},{"name":"d. People do not get enough exercise.\t"}],"correctAnswer":"B"},{"title":"PASSAGE 3 - 1. The term FOMO was first used...","answers":[{"name":"a. in a paper published by a Harvard student\t"},{"name":"b. on social media\t"},{"name":"c. by someone doing market research\t"},{"name":"D."}],"correctAnswer":"C"},{"title":"2. It can be inferred that the meaning of FOMO now...","answers":[{"name":"a. is the same as in 2004.\t"},{"name":"b. has changed since 2004.\t"},{"name":"c. changed between 1996 and 2004.\t"},{"name":"D."}],"correctAnswer":"A"},{"title":"3. Which of the following impacts of FOMO is NOT mentioned in the text?","answers":[{"name":"a. It can alter your perception of what \u0027normal\u0027 is.\t"},{"name":"b. It can be exploited to make people spend money.\t"},{"name":"c. It can make people fearful of normal social interactions.\t"},{"name":"D."}],"correctAnswer":"C"},{"title":"4. According to the text, people in previous generations experienced FOMO less than nowadays because\u2026","answers":[{"name":"a. marketing campaigns were less targeted towards them.\t"},{"name":"b. they were less aware of what others were doing.\t"},{"name":"c. their lives were more similar to those of their peers.\t"},{"name":"D."}],"correctAnswer":"B"},{"title":"5. According to the research, which of these people is MOST likely to experience FOMO?","answers":[{"name":"a. an introvert doing school work on a Friday night.\t"},{"name":"b. a neurotic person relaxing on a Sunday afternoon.\t"},{"name":"c. an extrovert working on a Tuesday morning.\t"},{"name":"D."}],"correctAnswer":"A"},{"title":"6. According to research, someone doing an activity of their own choice\u2026","answers":[{"name":"a. will only experience FOMO if their chosen activity is unsociable.\t"},{"name":"b. will experience FOMO if they are reminded about an alternative option.\t"},{"name":"c. will not experience FOMO unless they see a social network feed.\t"},{"name":"D."}],"correctAnswer":"B"},{"title":"7. Who is most likely to be at risk from FOMO?","answers":[{"name":"a. a young, sociable adult who uses social media widely.\t"},{"name":"b. an older adult who is insecure and has low self-worth.\t"},{"name":"c. a confident teenager who does not use social media.\t"},{"name":"D."}],"correctAnswer":"B"},{"title":"8. It can be inferred that FOJI...","answers":[{"name":"a. causes people to become more lonely and isolated.\t"},{"name":"b. is one of the advantages of FOMO.\t"},{"name":"c. helps people to appreciate the present moment.\t"},{"name":"D."}],"correctAnswer":"A"},{"title":"9. The text states that FOMO can be beneficial..","answers":[{"name":"a. if people use it to seek out opportunities.\t"},{"name":"b. if people are suffering from FOJI.\t"},{"name":"c. if people are feeling isolated and undervalued.\t"},{"name":"D."}],"correctAnswer":"A"},{"title":"10. JOMO refers to...","answers":[{"name":"a. being motivated positively by other people\u0027s actions.\t"},{"name":"b. commenting positively on other people\u0027s good news.\t"},{"name":"c. being happy without the influence of other people.\t"},{"name":"D."}],"correctAnswer":"C"},{"title":"PASSAGE 4 - 1. Which of the following has resulted from Amelia\u0027s binge-watching habit?","answers":[{"name":"a. She has poor conversation skills.\t"},{"name":"b. She does not have any hobbies\t"},{"name":"c. She has problems fitting in.\t"},{"name":"d. She has improved her grades at school.\t"}],"correctAnswer":"B"},{"title":"2. What is Karen\u0027s attitude to watching series on television?","answers":[{"name":"a. She\u0027ll try to watch less television, to set a good example.\t"},{"name":"b. She watches television before eight.\t"},{"name":"c. She watches a lot of television as a way to relax.\t"},{"name":"d. She plans to do an evening class to reduce television time.\t"}],"correctAnswer":"C"},{"title":"3. What does Kyle enjoy watching?","answers":[{"name":"a. Series, although not the most recent ones.\t"},{"name":"b. Instructional videos related to his hobbies and interests.\t"},{"name":"c. Videos that he didn\u0027t pick himself.\t"},{"name":"d. Programmes that his friends have recommended.\t"}],"correctAnswer":"C"},{"title":"4. What does Rob think about streaming services?","answers":[{"name":"a. They are well worth the money if you are a binge-watcher.\t"},{"name":"b. They aren\u0027t as enjoyable as going out to the cinema.\t"},{"name":"c. They aren\u0027t worth it because the movies and series are often bad.\t"},{"name":"d. He may stop paying for them soon because they are too expensive.\t"}],"correctAnswer":"A"},{"title":"5. Gill thinks that binge-watching...","answers":[{"name":"a. is good entertainment for people with long-term illnesses.\t"},{"name":"b. is better, as you don\u0027t have to wait to find out what happens.\t"},{"name":"c. results in people wasting a lot of their time.\t"},{"name":"d. prevents people from enjoying a sense of expectation.\t"}],"correctAnswer":"D"},{"title":"6. Kevin feels that live streaming platforms...","answers":[{"name":"a. only recommend videos that they is trying to promote.\t"},{"name":"b. prevent people from watching a wide range of videos.\t"},{"name":"c. are helping people new to the film industry to get attention.\t"},{"name":"d. aren\u0027t very good at recommending things to watch.\t"}],"correctAnswer":"C"}]},
    // Practice 2
    
    // Practice 3
    
    // Practice 4
    
    // Practice 5
    
    // Practice 6
    
    // Practice 7
    

]
