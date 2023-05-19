// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  address: ' Khmelnytskyi, Ukraine',
  position: 'Junior Fullstack JS developer',
  salary: '750 dollars per month',
}

var footer = {
  social: {
    email: {
      text: 'throuthepigeon',
      href: 'dmytro@mail.com',
    },
    phone: {
      text: '380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summar: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of  experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experiance: {
        title: 'Ther experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line first win / draw / second win, totals etc.',
      },
    },
    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  // ↙ сюди вводимо JSON дані
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      hobbies: [
        {
          name: 'Likes to ski',
          isMain: true,
        },
        {
          name: 'Rollerblading',
          isMain: false,
        },
        {
          name: 'Martial arts',
          isMain: true,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
        },
        {
          name: 'VSCode',
          point: 10,
          isTop: true,
        },
        {
          name: 'GIT',
          point: 8,
        },
        {
          name: 'Terminal',
          point: 8,
        },
        {
          name: 'NPM',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  // ↙ сюди вводимо JSON дані
  res.render('Education', {
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      certificates: [
        {
          name: 'Hochschule',
          Id: 2455,
        },
        {
          name: 'HogW',
          Id: 1988,
        },
        {
          name: 'CoconutPaper',
          Id: 1887,
        },
      ],
      educations: [
        {
          name: 'Hogwards',
          isEnd: true,
        },
        {
          name: 'Bethlem Royal Hospital',
          isEnd: false,
        },
        {
          name: 'University of Hawaii at Manoa',
          isEnd: true,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  // ↙ сюди вводимо JSON дані
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10/10/2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'resume',
              url: 'https://tesla.com/',
              about: 'Somthing intresting',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 6,
              stackAmount: 3,
              awards: [
                {
                  name: 'Third stage - Best of the best of the worst',
                },
                {
                  name: 'Second tage - Best of the worst ',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'program',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
