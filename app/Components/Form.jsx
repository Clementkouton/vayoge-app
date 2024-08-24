import { useState } from 'react'
import { app, db } from '../db/configfirebase'
import { doc, collection, setDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import React from 'react'
import Toast from "./Toast"
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Form() {
    const [inputs, setInputs] = useState({})
    const [showToast, setShowToast] = useState(false)
    const [file, setFile] = useState()

    const storage = getStorage(app)
    const router = useRouter()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name] : value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowToast(true)

        if (file) {
            const storageRef = ref(storage, "images/" + file.name)
            try {
                // Upload image
                await uploadBytes(storageRef, file)
                console.log("Image envoyée");

                // Get image URL
                const url = await getDownloadURL(storageRef)
                
                // Add image URL to inputs
                const updatedInputs = { ...inputs, image: url }

                // Save all data to Firestore
                await savePost(updatedInputs)

                // Navigate to home page
                router.push('/')
            } catch (error) {
                console.error("Erreur lors de l'envoi du formulaire:", error)
                setShowToast(false)
            }
        } else {
            // If no file is selected, just save the form data
            await savePost(inputs)
            router.push('/')
        }
    }

    const savePost = async (data) => {
        try {
            const docRef = doc(collection(db, "vayage-app"))
            await setDoc(docRef, data)
            console.log("Document sauvegardé avec succès")
        } catch (error) {
            console.error("Erreur lors de la sauvegarde du document:", error)
        }
    }

    return (
        <div className='mt-4'>
            {showToast && (
                <div>
                    <Toast msg={"Post créé avec succès"} closeToast={() => setShowToast(false)} />
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input type="text" name='titre' placeholder='Titre' required onChange={handleChange} className='w-full mb-4 border-[1px] p-2 rounded-md'/>
                <input type="text" name='lieu' placeholder='Lieu' required onChange={handleChange} className='w-full mb-4 border-[1px] p-2 rounded-md'/>
                <input type="text" name='session' placeholder='Section' required onChange={handleChange} className='w-full mb-4 border-[1px] p-2 rounded-md'/>
                <input type='date' name='date' placeholder='Date' required onChange={handleChange} className='w-full mb-4 border-[1px] p-2 rounded-md'/>
                <input type="file" onChange={(e)=> setFile(e.target.files[0])} accept='image/jpeg, image/png, image/gif' className='w-full mb-4 border-[1px] p-2 rounded-md'/>
                <textarea rows={5} name='description' placeholder='Description' required onChange={handleChange} className='w-full mb-4 border-[1px] p-2 rounded-md'/>
                <button type='submit' className='text-white w-full border-2 font-bold border-[#f6430d] p-1 rounded-md bg-[#f94109] hover:bg-[#e03501] transition-all'>Ajouter un Post</button>
            </form>
        </div>
    )
}