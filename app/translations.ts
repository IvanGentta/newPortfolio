export const translations: {
  [key: string]: { [key: string]: string };
} = {
  en: {
    //nav
    about: "About me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    //home
    hi: "Hi! My name is ",
    welcome: "Welcome to my ",
    developer: "Web Developer",
    portfolio: "portfolio",
    type1: "Based on Argentina!!",
    type2: "Let's create something amazing together!",
    type3: "Yet another generic programmer phrase.",
    type4: "I love coding and keep on learning.",
    type5:
      "I know this effect is kinda overdone, but just look how cool it looks!",

    //about
    aboutMe: "About Me",
    whoAmI: "Who am I?",
    aboutMeText:
      "I started studying on my own out of pure curiosity, and since then, I've been captivated by the world of programming. I love that it's a constantly evolving field, which motivates me to keep growing and developing as a professional. Currently, I'm pursuing a degree in Computer Programming at UNSAM. Take a look around!",

    //skills
    skillsTitle: "Skills",
    whatIKnow: "What I Know?",

    //contact
    contactTitle: "Contact",
    getInTouch: "Get in touch!",
    namePlaceholder: "Name",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message...",
    sendButton: "Send Message",
    sent: "Message sent,",
    thanks: "Thanks!",
    sentError: "Error sending email. Try again.",

    //projects
    projectsTitle: "Projects",
    built: "What I've built!",
    weatherDesc:
      "Web app to know what is the weather like in any place in the world",
    googleDesc: "A Google clon where you can actually search what you want",
    kroomaDesc: "My first real job!",
    chatappDesc: "Real time chat app with authentication",

    //projectItem
    infoButton: "More info",

    //[projectID]
    notFound: "Project not found!",
    backButton: "Back to Projects",
    techs: "Technologies",
    overview: "Project overview",
    weatherInfo:
      "A weather app that gives you the temperature and the humidity among other info of any place you search. I pull the info from the OpenWeatherMap API and use Axios to make the API calls. I also use React-icons and Tailwind libraries. This web app is fully responsive.",
    googleInfo:
      "In this project I use the Google API to make a custom search engine. I use React-icons and TailwindCSS libraries. I also use Pagination to manage the diferent pages of the search results. This web app is fully responsive.",
    kroomaInfo:
      "My first real job for a creative agency, animated with the AOS library, some carrousels with Swiper and react-responsive-carrousel libraries, and fully functional contact form wich redirects you to the home page once you send it. Fully responsive. It was my first time working with a team, we use Figma for the design and Gitlab for the remotely work with branches.",
    chatAppInfo:
      "Chat app full responsive, I use Firebase auth to manage the login, sign up and password reset, also I use Firestore y redux to make it a real time chat.",
  },
  es: {
    //nav
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",

    //home
    hi: "Hola! Mi nombre es ",
    welcome: "Bienvenido a mi portafolio de ",
    developer: " Desarrollador Web",
    portfolio: "",
    type1: "Desde Argentina!!",
    type2: "Creemos algo increible juntos!",
    type3: "Otra frase genérica más de programador.",
    type4: "Amo programar y seguir aprendiendo.",
    type5: "Se que este efecto ya está quemado, pero mirá que cool que se ve!",

    //about
    aboutMe: "Sobre mí",
    whoAmI: "Quién soy?",
    aboutMeText:
      "Empece a estudiar por mi cuenta por pura curiosidad, y desde entonces, quedé cautivado por el mundo de la programación. Me encanta que sea un campo en constante evolución, lo que me motiva a seguir creciendo y desarrollándome como profesional. Actualmente, estoy cursando la Tecnicatura en Programación Informática en la UNSAM. Echate un vistazo!",

    //skills
    skillsTitle: "Habilidades",
    whatIKnow: "Qué sé?",

    //contact
    contactTitle: "Contacto",
    getInTouch: "Hablemos!",
    namePlaceholder: "Nombre",
    subjectPlaceholder: "Asunto",
    messagePlaceholder: "Mensaje...",
    sendButton: "Enviar Mensaje",
    sent: "Mensaje enviado,",
    thanks: "Gracias!",
    sentError: "Error al enviar el correo. Intenta nuevamente.",

    //projects
    projectsTitle: "Proyectos",
    built: "Lo que he desarrollado!",
    weatherDesc:
      "App del clima que te da la temperatura y la humedad entre otros datos de cualquier lugar que busques",
    googleDesc: "Clon de Google donde podes buscar lo que quieras",
    kroomaDesc: "Mi primer trabajo real!",
    chatappDesc: "Chat de tiempo real con autenticación",

    //projectItem
    infoButton: "Más info",

    //[projectID]
    notFound: "Proyecto no encontrado!",
    backButton: "Volver a Proyectos",
    techs: "Technologías",
    overview: "Resumen del proyecto",
    weatherInfo:
      "App del clima que te da la temperatura y la humedad entre otros datos de cualquier lugar que busques. La info viene de la API de OpenWeatherMap y uso Axios para hacer las llamadas a la API. También uso las librerías React-icons y Tailwind. La app es totalmente responsiva.",
    googleInfo:
      "En este proyecto uso la API de Google para hacer un motor de búsqueda personalizado. Uso las librerías React-icons y TailwindCSS. También uso Pagination para manejar las diferentes páginas de los resultados de la búsqueda. La app es totalmente responsiva.",
    kroomaInfo:
      "Mi primer trabajo real para una agencia creativa, animado con la librería AOS, algunos carrousels con las librerías Swiper y react-responsive-carrousel, y un formulario de contacto totalmente funcional que te redirige a la página principal una vez que lo envías. Totalmente responsiva. Fue mi primera vez trabajando con un equipo, usamos Figma para el diseño y Gitlab para el trabajo remoto con ramas.",
    chatAppInfo:
      "Chat app totalmente responsiva, uso Firebase para manejar el resgitro, logueo y para restablecer la contraseña del usuario, también uso Firestore y Redux para que sea mensajería en tiempo real.",
  },
};
