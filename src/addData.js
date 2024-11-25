// Importar funções necessárias
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase.js"; // Assumindo que seu arquivo de configuração é firebaseConfig.js

const addData = async () => {
  try {
    // Adicionar cursos
    const courses = [
      {
        id: "course2",
        name: "Kriya Yoga",
        category: "kriya",
        coverImage: "https://i0.wp.com/kriya.org.br/wp-content/uploads/2023/09/babaji-widescreen.webp?fit=1200%2C675&ssl=1",
        lessons: ["lesson3", "lesson4"],
      },
    ];

    for (const course of courses) {
      await addDoc(collection(db, "Courses"), course);
    }

    // Adicionar aulas
    const lessons = [
      {
        id: "lesson1",
        name: "Yoga Basics",
        coverImage: "https://static.sadhguru.org/d/46272/1633496885-1633496884270.jpg",
        category: "Beginner",
        link: "VgSeu-Ks0",
        publishDate: "2024-11-01",
        type: "Introduction",
      },
      {
        id: "lesson2",
        name: "Philosophy of Yoga",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSR7OpfSVviS_HI5WAhqsaHUBaLuK0w1DrA&s",
        category: "Beginner",
        link: "rf-_5D_h5oY",
        publishDate: "2024-11-01",
        type: "Philosophy",
      },
      {
        id: "lesson3",
        name: "Meeting the masters",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptCeLe8nXHYXnVDfLyfGR2Zqq_wfzNZNflAprpxD9HcpRu8xSLQs9Na6jtX0wN-RRamw&usqp=CAU",
        category: "kriya",
        link: "rf-_5D_h5oY",
        publishDate: "2024-11-01",
        type: "Introduction",
      },
      {
        id: "lesson4",
        name: "Kriya Yoga Practices",
        coverImage: "https://yogananda.org/craft-public-storage/_1440xAUTO_crop_center-center_90_none/Kriya-Yoga-Path-Meditation-Techniques-Homa_cropped.jpg",
        category: "kriya",
        link: "5Z5U8DzkppA",
        publishDate: "2024-11-01",
        type: "Practice",
      },
      {
        id: "lesson5",
        name: "Buddhist Yoga",
        coverImage: "https://i0.wp.com/www.kamakotimandali.com/wp-content/uploads/2021/04/Tantric-Yoga-of-Tibet.jpeg?resize=653%2C519&ssl=1",
        category: "buddhist",
        link: "Jr4I20gL-Dw",
        publishDate: "2024-11-01",
        type: "Introduction",
      },
      {
        id: "lesson6",
        name: "Use of mantras",
        coverImage: "https://buddhaweekly.com/wp-content/uploads/bb-plugin/cache/Buddha-Weekly-mala-sutra-mantra-sanskrit-buddhism-buddha-landscape-093adf4e37ac8600ba53953255aef89b-.jpg",
        category: "buddhist",
        link: "w3ffzreNxS0",
        publishDate: "2024-11-01",
        type: "Mantra",
      },
    ];

    for (const lesson of lessons) {
      await addDoc(collection(db, "Lessons"), lesson);
    }

    // Adicionar artigos
    const articles = [
      {
        id: "article1",
        title: "Yoga for Mental Health",
        blocks: [
          {
            type: "text",
            content: "Yoga is a powerful practice for managing stress and improving mental clarity.",
          },
          {
            type: "image",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrai-BAF8BwhaFGWHHCO2o8jLf3QUml4TTzA&s",
            alt: "Person doing yoga in a serene environment",
          },
          {
            type: "text",
            content: "Regular practice helps build resilience against anxiety and depression.",
          },
          {
            type: "image",
            url: "https://i.pinimg.com/736x/80/21/8c/80218cafd7ad4a3abbf60a13bd8336b7.jpg",
            alt: "A peaceful yoga session outdoors",
          },
        ],
      },
      {
        id: "article2",
        title: "Beginner Yoga Tips",
        blocks: [
          {
            type: "text",
            content: "Starting yoga can be intimidating, but these tips will help you begin your journey.",
          },
          {
            type: "image",
            url: "https://images-cdn.ubuy.co.in/6514eb0b54d9ee41f311f189-krishna-culture-cv154tb-lord-shiva.jpg",
            alt: "Beginner yoga tips illustration",
          },
        ],
      },
    ];

    for (const article of articles) {
      await addDoc(collection(db, "Articles"), article);
    }

    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding data: ", error);
  }
};

// Executar o script
addData();
