import { Router } from 'express'
import * as peppasCtrl from '../controllers/peppas.js'

const router = Router()

// PUBLIC ROUTES //
// localhost:3000/
router.get('/', peppasCtrl.index)


export{router}