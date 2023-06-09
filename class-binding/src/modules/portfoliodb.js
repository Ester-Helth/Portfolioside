import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 1, 
            title: 'Se mere', 
            description: 'Fotografering af Færøerne',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ester-b03a9.appspot.com/o/F%C3%A6r%C3%B8erne.jpg?alt=media&token=27893c18-45ea-47fc-b5e8-996698611786',
            imagetwo: '',
            link: '', 
            linktext: '',
            category: 'Photoshop',
            tech: '',
            details: 'Vi har arbejdet med at lære photoshops værktøjer bedre at kende gennem forskellige projekter. I det her projekt arbejdede jeg især med at tage billeder, der overholder rule of thirds og med farvemanipulation gennem bl.a. farvekurver.'
        },
        {
            id: 2, 
            title: 'Se mere', 
            description: 'Fanø brochure',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ester-b03a9.appspot.com/o/Fan%C3%B8.jpg?alt=media&token=97e2431b-f52a-4081-accc-9d9d64de365e',
            link: 'https://indd.adobe.com/view/984c67c0-a1ad-4c45-aa74-4d06d149ccc4', 
            linktext: 'Se Fanø brochuren online her',
            category: 'InDesign',
            tech: '',
            details: 'Vi har arbejdet med at lære at bruge InDesign som redskab til at designe brochurer og evt. bøger i fremtiden. I det her projekt valgte vi at lave en visit Fanø brochure, hvor vi eksperimenterede med indhold, design og flow'
        },
        {
            id: 3, 
            title: 'Se mere', 
            description: 'Video til Rebranding Esbjerg projekt',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ester-b03a9.appspot.com/o/rebranding-esbjerg.jpg?alt=media&token=10a3c72e-33ae-44da-84e1-e4b7bbd4f042',
            video: 'https://www.youtube.com/watch?v=hHcqDcmFR00',
            link: 'https://www.youtube.com/watch?v=hHcqDcmFR00', 
            linktext: 'YouTube link til vores video',
            category: 'PremierePro',
            tech: '',
            details: 'Vi havde en projektuge, hvor vi arbejdede på at rebrande Esbjerg som by, for at tiltrække flere folk til det vilde vesten. Vi kom op med en international kultur dag, som vi lavede denne video omkring.'
        },
        {
            id: 4, 
            title: 'Se mere', 
            description: 'Bambi Studio logo - opstart af virksomhed for børnemøbler',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ester-b03a9.appspot.com/o/bambistudio.png?alt=media&token=4248cfb9-3dc5-4a69-b6c2-e199e12da132',
            link: '', 
            linktext: '',
            category: 'illustrator',
            tech: '',
            details: 'Min storesøster er så småt begyndt at planlægge opstarten af hendes virksomhed, og der har jeg været med på sidelinjen og prøvet kræfter af med logo, branding, storytelling og overvejet design for hjemmesiden.'
        },
        {
            id: 5, 
            title: 'Se mere', 
            description: 'What if event - flyers og plakat',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ester-b03a9.appspot.com/o/what-if.png?alt=media&token=ac8cfa90-2142-4f42-b9e2-442f2df84f06',
            imagetwo:'https://firebasestorage.googleapis.com/v0/b/portfolio-ester-b03a9.appspot.com/o/what-if-plakat.jpg?alt=media&token=5a9e24fb-d74d-4f62-a7dd-0d115221fd7b',
            link: '', 
            linktext: '',
            category: 'InDesign',
            tech: '',
            details: 'Eventugen, What if, holdes hvert år i Århus, men blev for første gang holdt i Esbjerg i år, hvor jeg stod for flyers og plakater, som kan ses her.'
        
        }
    ])

    return {
        state
    }
}

export default getPortfolio