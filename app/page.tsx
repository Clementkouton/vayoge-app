import Image from "next/image";
import Header from "./Components/Header";
import Galerie from "./Components/Galerie";
import Contact from "./Components/Contact";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdventureTypes from "./Aventure/AdventureTypes";
import AventureTypes from "./Components/AventureTypes";


export default function Home() {
  return (
    <>

    <Header />
    <Galerie />
    <AventureTypes />
    <Contact/>
    <ToastContainer />
    </>
  );
}
