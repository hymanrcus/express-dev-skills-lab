import { skills } from '../data/skill-data.js'
import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('skills/index', {
      skills: skills,
      date: req.date
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  Skill.create(req.body)
  .then(skill => {
      res.redirect('/skills')
  })
  .catch(error => {
      console.log(error)
      res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
      res.render('skills/show', {
          skill: skill,
      })
  })
  .catch(error => {
      console.log(error)
      res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill=> {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render("skills/edit", {
      skill, // same as: movie: movie
      title: "Edit Skill"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit
}