import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    fallbackLng: "es",
    resources: {
        es: {
            translation: { 
                title: "Hola", 
                home: "Inicio",
                about: "Acerca",
                services: "Servicios",
                portfolio: "Portafolio",
                contact: "Contacto",
                hello: "Hola, me llamo",
                presen: "Y yo soy",
                systemE: "Ingeniero en Sistemas",
                frontdev: "Desarrollador Web",
                desiuux: "Diseñador UI/UX",
                downloadcv: "Descargar CV",
                abme: "de Mi",
                aboutdes1: `Soy un ingeniero en sistemas con experiencia en el campo de la tecnología y el diseño. Yo he desarrollado soluciones innovadoras y eficientes para diversas necesidades empresariales, implementando proyectos de software y gestionando infraestructuras tecnológicas. Además, como diseñador gráfico y diseñador UI/UX, he creado diseños visuales atractivos y funcionales para aplicaciones web y móviles, asegurando una experiencia de usuario fluida y agradable.`,
                aboutdes2: `Mi experiencia en el mantenimiento de equipos de cómputo me ha permitido solucionar problemas técnicos y garantizar el correcto funcionamiento de los sistemas informáticos. Además, poseo conocimientos en ciberseguridad, lo que me permite abordar los desafíos de proteger la información y los activos digitales de manera efectiva.`,
                aboutdes3: `Con habilidades sólidas en herramientas y tecnologías clave, como HTML/CSS, JavaScript, así como conocimientos en sistemas operativos para equipos de escritorio y servidores, estoy preparado para afrontar los retos tecnológicos actuales y futuros.`,
            },
        },
        en: {
            translation: {
                title: "Hello",
                home: "Home",
                about: "About",
                services: "Services",
                portfolio: "Portfolio",
                contact: "Contact",
                hello: "Hi, my name is",
                presen: "And I am",
                systemE: "System Engineer",
                frontdev: "Web Developer",
                desiuux: "UI/UX Designer",
                downloadcv: "Download CV",
                abme: "Me",
                aboutdes1: `I'm a systems engineer with experience in the field of technology and design. I have developed innovative and efficient solutions for various business needs, implementing software projects and managing technological infrastructures. In addition, as a graphic designer and UI/UX designer, I have created attractive and functional visual designs for web and mobile applications, ensuring a smooth and enjoyable user experience.`,
                aboutdes2: `My experience in computer equipment maintenance has allowed me to solve technical problems and ensure the proper functioning of computer systems. In addition, I have expertise in cybersecurity, which allows me to address the challenges of protecting information and digital assets effectively.`,
                aboutdes3: `With solid skills in key tools and technologies, such as HTML/CSS, JavaScript, as well as knowledge in desktop and server operating systems, I am prepared to meet current and future technology challenges.`,
            },
        },
    },
});