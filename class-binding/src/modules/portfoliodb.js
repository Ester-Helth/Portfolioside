import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1, 
            title: 'Se mere', 
            description: 'Fotografering af Færøerne',
            image: 'src/assets/Documents/Færøerne.jpg',
            link: 'https://www.google.com', 
            category: 'Photoshop',
            tech: 'Vue, Tailwind, Firebase',
            teammembers: ("Rebekka", "Abigail", "Rahab")
        },
        {
            id: 2, 
            title: 'Se mere', 
            description: 'Fanø brochure',
            image: 'src/assets/Documents/Fanø.jpg',
            link: 'https://www.google.com', 
            category: 'InDesign',
            tech: 'Adobe AfterEffect, Premiere'
        },
        {
            id: 3, 
            title: 'Se mere', 
            description: 'Bum',
            image: 'https://picsum.photos/200/300',
            link: 'https://www.google.com', 
            category: 'PremierePro',
            tech: 'Adobe AfterEffect, Premiere'
        },
        {
            id: 4, 
            title: 'Se mere', 
            description: 'Bambi studio - opstart af virksomhed for børnemøbler',
            image: 'src/assets/Documents/bambistudio.png',
            link: 'https://www.google.com', 
            category: 'illustrator',
            tech: 'Adobe AfterEffect, Premiere'
        },
        {
            id: 5, 
            title: 'Se mere', 
            description: 'What if event',
            image: 'src/assets/Documents/what-if.png',
            link: 'https://www.google.com', 
            category: 'InDesign',
            tech: 'Adobe AfterEffect, Premiere'
        }
    ])

    return {
        state
    }
}

export default getPortfolio