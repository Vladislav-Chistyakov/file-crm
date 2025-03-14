import { getDatabase, onValue, ref, set } from 'firebase/database'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    databaseURL: 'https://file-crm-5cf9b-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
export const filesListBD = ref(database, 'files')

export const changingFilesInBD = (addFiles) => {
    set(filesListBD, addFiles)
}
