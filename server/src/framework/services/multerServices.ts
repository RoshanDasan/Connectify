import multer,{StorageEngine} from 'multer'
import { v4 as uuidv4 } from 'uuid';
const storage : StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        

        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        console.log('-----------------------');
        
        console.log(file);
        
        const uniqueFilename = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueFilename);
    }
});

export const upload = multer({storage})

