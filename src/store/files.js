import { defineStore } from 'pinia';
import { computed, ref } from 'vue'
import { changingFilesInBD, filesListBD } from '@/utils/dataBase.js'
import { get } from 'firebase/database'

export const useFilesStore = defineStore('files', () => {

    const files = ref([])
    const pendingGetFiles = ref(false)

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
            this.size = calculateFileSize(file.size)
            this.name = `${file.name}`
            this.type = `${file.type}`
        }
    }

    async function addFiles(newFiles) {
        await getFileListBd()
        const newDownloadableFiles = [...newFiles]
            .map((file) => new DownloadableFile(file))
            .filter((file) => !fileExists(file.id))

        files.value.length
            ? changingFilesInBD(files.value.concat(newDownloadableFiles.map(item => item)))
            : changingFilesInBD(newDownloadableFiles.map(item => item))

        await getFileListBd()
    }

    async function getFileListBd () {
        if (pendingGetFiles) {
            pendingGetFiles.value = true
            await get(filesListBD).then((snapshot) => {
                if (snapshot.exists()) {
                    files.value = snapshot.val().map(item => item)
                } else {
                    files.value = []
                }
            }).catch((error) => {
                console.error(error);
            }).finally(() => pendingGetFiles.value = false)
        }
    }

    function fileExists(fileId) {
        return files.value.some(({ id }) => id === fileId)
    }

    async function removeFile(file) {
        const index = files.value.indexOf(file)
        if (index > -1) {
            const array = files.value.map(item => item)
            array.splice(index, 1)
            changingFilesInBD(array)
            await getFileListBd()
        }
    }

    async function onInputChange(e) {
        await addFiles(e.target.files)
        e.target.value = null
    }

    const filesArray = computed(() => {
        return files.value.map(file => {
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
        pendingGetFiles,
        addFiles,
        removeFile,
        onInputChange,
        getFileListBd,
    }
})
