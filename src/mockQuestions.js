const Questions = [
  {
    id: "q1",
    question: "Ile masz lub chcesz mieć produktów, w których spójność jest istotna?",
    answers: [
      {
        answer: "Ponad 6 produktów",
        needValue: 10,
        maturityValue: 2
      },
      {
        answer: "Pomiędzy 3 a 5.",
        needValue: 9,
        maturityValue: 1
      },
      {
        answer: "Dwa produkty",
        needValue: 0,
        maturityValue: 0,
        questions: [
          {
            id: "q11",
            question: "Czy to duże projekty?",
            answers: [
              {
                answer: "Tak",
                needValue: 5,
                maturityValue: 2
              },
              {
                answer: "Nie",
                needValue: 2,
                maturityValue: 0
              }
            ]
          }
        ]
      },
      {
        answer: "Jeden produkt",
        needValue: 0,
        maturityValue: 0,
        questions: [
          {
            id: "q12",
            question: "Czy to duże projekty?",
            answers: [
              {
                answer: "Tak",
                needValue: 2,
                maturityValue: 0
              },
              {
                answer: "Nie",
                needValue: -5,
                maturityValue: -5
              }
            ]
          }
        ]
      }
    ]
  }, {
    id: "q2",
    question: "Czy do zbudowania tych aplikacji korzystasz z zewnętrznych systemów",
    answers: [
      {
        answer: "Tak",
        needValue: -10,
        maturityValue: 0,
        tips: [
          "t1"
        ]
      },
      {
        answer: "Nie",
        needValue: 0,
        maturityValue: 0
      },
    ]
  }, {
    id: "q3",
    question: "Czy zmagasz się z problemem jednolitości designu / ux w swoich produktach",
    answers: [
      {
        answer: "Tak",
        needValue: 8,
        maturityValue: 5
      },
      {
        answer: "Nie",
        needValue: -5,
        maturityValue: -5
      },
    ]
  }, {
    id: "q4",
    question: "Czy istotne jest dla Ciebie szybkie reagowanie na zmieniające się potrzeby rynku? Czy aplikacja będzie często modifkowana?",
    answers: [
      {
        answer: "Tak",
        needValue: 6,
        maturityValue: 5
      },
      {
        answer: "Nie",
        needValue: -5,
        maturityValue: -3
      },
    ]
  }, {
    id: "q5",
    question: "Jaki jest przewidywany cykl życia aplikacji?",
    answers: [
      {
        answer: "Konkretny cel w ciągu roku",
        needValue: -5,
        maturityValue: 0
      },
      {
        answer: "Od roku do 3 lat",
        needValue: 4,
        maturityValue: 5
      },
      {
        answer: "Inwestycja ciągła, ponad 5 lat",
        needValue: 9,
        maturityValue: 8
      },
    ]
  }, {
    id: "q6",
    question: "Jak oceniasz efektywność współpracyTwojego zespołu?",
    answers: [
      {
        answer: "Zła",
        needValue: 5,
        maturityValue: -3
      },
      {
        answer: "Neutralna",
        needValue: 3,
        maturityValue: 2
      },
      {
        answer: "Dobra",
        needValue: -2,
        maturityValue: 6
      },
    ]
  }, {
    id: "q7",
    question: "Jak często zmieniają się członkowie zespołu?",
    answers: [
      {
        answer: "Często",
        needValue: 5,
        maturityValue: -2
      },
      {
        answer: "Rzadko",
        needValue: 4,
        maturityValue: 3
      }
    ]
  }, {
    id: "q8",
    question: "Jak oceniasz doświadczenie swojego zespołu?",
    answers: [
      {
        answer: "Wysokie",
        needValue: 3,
        maturityValue: 8
      },
      {
        answer: "Średnie",
        needValue: 3,
        maturityValue: 0
      },
      {
        answer: "Niskie",
        needValue: 0,
        maturityValue: -7
      }
    ]
  }, {
    id: "q9",
    question: "Jakie role występują w Twojej organizacji?",
    answers: [
      {
        answer: "Frontend Developer",
        role: 1, 
        needValue: 0,
        maturityValue: 2 
      },
      {
        answer: "Backend Developer",
        role: 2, 
        needValue: 0,
        maturityValue: 2 
      },
      {
        answer: "Fullstack Developer",
        role: 3, 
        needValue: 0,
        maturityValue: 2 
      },
      {
        answer: "Project Manager",
        role: 4, 
        needValue: 0,
        maturityValue: 2 
      },
      {
        answer: "UX Designer",
        role: 5, 
        needValue: 0,
        maturityValue: 2
      },
      {
        answer: "Graphic Designer",
        role: 6, 
        needValue: 0,
        maturityValue: 2 
      },
      {
        answer: "Business Analytic",
        role: 7, 
        needValue: 0,
        maturityValue: 2 
      },
      {
        answer: "Tester",
        role: 8, 
        needValue: 0,
        maturityValue: 2
      },
    ]
  }, {
    id: "q10",
    question: "Czy na dowolnym etapie prac nad produktem przewidujesz pracę z zespołami rozproszonymi.",
    answers: [
      {
        answer: "Tak",
        needValue: 10,
        maturityValue: 0
      },
      {
        answer: "Nie",
        needValue: 0,
        maturityValue: 0
      }
    ]
  },
];

export default Questions;