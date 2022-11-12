import React from 'react'
import { createRoot } from 'react-dom/client'

import { toggleDarkTheme } from './utils'
import CV from './components/CV'
import config from './config.json'
import './theme.scss'

const container = document.body.appendChild(document.createElement('main'))
const { general, skills, jobs, education } = config

createRoot(container).render(
    <CV
        general={general}
        skills={skills}
        jobs={jobs}
        education={education}
    />
)

window.cv = {
    toggleDarkTheme: toggleDarkTheme
}
