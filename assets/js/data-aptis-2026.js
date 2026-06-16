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
    // Practice 6
    
    // Practice 7
    // Practice 8
    // Practice 9
    // Practice 10

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
