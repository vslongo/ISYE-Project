// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMaPPfK3tgLWpSqbiEh8VjjOacjtdkQ2g",
  authDomain: "isye-8a0b6.firebaseapp.com",
  projectId: "isye-8a0b6",
  storageBucket: "isye-8a0b6.firebasestorage.app",
  messagingSenderId: "1031010805539",
  appId: "1:1031010805539:web:d78b07b36e6fc8f3620e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,            
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

const setupCollections = async () => {
    try {
      // Adicionar um curso básico
      await addDoc(collection(db, "Courses"), {
        id: "course1",
        name: "Introduction to Yoga",
        category: "Beginner",
        coverImage: "image1",
        lessons: ["lesson1", "lesson2"],
      });
  
      // Adicionar uma aula básica
      await addDoc(collection(db, "Lessons"), {
        id: "lesson1",
        name: "Yoga Basics",
        coverImage: "image2",
        category: "Beginner",
        video: "video1",
      });
  
      // Adicionar um vídeo básico
      await addDoc(collection(db, "Videos"), {
        id: "video1",
        link: "https://youtube.com/example",
        name: "Yoga for Beginners",
        publishDate: "2024-11-01",
        type: "Tutorial",
      });
  
      // Adicionar um texto básico
      await addDoc(collection(db, "Texts"), {
        id: "text1",
        name: "History of Yoga",
        content: "Yoga has a rich history and tradition...",
        coverImage: "image3",
      });
  
      // Adicionar uma imagem básica
      await addDoc(collection(db, "Images"), {
        id: "image1",
        name: "Yoga Pose Cover",
        url: "https://example.com/image.jpg",
      });
  
      console.log("Collections and documents created successfully!");
    } catch (error) {
      console.error("Error creating collections: ", error);
    }
};
  
export { auth, db, login, signup, logout, setupCollections };
