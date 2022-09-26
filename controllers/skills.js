
import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('skills/index', {
      skill: skill,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}