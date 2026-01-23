// Quiz Questions for AI Commander Training Series
// Part 0: 20 questions, Part 1: 20 questions, Part 2: 35 questions

export const quizQuestions = {
  part0: [
    {
      id: 1,
      question: 'According to the "Work Version" definition of AI, why does an AI model often fail to provide a useful answer about your specific company project immediately?',
      options: [
        { key: 'A', text: 'Because the AI model is not advanced enough to understand complex business logic.' },
        { key: 'B', text: 'Because you have not paid for the enterprise version of the software.' },
        { key: 'C', text: 'Because AI is like a "super new colleague" who has read public data but knows nothing about your internal context.' },
        { key: 'D', text: 'Because the AI is programmed to withhold information until you use a specific technical keyword.' }
      ],
      correctAnswer: 'C',
      explanation: 'AI models are trained on public data and have no knowledge of your company\'s internal context, projects, or specific requirements. Like a new colleague, they need to be briefed on the specifics.'
    },
    {
      id: 2,
      question: 'Your colleague believes that "Prompting" is a technical skill requiring complex codes. How should you correct this based on the training material?',
      options: [
        { key: 'A', text: 'Agree with them and suggest hiring a prompt engineer.' },
        { key: 'B', text: 'Explain that a Prompt is simply a "Work Instruction" or "Brief," similar to assigning a task to a human colleague.' },
        { key: 'C', text: 'Tell them that Prompting is actually a magic spell that requires memorisation.' },
        { key: 'D', text: 'Advise them to focus only on checking the grammar of the output.' }
      ],
      correctAnswer: 'B',
      explanation: 'Prompting is essentially task delegation using natural language. It\'s about clearly communicating what you need, just like giving instructions to a colleague.'
    },
    {
      id: 3,
      question: 'Review the following prompt: "Help me write a plan." Why is this considered a failure in the "Work Context"?',
      options: [
        { key: 'A', text: 'It is too polite; AI responds better to direct commands.' },
        { key: 'B', text: 'It lacks "Context," forcing the AI to guess the background, audience, and goal.' },
        { key: 'C', text: 'It is too short; a prompt must always be at least 100 words.' },
        { key: 'D', text: 'It does not specify the technical temperature setting of the model.' }
      ],
      correctAnswer: 'B',
      explanation: 'Without context, the AI has no information about the purpose, audience, constraints, or goals of the plan, leading to generic or irrelevant outputs.'
    },
    {
      id: 4,
      question: 'When defining "Context" for an AI task, which analogy is used to help you understand what information to include?',
      options: [
        { key: 'A', text: 'The "Search Engine" analogy: Put in keywords to get links.' },
        { key: 'B', text: 'The "Library" analogy: The AI has read every book.' },
        { key: 'C', text: 'The "First Day at Work" analogy: What does a new employee need to know to do the job right?' },
        { key: 'D', text: 'The "Calculator" analogy: Input numbers to get a fixed result.' }
      ],
      correctAnswer: 'C',
      explanation: 'The "First Day at Work" analogy helps you think about all the context a new colleague would need to complete a task successfully.'
    },
    {
      id: 5,
      question: 'Which of the following elements is NOT listed as a common and necessary part of "Context" in the training material?',
      options: [
        { key: 'A', text: 'Who the target audience is (User/Client/Boss).' },
        { key: 'B', text: 'The specific technical architecture of the Transformer model.' },
        { key: 'C', text: 'What we are doing (Project/Product).' },
        { key: 'D', text: 'Limitations and restrictions (Time/Style/Taboos).' }
      ],
      correctAnswer: 'B',
      explanation: 'Technical details about how AI models work (like Transformer architecture) are not part of the context you need to provide for a work task.'
    },
    {
      id: 6,
      question: 'You assign a role to the AI by saying, "You are a Senior Marketing Manager." What is the primary function of this step?',
      options: [
        { key: 'A', text: 'To trick the AI into accessing restricted data.' },
        { key: 'B', text: 'To give the AI a specific "Work Perspective" so it knows which angle to analyze the problem from.' },
        { key: 'C', text: 'To make the conversation feel more human and friendly.' },
        { key: 'D', text: 'To increase the speed of text generation.' }
      ],
      correctAnswer: 'B',
      explanation: 'Assigning a role helps the AI adopt a specific professional perspective, influencing how it approaches and frames its response.'
    },
    {
      id: 7,
      question: 'What is the "Golden Rule" regarding the relationship between the user\'s clarity and the AI\'s performance?',
      options: [
        { key: 'A', text: '"The more technical terms you use, the smarter the AI becomes."' },
        { key: 'B', text: '"If the AI fails, it is because the model is stupid."' },
        { key: 'C', text: '"You say it clearly, it performs well; you don\'t say it, it guesses."' },
        { key: 'D', text: '"Always trust the AI\'s first answer because it has more data than you."' }
      ],
      correctAnswer: 'C',
      explanation: 'The quality of AI output is directly proportional to the clarity of your instructions. Vague prompts lead to guesswork and poor results.'
    },
    {
      id: 8,
      question: 'In the "Standard Work Workflow" (5 Steps), what immediately follows "Defining Context"?',
      options: [
        { key: 'A', text: 'Defining the desired "Output" (Result).' },
        { key: 'B', text: 'Sending the email to the client.' },
        { key: 'C', text: 'Asking the AI to guess the next step.' },
        { key: 'D', text: 'Restarting the computer.' }
      ],
      correctAnswer: 'A',
      explanation: 'After establishing context, you need to clearly define what output or deliverable you expect from the AI.'
    },
    {
      id: 9,
      question: 'Why is "Iteration" considered a standard part of the AI workflow rather than a sign of failure?',
      options: [
        { key: 'A', text: 'Because AI models are designed to be annoying.' },
        { key: 'B', text: 'Because the first draft is rarely the final version; the normal flow is Instruction → Result → Feedback → Optimization.' },
        { key: 'C', text: 'Because you need to use up your monthly credit quota.' },
        { key: 'D', text: 'Because AI cannot understand human language on the first try.' }
      ],
      correctAnswer: 'B',
      explanation: 'Iteration is a natural part of any creative or analytical process. The first output helps identify what needs refinement.'
    },
    {
      id: 10,
      question: 'If an AI generates a product introduction that sounds like a generic advertisement, what is the most likely cause based on the "Whitening Supplement" example?',
      options: [
        { key: 'A', text: 'You failed to provide the "Context" regarding target audience (e.g., age, concerns) and tone (e.g., natural, not salesy).' },
        { key: 'B', text: 'The AI model hates whitening products.' },
        { key: 'C', text: 'You did not use the word "Please" in your prompt.' },
        { key: 'D', text: 'The product itself is too generic.' }
      ],
      correctAnswer: 'A',
      explanation: 'Without specific context about audience, tone, and approach, AI defaults to generic advertising language.'
    },
    {
      id: 11,
      question: 'What is the "Human Bottom Line" or main responsibility when checking AI Output?',
      options: [
        { key: 'A', text: 'To accept the output as fact because AI knows everything.' },
        { key: 'B', text: 'To judge if the output matches the goal, verify facts, and request changes if unsatisfied.' },
        { key: 'C', text: 'To copy and paste the result immediately to save time.' },
        { key: 'D', text: 'To ask the AI if it is confident in its own answer.' }
      ],
      correctAnswer: 'B',
      explanation: 'Humans are responsible for quality control: evaluating relevance, verifying accuracy, and requesting revisions when needed.'
    },
    {
      id: 12,
      question: 'According to the training, what is the biggest barrier that causes people to "fall behind" in AI adoption?',
      options: [
        { key: 'A', text: 'Lack of programming skills.' },
        { key: 'B', text: 'Not understanding basic work concepts like "Prompt" and "Context," leading to a feeling that AI is useless.' },
        { key: 'C', text: 'Slow internet connection speeds.' },
        { key: 'D', text: 'The high cost of AI subscriptions.' }
      ],
      correctAnswer: 'B',
      explanation: 'The main barrier is conceptual, not technical. Understanding how to communicate with AI effectively is key to getting value from it.'
    },
    {
      id: 13,
      question: 'In a prompt, you include: "The budget is low, do not suggest discounts, and the target is existing customers." Which component of the workflow does this represent?',
      options: [
        { key: 'A', text: 'Role.' },
        { key: 'B', text: 'Iteration.' },
        { key: 'C', text: 'Context (specifically Restrictions/Constraints).' },
        { key: 'D', text: 'Output format.' }
      ],
      correctAnswer: 'C',
      explanation: 'Budget limitations, prohibited approaches, and target audience are all part of the Context, specifically the constraints/restrictions.'
    },
    {
      id: 14,
      question: 'The training material states: "If you yourself haven\'t thought clearly about what you want..."',
      options: [
        { key: 'A', text: '"...the AI will help you think clearly."' },
        { key: 'B', text: '"...the AI will definitely not be able to give a good result."' },
        { key: 'C', text: '"...you should ask your boss."' },
        { key: 'D', text: '"...you should just press \'Generate\' and hope for the best."' }
      ],
      correctAnswer: 'B',
      explanation: 'AI cannot compensate for unclear thinking. If you don\'t know what you want, the AI cannot figure it out for you.'
    },
    {
      id: 15,
      question: 'Which of the following best summarizes the "Iteration" logic?',
      options: [
        { key: 'A', text: 'One Shot: If it fails, quit.' },
        { key: 'B', text: 'Two Shot: Try twice, then give up.' },
        { key: 'C', text: 'Feedback Loop: Handover → Review Result → Supplementary Instructions → Try Again.' },
        { key: 'D', text: 'Silent Loop: Keep generating without changing the prompt.' }
      ],
      correctAnswer: 'C',
      explanation: 'Iteration is a feedback loop where you review, provide additional guidance, and refine until you get the desired result.'
    },
    {
      id: 16,
      question: 'What is the "Output"?',
      options: [
        { key: 'A', text: 'The backend code of the AI.' },
        { key: 'B', text: 'The specific deliverable you want the AI to hand over to you.' },
        { key: 'C', text: 'The background information of the company.' },
        { key: 'D', text: 'The personality you assign to the AI.' }
      ],
      correctAnswer: 'B',
      explanation: 'Output refers to the concrete result or deliverable you expect from the AI task.'
    },
    {
      id: 17,
      question: 'Why does the training emphasize avoiding technical definitions (like "Transformer" or "Token") in Part 0?',
      options: [
        { key: 'A', text: 'Because the trainer doesn\'t understand them.' },
        { key: 'B', text: 'Because technical terms intimidate non-technical staff; "Work Language" ensures everyone stays on board.' },
        { key: 'C', text: 'Because those terms are illegal to use in business.' },
        { key: 'D', text: 'Because the concepts are no longer valid.' }
      ],
      correctAnswer: 'B',
      explanation: 'Using accessible "Work Language" removes barriers and ensures all team members can understand and apply AI concepts.'
    },
    {
      id: 18,
      question: 'You are a manager checking if your team understands "Context." Which team member is doing it wrong?',
      options: [
        { key: 'A', text: 'Member A explains the project timeline and current bottlenecks to the AI.' },
        { key: 'B', text: 'Member B tells the AI who the report is written for (the CEO).' },
        { key: 'C', text: 'Member C pastes a single sentence "Write a report" and expects a perfect draft.' },
        { key: 'D', text: 'Member D lists the "Don\'ts" (e.g., don\'t use slang).' }
      ],
      correctAnswer: 'C',
      explanation: 'Member C provides no context at all, which will result in a generic, likely unusable output.'
    },
    {
      id: 19,
      question: '"Prompt is not a spell." What does this statement imply about how you should write a prompt?',
      options: [
        { key: 'A', text: 'You must rhyme your words.' },
        { key: 'B', text: 'You should use natural language to explain the task clearly, just like emailing a colleague.' },
        { key: 'C', text: 'You need to buy a book of "Prompts" and memorize them.' },
        { key: 'D', text: 'You should keep the prompt secret from others.' }
      ],
      correctAnswer: 'B',
      explanation: 'Prompts are not magic formulas. They are clear, natural language instructions, similar to how you would communicate with a colleague.'
    },
    {
      id: 20,
      question: 'What is the final conclusion of Module 0 regarding a person\'s ability to use AI?',
      options: [
        { key: 'A', text: '"People who can code use AI best."' },
        { key: 'B', text: '"People who are clear about what they are doing use AI best."' },
        { key: 'C', text: '"Younger people always use AI better than older people."' },
        { key: 'D', text: '"People who type fast use AI best."' }
      ],
      correctAnswer: 'B',
      explanation: 'The key to effective AI use is clarity of thought and communication, not technical skills or age.'
    }
  ],

  part1: [
    {
      id: 1,
      question: 'In the transition from the "Old World" to the "New World," how does your primary role description change?',
      options: [
        { key: 'A', text: 'You change from being a "Creator" to being a "Consumer."' },
        { key: 'B', text: 'You change from being the "Sole Executor" to the "Person in Charge who commands AI."' },
        { key: 'C', text: 'You change from a "Manager" to a "Technical Programmer."' },
        { key: 'D', text: 'You change from being "Responsible" to being "Carefree."' }
      ],
      correctAnswer: 'B',
      explanation: 'The shift is from doing everything yourself to directing AI while maintaining responsibility for the outcome.'
    },
    {
      id: 2,
      question: 'When you switch from doing the work yourself to commanding AI, how does the "Responsibility" component change?',
      options: [
        { key: 'A', text: 'The responsibility shifts to the AI software provider.' },
        { key: 'B', text: 'The responsibility is split 50/50 between you and the AI.' },
        { key: 'C', text: 'The responsibility disappears because the work is automated.' },
        { key: 'D', text: 'The responsibility does not change; only the "hands" doing the work have changed.' }
      ],
      correctAnswer: 'D',
      explanation: 'While AI does the execution, you remain fully responsible for the quality and correctness of the output.'
    },
    {
      id: 3,
      question: 'What is the "Golden Sentence" that describes the fundamental cognitive shift in Part 1?',
      options: [
        { key: 'A', text: '"Your job is to find the best prompt template online."' },
        { key: 'B', text: '"Your job is not to \'do the thing,\' but to \'explain the thing clearly\' to the AI."' },
        { key: 'C', text: '"Your job is to work twice as fast as the AI."' },
        { key: 'D', text: '"Your job is to hide the fact that you are using AI."' }
      ],
      correctAnswer: 'B',
      explanation: 'The core shift is from execution to clear communication and direction.'
    },
    {
      id: 4,
      question: 'Why do many employees feel resistance to the "New Role" (e.g., thinking "I could just write this myself faster")?',
      options: [
        { key: 'A', text: 'Because they are lazy.' },
        { key: 'B', text: 'Because AI is actually slower at typing than humans.' },
        { key: 'C', text: 'Because it is their first time transitioning from the "Doer" (hands-on) to the "Assigner" (instruction-giver).' },
        { key: 'D', text: 'Because the company internet connection is too slow.' }
      ],
      correctAnswer: 'C',
      explanation: 'The resistance comes from an unfamiliar role shift, not from AI limitations.'
    },
    {
      id: 5,
      question: 'In the past, your key abilities were "Writing fast" and "Doing things in detail." What are the new most important abilities?',
      options: [
        { key: 'A', text: 'Coding, Typing speed, and Graphic design.' },
        { key: 'B', text: 'Judging clearly what is needed, Disassembling tasks, and Filtering results.' },
        { key: 'C', text: 'Memorizing prompts, Buying software, and Ignoring errors.' },
        { key: 'D', text: 'Complaining to IT, Waiting for results, and Forwarding emails.' }
      ],
      correctAnswer: 'B',
      explanation: 'The new skills are about clear thinking, task decomposition, and quality judgment.'
    },
    {
      id: 6,
      question: 'How should you respond to the misconception that "Using AI is just being lazy"?',
      options: [
        { key: 'A', text: 'Admit it is lazy but efficient.' },
        { key: 'B', text: 'Explain that you are handing over "physical/tiring work" to a non-tired executor so you can focus on decision-making.' },
        { key: 'C', text: 'Argue that AI works harder than humans.' },
        { key: 'D', text: 'Ignore the comment.' }
      ],
      correctAnswer: 'B',
      explanation: 'Using AI is about delegation, not laziness. It frees you to focus on higher-value activities.'
    },
    {
      id: 7,
      question: 'In the "Activity Proposal" example, which approach represents the "Old Role/Executor Mindset"?',
      options: [
        { key: 'A', text: 'Thinking about the target audience and risks before starting.' },
        { key: 'B', text: 'Telling the AI: "I need a plan for old customers, strictly no discounts."' },
        { key: 'C', text: 'Thinking "I\'ll just do it myself" or telling AI vaguely: "Help me write an activity plan."' },
        { key: 'D', text: 'Asking the AI for 3 distinct options to compare.' }
      ],
      correctAnswer: 'C',
      explanation: 'The executor mindset either avoids AI entirely or uses it without clear direction.'
    },
    {
      id: 8,
      question: 'When acting as an "AI Commander," what is your specific duty after the AI generates three different plan options?',
      options: [
        { key: 'A', text: 'Send all three to the boss immediately.' },
        { key: 'B', text: 'Pick the first one blindly.' },
        { key: 'C', text: 'Screen, Edit, Decide, and Take Responsibility for the final choice.' },
        { key: 'D', text: 'Ask the AI to choose the best one.' }
      ],
      correctAnswer: 'C',
      explanation: 'As commander, you must evaluate options, make decisions, and own the outcome.'
    },
    {
      id: 9,
      question: 'The training states that "Prompting" is essentially equal to what management concept?',
      options: [
        { key: 'A', text: 'Coding.' },
        { key: 'B', text: 'Task Assignment / Delegation.' },
        { key: 'C', text: 'Data Entry.' },
        { key: 'D', text: 'Brainstorming.' }
      ],
      correctAnswer: 'B',
      explanation: 'Prompting is fundamentally about delegating tasks with clear instructions.'
    },
    {
      id: 10,
      question: 'What is the "Identity Leap" (Identity Shift) described in the training?',
      options: [
        { key: 'A', text: 'From "Writer" to "Reader."' },
        { key: 'B', text: 'From "Proposal Writer" to "Proposal Person-in-Charge."' },
        { key: 'C', text: 'From "Junior" to "Senior."' },
        { key: 'D', text: 'From "Human" to "Cyborg."' }
      ],
      correctAnswer: 'B',
      explanation: 'The identity shift is from being the doer to being the responsible decision-maker.'
    },
    {
      id: 11,
      question: 'Complete the psychological anchor: "People who use AI are not replacing themselves, they are _________."',
      options: [
        { key: 'A', text: '...fixing themselves.' },
        { key: 'B', text: '...entertaining themselves.' },
        { key: 'C', text: '...amplifying themselves.' },
        { key: 'D', text: '...deleting themselves.' }
      ],
      correctAnswer: 'C',
      explanation: 'AI is a tool for amplification, not replacement. It extends your capabilities.'
    },
    {
      id: 12,
      question: 'From a management perspective, why is it "strictly prohibited" to say "I don\'t need to know how to do this job because AI can do it"?',
      options: [
        { key: 'A', text: 'Because AI licenses are expensive.' },
        { key: 'B', text: 'Because if you don\'t know the job, you cannot judge if the AI\'s output is right or wrong.' },
        { key: 'C', text: 'Because the boss wants to see you suffer.' },
        { key: 'D', text: 'Because AI refuses to work for unskilled people.' }
      ],
      correctAnswer: 'B',
      explanation: 'You need domain knowledge to evaluate and correct AI output. Blind reliance is dangerous.'
    },
    {
      id: 13,
      question: 'Which of the following is a known risk of AI mentioned in the "Reality Judgment"?',
      options: [
        { key: 'A', text: 'It might become sentient and take over the office.' },
        { key: 'B', text: 'It acts too slowly to be useful.' },
        { key: 'C', text: 'It may misunderstand goals, fabricate unverified content, or give answers that "look right but are wrong."' },
        { key: 'D', text: 'It asks for a salary raise.' }
      ],
      correctAnswer: 'C',
      explanation: 'AI can hallucinate, misinterpret, or produce plausible-sounding but incorrect information.'
    },
    {
      id: 14,
      question: 'What is the "Bottom Line" (兜底) concept regarding your relationship with AI?',
      options: [
        { key: 'A', text: 'You must pay for the bottom-tier subscription.' },
        { key: 'B', text: 'If the AI fails or disappears, you must be capable of finishing the task manually.' },
        { key: 'C', text: 'You should always choose the lowest quality option to save money.' },
        { key: 'D', text: 'You are the bottom of the hierarchy, AI is the top.' }
      ],
      correctAnswer: 'B',
      explanation: 'You must maintain the ability to complete work without AI as a safety net.'
    },
    {
      id: 15,
      question: 'The training uses the "Calculator Analogy" to explain professional value. What is the lesson?',
      options: [
        { key: 'A', text: 'Calculators are obsolete, and so is AI.' },
        { key: 'B', text: 'For someone who knows math, a calculator is an accelerator; for someone who doesn\'t, it is a risk.' },
        { key: 'C', text: 'You should only use AI for math problems.' },
        { key: 'D', text: 'AI is exactly like a calculator because it never makes mistakes.' }
      ],
      correctAnswer: 'B',
      explanation: 'Tools amplify competence but also amplify incompetence. Knowledge is essential.'
    },
    {
      id: 16,
      question: 'Which of the following is one of the "Three Principles of Safe AI Use"?',
      options: [
        { key: 'A', text: 'AI is responsible for the final outcome.' },
        { key: 'B', text: 'AI creates the final draft without human review.' },
        { key: 'C', text: 'AI is responsible for outputting, but humans are responsible for judgment/correctness.' },
        { key: 'D', text: 'Humans should never manually intervene.' }
      ],
      correctAnswer: 'C',
      explanation: 'AI generates, humans judge. The division of responsibility is clear.'
    },
    {
      id: 17,
      question: 'Who is defined as the "Truly Valuable Person" in the future AI era?',
      options: [
        { key: 'A', text: 'The person who knows the most prompt hacks.' },
        { key: 'B', text: 'The person who can do the job well AND use AI to do it faster/better.' },
        { key: 'C', text: 'The person who refuses to use AI to maintain purity.' },
        { key: 'D', text: 'The person who lets AI do 100% of the work.' }
      ],
      correctAnswer: 'B',
      explanation: 'The combination of professional competence and AI skills creates the most value.'
    },
    {
      id: 18,
      question: 'If an AI generates a report with a fabricated statistic, who is to blame according to the training?',
      options: [
        { key: 'A', text: 'OpenAI / The Model Provider.' },
        { key: 'B', text: 'The IT Department.' },
        { key: 'C', text: 'You (The User).' },
        { key: 'D', text: 'No one, it\'s a computer error.' }
      ],
      correctAnswer: 'C',
      explanation: 'As the user, you are responsible for verifying output before using it.'
    },
    {
      id: 19,
      question: 'Why is "Judgment" considered a core skill in the new role?',
      options: [
        { key: 'A', text: 'Because AI generates many options, and you must select the correct one.' },
        { key: 'B', text: 'Because you need to judge if the AI is sentient.' },
        { key: 'C', text: 'Because you need to judge your colleagues.' },
        { key: 'D', text: 'It is not considered a core skill.' }
      ],
      correctAnswer: 'A',
      explanation: 'With AI providing options, your judgment in selecting and refining becomes critical.'
    },
    {
      id: 20,
      question: 'The training concludes that using AI allows you to put yourself in a "higher position." What does this mean?',
      options: [
        { key: 'A', text: 'You get a corner office.' },
        { key: 'B', text: 'You move from execution (doing) to management (decision making).' },
        { key: 'C', text: 'You can look down on people who don\'t use AI.' },
        { key: 'D', text: 'You get paid more for doing nothing.' }
      ],
      correctAnswer: 'B',
      explanation: 'AI frees you from routine execution to focus on higher-level decision-making.'
    }
  ],

  part2: [
    {
      id: 1,
      question: 'According to the "AI Commander\'s Handbook," what is the primary reason AI often fails to provide a useful result?',
      options: [
        { key: 'A', text: 'The AI model is not advanced enough.' },
        { key: 'B', text: 'The user gave a task that was "unexecutable" due to lack of clarity.' },
        { key: 'C', text: 'The internet connection was unstable.' },
        { key: 'D', text: 'The prompt was not written in code.' }
      ],
      correctAnswer: 'B',
      explanation: 'Poor results usually stem from unclear or incomplete instructions, not AI limitations.'
    },
    {
      id: 2,
      question: 'Which of the following is considered an "unexecutable task" that you should avoid giving to AI?',
      options: [
        { key: 'A', text: '"Write a 15-second script about lipstick."' },
        { key: 'B', text: '"Help me optimize this."' },
        { key: 'C', text: '"List 3 competitors in the beauty industry."' },
        { key: 'D', text: '"Summarize this text in 50 words."' }
      ],
      correctAnswer: 'B',
      explanation: '"Optimize this" lacks specificity about what to optimize and how.'
    },
    {
      id: 3,
      question: 'When defining the "Context" (Background) for an AI task, who should you pretend the AI is?',
      options: [
        { key: 'A', text: 'A senior expert who knows everything.' },
        { key: 'B', text: 'A database administrator.' },
        { key: 'C', text: 'A new employee on their first day who knows nothing about your company.' },
        { key: 'D', text: 'A rigorous college professor.' }
      ],
      correctAnswer: 'C',
      explanation: 'This mindset helps you provide all necessary context that the AI lacks.'
    },
    {
      id: 4,
      question: 'In the "4 Things" framework for a valid prompt, what are the four required elements?',
      options: [
        { key: 'A', text: 'Tone, Length, Format, Keywords.' },
        { key: 'B', text: 'Introduction, Body, Conclusion, References.' },
        { key: 'C', text: 'Context, Current Problem, Desired Result, Restrictions/Constraints.' },
        { key: 'D', text: 'Salary, Deadline, Boss\'s Name, Project Title.' }
      ],
      correctAnswer: 'C',
      explanation: 'The 4 Things framework ensures comprehensive task communication.'
    },
    {
      id: 5,
      question: 'Why is it critical to state "Restrictions" (what not to do) in your prompt?',
      options: [
        { key: 'A', text: 'To make the prompt look longer.' },
        { key: 'B', text: 'Because if you don\'t state restrictions, the AI will "make up" its own, often resulting in generic or inappropriate content.' },
        { key: 'C', text: 'To test if the AI is listening.' },
        { key: 'D', text: 'To save tokens/cost.' }
      ],
      correctAnswer: 'B',
      explanation: 'Without explicit restrictions, AI may include unwanted elements in its output.'
    },
    {
      id: 6,
      question: 'When defining the "Problem" in a prompt, what should you do instead of pretending you know what you are doing?',
      options: [
        { key: 'A', text: 'Use complex jargon to sound professional.' },
        { key: 'B', text: 'State the "Real Difficulty" (e.g., "I think the logic is messy" or "I am stuck on the hook").' },
        { key: 'C', text: 'Ask the AI to guess the problem.' },
        { key: 'D', text: 'Leave it blank so the AI has more freedom.' }
      ],
      correctAnswer: 'B',
      explanation: 'Being honest about your difficulties helps AI provide more targeted assistance.'
    },
    {
      id: 7,
      question: 'Which of the following represents a "Commander" style prompt rather than an "Executor" style prompt?',
      options: [
        { key: 'A', text: '"Write a promotion plan."' },
        { key: 'B', text: '"I need a plan for old users to boost repurchase, without using discounts. Give me 3 directions focusing on content interaction."' },
        { key: 'C', text: '"Give me some ideas for TikTok."' },
        { key: 'D', text: '"Make this better."' }
      ],
      correctAnswer: 'B',
      explanation: 'A commander prompt is specific, constrained, and requests structured output.'
    },
    {
      id: 8,
      question: 'In the TikTok script scenario, what is the specific failure of the "Old Role/Executor" asking "Help me write a script"?',
      options: [
        { key: 'A', text: 'The script is too short.' },
        { key: 'B', text: 'The script lacks a hook, doesn\'t know the selling point, and looks like a TV commercial.' },
        { key: 'C', text: 'The script is in the wrong language.' },
        { key: 'D', text: 'The script is too creative.' }
      ],
      correctAnswer: 'B',
      explanation: 'Without specific guidance, AI produces generic content unsuitable for the platform.'
    },
    {
      id: 9,
      question: 'When reviewing an AI-generated TikTok script, what is the FIRST thing a human must judge?',
      options: [
        { key: 'A', text: 'Are there spelling errors?' },
        { key: 'B', text: 'Does the "Hook" (first 3 seconds) actually make someone stop scrolling?' },
        { key: 'C', text: 'Is the grammar perfect?' },
        { key: 'D', text: 'Did the AI use the requested keywords?' }
      ],
      correctAnswer: 'B',
      explanation: 'The hook\'s effectiveness determines whether the video will be watched at all.'
    },
    {
      id: 10,
      question: 'If an AI generates a script that is "Textually Correct" (good grammar, clear structure) but "Platform Wrong" (feels like an ad), what should you do?',
      options: [
        { key: 'A', text: 'Publish it anyway to save time.' },
        { key: 'B', text: 'Change the platform to YouTube.' },
        { key: 'C', text: 'Perform "Key Node Takeover": Keep the structure but manually rewrite the hook and tone to sound like a human.' },
        { key: 'D', text: 'Ask the AI to write it again 10 times.' }
      ],
      correctAnswer: 'C',
      explanation: 'Strategic human intervention at key points preserves AI efficiency while fixing platform fit.'
    },
    {
      id: 11,
      question: 'What is the core principle regarding AI output for video scripts?',
      options: [
        { key: 'A', text: 'AI gives the "Final Movie."' },
        { key: 'B', text: 'AI gives the "Raw Material/Options," not the "Final Answer."' },
        { key: 'C', text: 'AI scripts should be filmed exactly as written.' },
        { key: 'D', text: 'AI cannot write scripts.' }
      ],
      correctAnswer: 'B',
      explanation: 'AI provides drafts and options that require human refinement and selection.'
    },
    {
      id: 12,
      question: 'In the example of selling a whitening supplement, what specific constraint helps the AI avoid writing a "hard sell" ad?',
      options: [
        { key: 'A', text: '"Make it viral."' },
        { key: 'B', text: '"Target audience 25-35 females, focus on safety, sound like a real person sharing."' },
        { key: 'C', text: '"Use the word \'Buy\' five times."' },
        { key: 'D', text: '"Write it in the style of Shakespeare."' }
      ],
      correctAnswer: 'B',
      explanation: 'Specific audience, focus, and tone constraints guide AI away from generic advertising.'
    },
    {
      id: 13,
      question: 'When asking AI to analyze a viral video, what is the "Executor" mistake?',
      options: [
        { key: 'A', text: 'Asking "Why is this good?" which leads to generic answers like "It resonates emotionally."' },
        { key: 'B', text: 'Asking for a transcript.' },
        { key: 'C', text: 'Asking for the view count.' },
        { key: 'D', text: 'Asking for the creator\'s name.' }
      ],
      correctAnswer: 'A',
      explanation: 'Vague questions yield vague, unhelpful answers.'
    },
    {
      id: 14,
      question: 'What is the "Commander" approach to Viral Video Analysis?',
      options: [
        { key: 'A', text: 'Asking the AI to copy the video exactly.' },
        { key: 'B', text: 'Asking the AI to "Abstract" the structure, explaining the logic of the first 3 seconds and how the content advances.' },
        { key: 'C', text: 'Asking the AI to find the video\'s music.' },
        { key: 'D', text: 'Asking the AI if it likes the video.' }
      ],
      correctAnswer: 'B',
      explanation: 'A commander seeks actionable structural insights, not surface-level opinions.'
    },
    {
      id: 15,
      question: 'When AI analyzes a viral video, what is the specific "Human Bottom Line" responsibility?',
      options: [
        { key: 'A', text: 'To memorize the analysis.' },
        { key: 'B', text: 'To decide what is "Copyable Structure" vs. what is "Unique to that Account" (and therefore shouldn\'t be copied).' },
        { key: 'C', text: 'To email the analysis to the original creator.' },
        { key: 'D', text: 'To trust the AI\'s judgment on why it went viral.' }
      ],
      correctAnswer: 'B',
      explanation: 'Humans must distinguish between transferable patterns and context-specific elements.'
    },
    {
      id: 16,
      question: 'In the "Promotion Activity" scenario, if AI suggests a complex mechanism, what "Reality Check" must the human perform?',
      options: [
        { key: 'A', text: 'Does the math add up?' },
        { key: 'B', text: 'Do we actually have the resources/budget, and will a user actually have the patience to do these steps?' },
        { key: 'C', text: 'Is the color scheme correct?' },
        { key: 'D', text: 'Did the AI finish within 10 seconds?' }
      ],
      correctAnswer: 'B',
      explanation: 'Feasibility and user experience reality checks are essential human responsibilities.'
    },
    {
      id: 17,
      question: 'What is the "Failure Signal" for a Promotion/Activity plan generated by AI?',
      options: [
        { key: 'A', text: 'It is "Theoretically Correct" but "Reality Wrong" (ignores execution cost).' },
        { key: 'B', text: 'It is too short.' },
        { key: 'C', text: 'It suggests giving away free money.' },
        { key: 'D', text: 'It uses emojis.' }
      ],
      correctAnswer: 'A',
      explanation: 'Plans that ignore practical constraints are useless regardless of logical soundness.'
    },
    {
      id: 18,
      question: 'What are the "Three Principles of AI Bottom Line"?',
      options: [
        { key: 'A', text: 'AI is always right; Human is always wrong; Speed is key.' },
        { key: 'B', text: 'AI Output ≠ Publishable; External content requires Human Judgment; Humans must be able to do the work manually if AI fails.' },
        { key: 'C', text: 'Always use the paid version; Never tell the boss; Edit everything.' },
        { key: 'D', text: 'Trust, Verify, Publish.' }
      ],
      correctAnswer: 'B',
      explanation: 'These principles establish clear boundaries for safe AI use.'
    },
    {
      id: 19,
      question: 'What is described as the "Most Dangerous" signal when using AI?',
      options: [
        { key: 'A', text: 'When the AI says "I don\'t know."' },
        { key: 'B', text: 'When the output looks "Perfect" and "Very likely to be right," leading you to trust it without checking.' },
        { key: 'C', text: 'When the AI generates text slowly.' },
        { key: 'D', text: 'When the AI refuses to answer.' }
      ],
      correctAnswer: 'B',
      explanation: 'Overconfidence in polished output leads to unchecked errors.'
    },
    {
      id: 20,
      question: 'If the AI output is "Too Perfect," what does the "Failure Signal Table" suggest it might mean?',
      options: [
        { key: 'A', text: 'It is ready to publish.' },
        { key: 'B', text: 'It might be inauthentic or fake; you should Check & Modify.' },
        { key: 'C', text: 'The AI is a genius.' },
        { key: 'D', text: 'You should give the AI a tip.' }
      ],
      correctAnswer: 'B',
      explanation: 'Perfection can signal generic or fabricated content that needs verification.'
    },
    {
      id: 21,
      question: 'According to the training, who is responsible if the AI content fails?',
      options: [
        { key: 'A', text: 'The software developer.' },
        { key: 'B', text: 'The "Prompt Engineer."' },
        { key: 'C', text: 'You (The User) are always the bottom line.' },
        { key: 'D', text: 'The audience for not understanding it.' }
      ],
      correctAnswer: 'C',
      explanation: 'User responsibility is non-negotiable regardless of AI involvement.'
    },
    {
      id: 22,
      question: 'How should you view the "Bottom Line" (兜底)?',
      options: [
        { key: 'A', text: 'It means you have to rewrite everything from scratch.' },
        { key: 'B', text: 'It means doing the work manually so you don\'t lose your skills.' },
        { key: 'C', text: 'It means you are the "Driver" controlling the direction and hitting the brakes if necessary, not just a passenger.' },
        { key: 'D', text: 'It means you are the lowest-paid employee.' }
      ],
      correctAnswer: 'C',
      explanation: 'You maintain control and intervention capability at all times.'
    },
    {
      id: 23,
      question: 'What is the "One-Shot" Fallacy mentioned in Part 2?',
      options: [
        { key: 'A', text: 'The belief that AI can only do one task at a time.' },
        { key: 'B', text: 'The expectation that a single prompt should yield a perfect answer, leading to disappointment.' },
        { key: 'C', text: 'The idea that you only get one chance to use AI per day.' },
        { key: 'D', text: 'The belief that prompts must be one sentence long.' }
      ],
      correctAnswer: 'B',
      explanation: 'Expecting perfection from one try sets unrealistic expectations.'
    },
    {
      id: 24,
      question: 'What is the correct working relationship/cycle with AI?',
      options: [
        { key: 'A', text: 'Ask -> Receive -> Publish.' },
        { key: 'B', text: 'Human Direction -> AI Draft -> Human Judgment -> Feedback -> Refinement.' },
        { key: 'C', text: 'AI Idea -> Human Approval.' },
        { key: 'D', text: 'Google -> Paste to AI -> Copy Result.' }
      ],
      correctAnswer: 'B',
      explanation: 'The iterative cycle involves continuous human guidance and evaluation.'
    },
    {
      id: 25,
      question: 'Why is the "First Round" of AI output rarely perfect?',
      options: [
        { key: 'A', text: 'Because the AI is lazy.' },
        { key: 'B', text: 'Because your first understanding of the problem is usually incomplete; the first result helps "expose the problem."' },
        { key: 'C', text: 'Because AI saves the good answers for paid users.' },
        { key: 'D', text: 'Because the server needs to warm up.' }
      ],
      correctAnswer: 'B',
      explanation: 'Initial output reveals gaps in your own thinking and instructions.'
    },
    {
      id: 26,
      question: 'When the AI output is not what you wanted, what is the "Managerial" approach?',
      options: [
        { key: 'A', text: 'Stop using AI.' },
        { key: 'B', text: 'Complain that AI is stupid.' },
        { key: 'C', text: 'Provide specific feedback (like "Too generic" or "Wrong tone") and ask for a revision, just like coaching a junior colleague.' },
        { key: 'D', text: 'Type the exact same prompt again.' }
      ],
      correctAnswer: 'C',
      explanation: 'Specific, constructive feedback drives improvement in subsequent iterations.'
    },
    {
      id: 27,
      question: 'Which of the following is a "Universal Follow-up Question" to improve AI results?',
      options: [
        { key: 'A', text: '"Are you sure?"' },
        { key: 'B', text: '"This is too generic, please give me actionable content."' },
        { key: 'C', text: '"Why are you like this?"' },
        { key: 'D', text: '"Hello?"' }
      ],
      correctAnswer: 'B',
      explanation: 'Requesting specificity and actionability is a reliable improvement strategy.'
    },
    {
      id: 28,
      question: 'If you receive three options from AI, what is the immediate next step in the loop?',
      options: [
        { key: 'A', text: 'Pick one randomly.' },
        { key: 'B', text: 'Combine all three.' },
        { key: 'C', text: 'Tell the AI which one is closest to your needs and why, then ask for a refined version based on that specific direction.' },
        { key: 'D', text: 'Ask for three more options.' }
      ],
      correctAnswer: 'C',
      explanation: 'Selecting and refining the best option accelerates convergence to the desired result.'
    },
    {
      id: 29,
      question: 'The training states that "People who are good at AI" are not those who write perfect prompts, but those who...?',
      options: [
        { key: 'A', text: '...know how to code python.' },
        { key: 'B', text: '...know "what to say next" (how to iterate).' },
        { key: 'C', text: '...type the fastest.' },
        { key: 'D', text: '...have the most expensive computer.' }
      ],
      correctAnswer: 'B',
      explanation: 'Iteration skill—knowing how to guide and refine—is more important than initial prompt quality.'
    },
    {
      id: 30,
      question: 'In the "New World" of AI operations, what is the competition about?',
      options: [
        { key: 'A', text: 'Who writes faster.' },
        { key: 'B', text: 'Who judges more accurately.' },
        { key: 'C', text: 'Who works more hours.' },
        { key: 'D', text: 'Who memorizes more commands.' }
      ],
      correctAnswer: 'B',
      explanation: 'Judgment quality becomes the key differentiator when execution is automated.'
    },
    {
      id: 31,
      question: 'What analogy is used to describe the "Context" you provide to AI?',
      options: [
        { key: 'A', text: 'A dictionary definition.' },
        { key: 'B', text: 'A mathematical formula.' },
        { key: 'C', text: 'Onboarding a new colleague.' },
        { key: 'D', text: 'A search query.' }
      ],
      correctAnswer: 'C',
      explanation: 'The onboarding analogy helps frame what information AI needs to perform effectively.'
    },
    {
      id: 32,
      question: 'When AI provides a "Viral Analysis," what is the Human\'s task regarding "Actionability"?',
      options: [
        { key: 'A', text: 'To check the spelling.' },
        { key: 'B', text: 'To force the AI to convert "Abstract Evaluation" into "Concrete Method" (e.g., "Give me 3 structures I can use tomorrow").' },
        { key: 'C', text: 'To print it out.' },
        { key: 'D', text: 'To ask for the source code.' }
      ],
      correctAnswer: 'B',
      explanation: 'Pushing for actionable output transforms analysis into usable guidance.'
    },
    {
      id: 33,
      question: 'If an AI-generated activity plan looks "Logical" but requires users to jump through 5 different hoops, what check failed?',
      options: [
        { key: 'A', text: 'The Grammar Check.' },
        { key: 'B', text: 'The "Executive Cost vs. Reward" Reality Check.' },
        { key: 'C', text: 'The Creativity Check.' },
        { key: 'D', text: 'The Tone Check.' }
      ],
      correctAnswer: 'B',
      explanation: 'User effort must be proportional to perceived value.'
    },
    {
      id: 34,
      question: 'What is the "Golden Rule" for the AI Commander regarding options?',
      options: [
        { key: 'A', text: 'AI generates options; Human makes the decision.' },
        { key: 'B', text: 'Human generates options; AI makes the decision.' },
        { key: 'C', text: 'AI generates options; AI makes the decision.' },
        { key: 'D', text: 'Human generates options; Human makes the decision (AI is not used).' }
      ],
      correctAnswer: 'A',
      explanation: 'AI expands possibilities; humans exercise judgment to select.'
    },
    {
      id: 35,
      question: 'The ultimate goal of Part 2 is to move from "One-off usage" to...?',
      options: [
        { key: 'A', text: '"Never using it."' },
        { key: 'B', text: '"Using it only for fun."' },
        { key: 'C', text: '"Making it a daily working habit/flow."' },
        { key: 'D', text: '"Replacing all employees."' }
      ],
      correctAnswer: 'C',
      explanation: 'The goal is to integrate AI seamlessly into regular workflow.'
    }
  ],

  part3: [
    {
      id: 1,
      question: 'How does Part 3 define the ultimate positioning of AI in your work?',
      options: [
        { key: 'A', text: 'It is an optional tool to use when you are tired.' },
        { key: 'B', text: 'It is not just adding a tool, but rewriting "how you do things" and "how you report."' },
        { key: 'C', text: 'It is a secret weapon to hide from your boss.' },
        { key: 'D', text: 'It is a way to automate your job so you can sleep.' }
      ],
      correctAnswer: 'B',
      explanation: 'AI integration requires fundamentally changing your work processes and how you communicate results, not just adding another tool.'
    },
    {
      id: 2,
      question: 'Many people learn AI skills but fail to apply them effectively. According to the text, this is not a "skill problem," but a...?',
      options: [
        { key: 'A', text: '"Hardware problem."' },
        { key: 'B', text: '"Process problem" (they haven\'t entered the workflow).' },
        { key: 'C', text: '"Salary problem."' },
        { key: 'D', text: '"Language problem."' }
      ],
      correctAnswer: 'B',
      explanation: 'The key barrier is integrating AI into your actual workflow, not just knowing how to use it.'
    },
    {
      id: 3,
      question: 'In the new standard, when should AI be used?',
      options: [
        { key: 'A', text: 'Only for creative writing.' },
        { key: 'B', text: 'As the "Default Start" for all complex tasks.' },
        { key: 'C', text: 'Only when you run out of ideas.' },
        { key: 'D', text: 'After you have finished the work, to check for errors.' }
      ],
      correctAnswer: 'B',
      explanation: 'AI should be the default starting point for complex tasks, not an afterthought or fallback.'
    },
    {
      id: 4,
      question: 'What is the "Unified Answer" for how the team should operate?',
      options: [
        { key: 'A', text: 'The "Random Brainstorming Method."' },
        { key: 'B', text: 'The "Standard AI Work Cycle."' },
        { key: 'C', text: 'The "Google Search Method."' },
        { key: 'D', text: 'The "Boss Command Method."' }
      ],
      correctAnswer: 'B',
      explanation: 'The Standard AI Work Cycle provides a consistent framework for the entire team.'
    },
    {
      id: 5,
      question: 'What is the "Golden Sentence" regarding the relationship between Part 1/2 and Part 3?',
      options: [
        { key: 'A', text: '"Part 3 is optional."' },
        { key: 'B', text: '"AI is not a tool, but a colleague."' },
        { key: 'C', text: '"Many people know how to use it, but don\'t know when to use it or how to account for it."' },
        { key: 'D', text: '"Always trust the algorithm."' }
      ],
      correctAnswer: 'C',
      explanation: 'Knowing AI skills is not enough; you need to know when to apply them and how to report on the results.'
    },
    {
      id: 6,
      question: 'Step 1 of the Standard AI Work Cycle is purely "Human." What must you do before asking AI?',
      options: [
        { key: 'A', text: 'Open ChatGPT.' },
        { key: 'B', text: 'Define the problem, the desired success result, and the areas of uncertainty.' },
        { key: 'C', text: 'Ask a colleague for a prompt.' },
        { key: 'D', text: 'Search for a template.' }
      ],
      correctAnswer: 'B',
      explanation: 'Clear problem definition and success criteria must come from human thinking before involving AI.'
    },
    {
      id: 7,
      question: 'In Step 2 (Human → AI: Round 1), what is the single goal?',
      options: [
        { key: 'A', text: 'To get the final answer immediately.' },
        { key: 'B', text: 'To test the AI\'s speed.' },
        { key: 'C', text: 'To let AI "Open the Possibility Space" (give directions/options).' },
        { key: 'D', text: 'To generate the final report.' }
      ],
      correctAnswer: 'C',
      explanation: 'The first AI round is about exploration and generating options, not getting final answers.'
    },
    {
      id: 8,
      question: 'Which of the following is a recommended command for Step 2?',
      options: [
        { key: 'A', text: '"Write the final report."' },
        { key: 'B', text: '"Give me 3 directions" or "Give me a structure."' },
        { key: 'C', text: '"Fix this grammar."' },
        { key: 'D', text: '"Do it exactly as I say."' }
      ],
      correctAnswer: 'B',
      explanation: 'Asking for multiple directions or a structure helps open the possibility space.'
    },
    {
      id: 9,
      question: 'What characterizes Step 3 (Human: Judgment & Screening)?',
      options: [
        { key: 'A', text: 'It is the step where you copy-paste the result.' },
        { key: 'B', text: 'It is the "Highest Value" step where you must pause AI and use your own judgment to filter feasible options.' },
        { key: 'C', text: 'It is the step where you send the result to the boss.' },
        { key: 'D', text: 'It is the step where you ignore the AI.' }
      ],
      correctAnswer: 'B',
      explanation: 'Human judgment is the highest-value contribution in the cycle.'
    },
    {
      id: 10,
      question: 'In Step 4 (Human → AI: Round 2), what is the "Feedback" action?',
      options: [
        { key: 'A', text: 'Asking the AI to try again randomly.' },
        { key: 'B', text: 'Calibrating the AI: "Keep this direction, modify that part, consider these constraints."' },
        { key: 'C', text: 'Accepting the first draft.' },
        { key: 'D', text: 'Starting over from scratch.' }
      ],
      correctAnswer: 'B',
      explanation: 'Feedback is specific guidance to refine the AI output based on your judgment.'
    },
    {
      id: 11,
      question: 'What happens in Step 5 (AI: Optimization Output)?',
      options: [
        { key: 'A', text: 'The AI generates the first draft.' },
        { key: 'B', text: 'The output becomes closer to execution (e.g., more fitted to the brand or TikTok style).' },
        { key: 'C', text: 'The AI refuses to work.' },
        { key: 'D', text: 'The AI asks you for money.' }
      ],
      correctAnswer: 'B',
      explanation: 'After calibration, the AI produces output that is closer to being execution-ready.'
    },
    {
      id: 12,
      question: 'In Step 6 (Final Bottom Line), what question must the human answer that AI cannot?',
      options: [
        { key: 'A', text: '"Is the grammar correct?"' },
        { key: 'B', text: '"Can this actually be executed? What are the risks? What is the backup plan?"' },
        { key: 'C', text: '"How many words are there?"' },
        { key: 'D', text: '"Did I use the latest model?"' }
      ],
      correctAnswer: 'B',
      explanation: 'Execution feasibility, risk assessment, and contingency planning require human judgment.'
    },
    {
      id: 13,
      question: 'What is the correct "Mnemonic" for the team to remember the cycle?',
      options: [
        { key: 'A', text: 'Ask AI -> Get Result -> Send Email.' },
        { key: 'B', text: 'Give Direction -> See Result -> Human Judgment -> Make It Fix -> Final Bottom Line.' },
        { key: 'C', text: 'Brainstorm -> Draft -> Edit -> Publish.' },
        { key: 'D', text: 'Problem -> Solution -> Execution.' }
      ],
      correctAnswer: 'B',
      explanation: 'This mnemonic captures the key steps of the Standard AI Work Cycle.'
    },
    {
      id: 14,
      question: 'Why is Step 1 explicitly marked "Do not ask AI"?',
      options: [
        { key: 'A', text: 'Because AI doesn\'t understand English well.' },
        { key: 'B', text: 'Because you must define the task from a "Person in Charge" perspective first; otherwise, you have no criteria to judge the result.' },
        { key: 'C', text: 'To save electricity.' },
        { key: 'D', text: 'Because the boss said so.' }
      ],
      correctAnswer: 'B',
      explanation: 'Without your own clear definition, you cannot evaluate whether AI output meets your needs.'
    },
    {
      id: 15,
      question: 'If you skip Step 3 (Judgment) and go straight to execution, what error are you committing?',
      options: [
        { key: 'A', text: 'You are being too efficient.' },
        { key: 'B', text: 'You are failing to act as the "Commander" and letting the "Executor" (AI) decide strategy.' },
        { key: 'C', text: 'You are saving time.' },
        { key: 'D', text: 'You are trusting the process.' }
      ],
      correctAnswer: 'B',
      explanation: 'Skipping judgment means abdicating your decision-making responsibility to the AI.'
    },
    {
      id: 16,
      question: 'For TikTok Scripts, what is the mandatory rule in the new workflow?',
      options: [
        { key: 'A', text: 'Scripts must be written entirely by humans.' },
        { key: 'B', text: 'Any script must go through at least 2 rounds of the AI cycle before being finalized.' },
        { key: 'C', text: 'AI scripts must be published without editing.' },
        { key: 'D', text: 'Scripts must be under 10 seconds.' }
      ],
      correctAnswer: 'B',
      explanation: 'The iterative cycle ensures quality through human judgment and refinement.'
    },
    {
      id: 17,
      question: 'In the TikTok Script scenario, what is the specific "Human Responsibility"?',
      options: [
        { key: 'A', text: 'Generating the topic.' },
        { key: 'B', text: 'Rewriting the "Critical First 3 Seconds" (Hook) and ensuring risk control/compliance.' },
        { key: 'C', text: 'Checking spelling.' },
        { key: 'D', text: 'Uploading the video.' }
      ],
      correctAnswer: 'B',
      explanation: 'The hook and risk management are critical human responsibilities in content creation.'
    },
    {
      id: 18,
      question: 'For Viral Video Analysis, what is strictly prohibited?',
      options: [
        { key: 'A', text: 'Using AI to transcribe the video.' },
        { key: 'B', text: 'Just saying "This video is very good" or relying on "feeling."' },
        { key: 'C', text: 'Analyzing competitors.' },
        { key: 'D', text: 'Watching the video more than once.' }
      ],
      correctAnswer: 'B',
      explanation: 'Analysis must be structured and actionable, not based on vague feelings.'
    },
    {
      id: 19,
      question: 'How should Viral Analysis work between Human and AI?',
      options: [
        { key: 'A', text: 'AI abstracts the "Reusable Rules"; Human watches the video.' },
        { key: 'B', text: 'AI breaks down structure/rhythm; Human abstracts this into "Internal Methodology/Rules."' },
        { key: 'C', text: 'Human breaks down structure; AI watches the video.' },
        { key: 'D', text: 'AI decides if the video is funny.' }
      ],
      correctAnswer: 'B',
      explanation: 'AI handles structural analysis while humans extract actionable methodology.'
    },
    {
      id: 20,
      question: 'In the Activity/Conversion Design scenario, if AI gives 3 options, what must the human explain?',
      options: [
        { key: 'A', text: 'Which option is the cheapest.' },
        { key: 'B', text: 'The prompt used.' },
        { key: 'C', text: 'The reasoning: "Why did I choose this specific option?" (Judgment Logic).' },
        { key: 'D', text: 'The name of the AI model used.' }
      ],
      correctAnswer: 'C',
      explanation: 'The judgment logic behind your choice is essential for accountability.'
    },
    {
      id: 21,
      question: 'What implies that a team member is not following the "Standard Work Cycle" in scriptwriting?',
      options: [
        { key: 'A', text: 'They present a script that has clearly been edited for tone.' },
        { key: 'B', text: 'They use the first result the AI generated without a "Feedback/Calibration" round.' },
        { key: 'C', text: 'They explain the risk factors of the script.' },
        { key: 'D', text: 'They ask the AI for 3 different hook options.' }
      ],
      correctAnswer: 'B',
      explanation: 'Using first-draft AI output without iteration indicates skipping the standard cycle.'
    },
    {
      id: 22,
      question: 'What is the Boss\'s "Clear Standpoint" regarding AI usage?',
      options: [
        { key: 'A', text: '"You must use AI for everything."' },
        { key: 'B', text: '"Using AI is a KPI."' },
        { key: 'C', text: '"I don\'t care how you use it; I only care about the result."' },
        { key: 'D', text: '"I want to see your chat logs."' }
      ],
      correctAnswer: 'C',
      explanation: 'Management focuses on outcomes, not the tools used to achieve them.'
    },
    {
      id: 23,
      question: 'Which of the following phrases is strictly prohibited when reporting to the boss?',
      options: [
        { key: 'A', text: '"I analyzed the data and found..."' },
        { key: 'B', text: '"The risk is manageable."' },
        { key: 'C', text: '"This is what AI generated" or "AI thinks this is better."' },
        { key: 'D', text: '"I chose Option B because..."' }
      ],
      correctAnswer: 'C',
      explanation: 'You cannot use AI as a shield or excuse; you own the output.'
    },
    {
      id: 24,
      question: 'Why is saying "This is what ChatGPT generated" forbidden?',
      options: [
        { key: 'A', text: 'Because the boss hates ChatGPT.' },
        { key: 'B', text: 'Because AI cannot be used as a "Shield" (Excuse); you are responsible for the output.' },
        { key: 'C', text: 'Because it sounds too technical.' },
        { key: 'D', text: 'Because of copyright issues.' }
      ],
      correctAnswer: 'B',
      explanation: 'Taking responsibility means owning the output regardless of how it was created.'
    },
    {
      id: 25,
      question: 'What are the 3 things the boss looks for in a report?',
      options: [
        { key: 'A', text: 'Prompt, Length, Speed.' },
        { key: 'B', text: 'Conclusion, Judgment Basis (Logic), Risk & Bottom Line.' },
        { key: 'C', text: 'Creativity, Humor, Graphics.' },
        { key: 'D', text: 'Effort, Time Spent, AI Tool Used.' }
      ],
      correctAnswer: 'B',
      explanation: 'Clear conclusions, sound reasoning, and risk awareness are what matter in reporting.'
    },
    {
      id: 26,
      question: 'In the "Standard Reporting Template," where should the word "AI" appear?',
      options: [
        { key: 'A', text: 'In the "Judgment Basis" section.' },
        { key: 'B', text: 'In the "Risks" section.' },
        { key: 'C', text: 'Nowhere. The template does not allow the word "AI".' },
        { key: 'D', text: 'In the title.' }
      ],
      correctAnswer: 'C',
      explanation: 'Reports focus on your conclusions and reasoning, not the tools used.'
    },
    {
      id: 27,
      question: 'Under the "Risks & Bottom Line" section of the report, what must you provide?',
      options: [
        { key: 'A', text: 'A complaint about the difficulty.' },
        { key: 'B', text: 'A "Plan B" (Backup plan) if the result is not as expected.' },
        { key: 'C', text: 'A link to the AI chat.' },
        { key: 'D', text: 'A request for more budget.' }
      ],
      correctAnswer: 'B',
      explanation: 'Contingency planning demonstrates thorough thinking and risk awareness.'
    },
    {
      id: 28,
      question: 'How does a boss judge if an employee is "Using AI Correctly"?',
      options: [
        { key: 'A', text: 'By checking their browser history.' },
        { key: 'B', text: 'By seeing if they provide clear conclusions, clear judgment logic, and a valid bottom-line plan.' },
        { key: 'C', text: 'By how fast they type.' },
        { key: 'D', text: 'By asking them to recite prompts.' }
      ],
      correctAnswer: 'B',
      explanation: 'Correct AI usage is demonstrated through quality of thinking, not technical details.'
    },
    {
      id: 29,
      question: 'If you report: "I chose Plan A because it looks cool," which reporting requirement did you fail?',
      options: [
        { key: 'A', text: 'Conclusion.' },
        { key: 'B', text: 'Judgment Basis (Logic).' },
        { key: 'C', text: 'Risk.' },
        { key: 'D', text: 'Plan B.' }
      ],
      correctAnswer: 'B',
      explanation: '"Looks cool" is not a valid judgment basis; you need substantive reasoning.'
    },
    {
      id: 30,
      question: 'The "Management Closed Loop" implies that AI is not a KPI, but...?',
      options: [
        { key: 'A', text: 'A hobby.' },
        { key: 'B', text: 'A barrier to entry.' },
        { key: 'C', text: 'A standard operating procedure that leads to better results.' },
        { key: 'D', text: 'A way to reduce salary.' }
      ],
      correctAnswer: 'C',
      explanation: 'AI becomes part of the standard process, evaluated by the results it helps produce.'
    },
    {
      id: 31,
      question: 'In the final summary, what is the core benefit of AI for the employee?',
      options: [
        { key: 'A', text: '"AI lets you do less work."' },
        { key: 'B', text: '"AI lets you stand in a \'higher position\' to work."' },
        { key: 'C', text: '"AI lets you stop thinking."' },
        { key: 'D', text: '"AI guarantees you a promotion."' }
      ],
      correctAnswer: 'B',
      explanation: 'AI elevates you from execution to higher-level decision-making.'
    },
    {
      id: 32,
      question: 'Complete the closing statement: "It helps you write the first draft, but ________."',
      options: [
        { key: 'A', text: '...you fix the spelling.' },
        { key: 'B', text: '...you must rewrite it entirely.' },
        { key: 'C', text: '...the direction is determined by you.' },
        { key: 'D', text: '...it takes the credit.' }
      ],
      correctAnswer: 'C',
      explanation: 'AI assists with execution, but strategic direction remains your responsibility.'
    },
    {
      id: 33,
      question: 'Complete the closing statement: "It gives you options, but ________."',
      options: [
        { key: 'A', text: '...you bear the responsibility for the result.' },
        { key: 'B', text: '...you pick the first one.' },
        { key: 'C', text: '...they are usually wrong.' },
        { key: 'D', text: '...you can ignore them.' }
      ],
      correctAnswer: 'A',
      explanation: 'Regardless of AI assistance, you are accountable for the final outcome.'
    },
    {
      id: 34,
      question: 'What is the "Ultimate Test" of a valuable employee in the AI era?',
      options: [
        { key: 'A', text: 'If AI is gone, they panic.' },
        { key: 'B', text: 'If AI is gone, they can still finish the task; If AI is present, they do it faster and better.' },
        { key: 'C', text: 'They can code their own AI.' },
        { key: 'D', text: 'They work 24 hours a day.' }
      ],
      correctAnswer: 'B',
      explanation: 'True competence means AI amplifies your abilities, not replaces them.'
    },
    {
      id: 35,
      question: 'The phrase "Not using it is actually wrong" refers to what context?',
      options: [
        { key: 'A', text: 'Personal life.' },
        { key: 'B', text: 'The "Standard Work Cycle" for TikTok brand operations.' },
        { key: 'C', text: 'Playing video games.' },
        { key: 'D', text: 'Writing diary entries.' }
      ],
      correctAnswer: 'B',
      explanation: 'In professional brand operations, AI usage is now expected as part of the standard workflow.'
    }
  ]
};

// Quiz metadata
export const quizMeta = {
  part0: {
    title: 'Part 0: AI Workflow Business Vocabulary',
    subtitle: 'A shared language for everyone',
    totalQuestions: 20,
    passingScore: 70
  },
  part1: {
    title: 'Part 1: From Executor to Commander',
    subtitle: 'The critical mindset shift',
    totalQuestions: 20,
    passingScore: 70
  },
  part2: {
    title: 'Part 2: AI Command Operational Strategy',
    subtitle: 'Practical methods for working with AI',
    totalQuestions: 35,
    passingScore: 70
  },
  part3: {
    title: 'Part 3: Standard AI Work Cycle & Reporting',
    subtitle: 'Making AI collaboration your default workflow',
    totalQuestions: 35,
    passingScore: 70
  }
};
