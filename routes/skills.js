import { Router } from 'express'

import * as skillsCtrl from "../controllers/skills.js"


const router = Router()

/* GET skills listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.get('/', skillsCtrl.create)


export {
  router
}





