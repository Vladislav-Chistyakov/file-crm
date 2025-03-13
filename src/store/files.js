import { defineStore } from 'pinia';
import { computed, ref } from 'vue'
import { changingFilesInBD, filesListBD } from '@/utils/dataBase.js'
import { get, remove } from 'firebase/database'

export const useFilesStore = defineStore('files', () => {

    const files = ref([])

    const calculateFileSize = (size) => {
        const dm = 2 < 0 ? 0 : 2
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
        const i = Math.floor(Math.log(size) / Math.log(1024))
        return parseFloat((size / Math.pow(1024, i)).toFixed(dm)) + ' ' + sizes[i]
    }

    const localeDate = () => {
        return  new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })
    }

    class DownloadableFile {
        constructor(file) {
            this.file = file
            this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
            this.url = URL.createObjectURL(file)
            this.date = localeDate()
            this.status = null
            this.size = calculateFileSize(file.size)
            this.name = `${file.name}`
            this.type = `${file.type}`
        }
    }

    async function addFiles(newFiles) {
        // const newDownloadableFiles = [...newFiles]
        //     .map((file) => {
        //         const data = new DownloadableFile(file)
        //         console.log('data @@@', data)
        //         return data
        //     })
        //     .filter((file) => !fileExists(file.id))

        const newDownloadableFiles = [...newFiles]
            .map((file) => new DownloadableFile(file))
            .filter((file) => !fileExists(file.id))

        files.value.length
            ? changingFilesInBD(files.value.concat(newDownloadableFiles.map(item => item)))
            : changingFilesInBD(newDownloadableFiles.map(item => item))

        await getFileListBd()

        // changingFilesInBD(newDownloadableFiles.map(item => item))
        // await getFileListBd()
        // // files.value = newDownloadableFiles.map(item => item)
        // console.log('files', files.value)
    }

    async function getFileListBd () {
        await get(filesListBD).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                files.value = snapshot.val().map(item => item)
            } else {
                console.log("No data available");
                files.value = []
            }
        }).catch((error) => {
            console.error(error);
        })
    }

    //
    // onValue(filesListBD, async (snapshot) => {
    //     const data = await snapshot.val()
    //     console.log('data', data)
    //     test(data)
    // })
    //
    // function test (dataArray) {
    //     console.log('get files', dataArray)
    //     files.value = dataArray.map(item => item)
    // }

    function fileExists(fileId) {
        return files.value.some(({ id }) => id === fileId)
    }

    async function removeFile(file) {
        const index = files.value.indexOf(file)
        if (index > -1) {
            const array = files.value.map(item => item)
            console.log('test remove: ', index, array.splice(index, 1))
            changingFilesInBD(array)
            await getFileListBd()
        }
    }

    function onInputChange(e) {
        addFiles(e.target.files)
        e.target.value = null
    }

    // const setTest = (addFiles) => {
    //     console.log('1', addFiles)
    //     set(filesListBD, {
    //         test: 'my-test'
    //     })
    // }
    //
    // const removeFiles = (index) => {
    //     remove(filesListBD + `/${index}`).then(() => console.log('Успешно удалили files из BD'))
    // }

    const filesArray = computed(() => {
        console.log('filesArray', files.value)
        return files.value.map(file => {
            console.log(file)
            return {
                file: file,
                name: file.name,
                type: file.type,
                size: file.size,
                date: file.date,
                url: file.url,
            }
        })
    })

    return {
        files,
        filesArray,
        addFiles,
        removeFile,
        onInputChange,
        getFileListBd,
    }
})
