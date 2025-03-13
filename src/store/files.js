import { defineStore } from 'pinia';
import { computed, ref } from 'vue'

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
        }
    }

    function addFiles(newFiles) {
        const newDownloadableFiles = [...newFiles]
            .map((file) => new DownloadableFile(file))
            .filter((file) => !fileExists(file.id))
        // setTest(newDownloadableFiles)

        files.value = []
        files.value = newDownloadableFiles.map(item => item)
        console.log('files', files)
    }

    function fileExists(fileId) {
        return files.value.some(({ id }) => id === fileId)
    }

    function removeFile(file) {
        const index = files.value.indexOf(file)
        if (index > -1) files.value.splice(index, 1)
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
            return {
                file: file,
                name: file.file.name,
                type: file.file.type,
                size: file.size,
                date: file.date,
                url: file.file.url,
            }
        })
    })

    return {
        files,
        filesArray,
        addFiles,
        removeFile,
        onInputChange,
    }
})
