import { Router } from 'express'

const router = Router()

// PUBLIC ROUTES //
// localhost:3000/
router.get('/', peppasCtrl.index)


export{router}