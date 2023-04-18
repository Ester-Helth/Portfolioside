import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1, 
            title: 'Portfolio 1', 
            description: 'Pasta',
            image: 'https://picsum.photos/200/300',
            link: 'https://www.google.com', 
            category: 'Web',
            tech: 'Vue, Tailwind, Firebase',
            teammembers: ("Rebekka", "Abigail", "Rahab")
        },
        {
            id: 2, 
            title: 'Portfolio 2', 
            description: 'Bum',
            image: 'https://picsum.photos/200/300',
            link: 'https://www.google.com', 
            category: 'Video',
            tech: 'Adobe AfterEffect, Premiere'
        }
    ])

    return {
        state
    }
}

export default getPortfolio