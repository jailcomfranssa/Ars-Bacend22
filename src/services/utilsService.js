import path from 'path'
import CryptoJS from 'crypto-js'

export default {

    generateIdentifier: (id) => {
        return String(id).padStart(10, '0').concat('/', new Date().getFullYear())
    },

    renameFile: () => {
        const filename = Date.now().toString() + Math.random().toString()
        return CryptoJS.MD5(filename).toString()
    },

    formatUploadPath: (filename) => {
        return path.format({ dir: 'uploads', name: filename, ext: '.pdf' })
    },

    formatDownloadPath: (artigo) => {
        return path.format({ name: artigo.arquivo, ext: '.pdf' })
    }

}