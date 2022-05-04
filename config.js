const config = {
    about: {
        image: "/img/DarkModeUK.jpg",
        name: "Umut Kızıloğlu",
        title: "Umut K. | Web Developer",
        job: "Junior Full Stack Developer (Student)",
        description: "I'm Umut Kızıloğu, i'm 17 years old and i still learning for become software developer",
        dateofbirth: new Date("07/22/2004"),
        socialLinks: [
            {
                name: "Linkedin",
                icon: "linkedin",
                color: "blue",
                to: "https://www.linkedin.com/in/umut-kızıloğlu-710a8a212/",
            },
            {
                name: "Github",
                icon: "github",
                color: "gray",
                to: "https://github.com/UmutKDev",
            },
            {
                name: "Discord",
                icon: "discord",
                color: "indigo",
                to: "https://discord.gg/Pgg2v8Ughv",
            },
            {
                name: "Instagram",
                icon: "instagram",
                color: "pink",
                to: "https://instagram.com/umutk.js",
            },

        ],
    },
    journey: {
        experience: "3 Years Experience",
        totalProjects: 3,
        work: "Full-time",
    },
    skills: [
        {
            name: "HTML",
            percent: 75,
            color: "orange",
        },
        {
            name: "CSS",
            percent: 75,
            color: "blue",
        },
        {
            name: "JavaScript",
            percent: 69,
            color: "yellow",
        },
        {
            name: "React",
            percent: 30,
            color: "sky",
        },
        {
            name: "C#",
            percent: 35,
            color: "green",
        },
        {
            name: "Bootstrap",
            percent: 80,
            color: "indigo",
        },
        {
            name: "Tailwind CSS",
            percent: 25,
            color: "teal",
        },
    ],
    projects: [
        // status list: NEW - 1, Coming Soon - 2, Active - 3, Maintenance - 4, It's Over - 5, Closed - 6
        {
            name: "API",
            description: "Bir Çok İçeriğin Bulunduğu Bir API Servisi",
            status: 4,
            to: "https://api.umutk.codes",
        },
        {
            name: "Blog",
            description: "Kendime İçin Yaptığım Dinamik Bir Blog",
            status: 3,
            to: "https://blog.umutk.codes",
        },
        {
            name: "Levyoner Code Share",
            description: "insanların birbirleriyle kod paylaşabileceği bir paylaşım merkezi",
            status: 1,
            to: "https://levyoner-codeshare.herokuapp.com",
        },
        {
            name: "Para Harca",
            description: "Bir Para Haracama Uygulaması",
            status: 1,
            to: "https://paraharca.umutk.codes/",
        },
        {
            name: "Quick Feels Good",
            description: "Get Quick Feels good right now buddy",
            status: 1,
            to: "https://quickfeelsgood.umutk.codes/",
        },
        {
            name: "8ball",
            description: "Sihirli Top",
            status: 1,
            to: "https://8ball.umutk.codes/",
        },
        {
            name: "Kyojinfansub",
            description: "Anime Çevirmenleri İçin Kullanılabilir Fansub Uygulaması",
            status: 3,
            to: "https://kyojinfansub.com",
        },
    ],
};
export default config;
