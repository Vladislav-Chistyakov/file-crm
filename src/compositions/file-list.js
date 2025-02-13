import { ref } from 'vue'

export default function () {
    const files = ref([])

    function addFiles(newFiles) {
        const newUploadableFiles = [...newFiles]
            .map((file) => new UploadableFile(file))
            .filter((file) => !fileExists(file.id))

        files.value = files.value.concat(newUploadableFiles)
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

    return { files, addFiles, removeFile, onInputChange }
}

class UploadableFile {
    constructor(file) {
        this.file = file
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.url = URL.createObjectURL(file)
        this.status = null
    }
}