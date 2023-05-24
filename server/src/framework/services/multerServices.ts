import multer,{StorageEngine} from 'multer';
import {v4 as uuid} from 'uuid';

const storage : StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const filename = `${uuid()}-${file.originalname}`;
        cb(null, filename);
    }
})

export const uploads = multer({storage});