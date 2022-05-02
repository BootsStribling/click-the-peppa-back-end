import { Router } from 'express'
import * as peppasCtrl from '../controllers/peppas.js'

const router = Router()

// PUBLIC ROUTES //
// localhost:3000/
router.get('/', peppasCtrl.index)
//localhost:3000/
//**** UNCOMMENT THIS OUT TO CREATE A NEW PEPPA */
// router.post('/', peppasCtrl.create)
router.put('/', peppasCtrl.update)


export{router}