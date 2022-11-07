import React from 'react'
import { createRoot } from 'react-dom/client'

import CV from './components/CV'
import config from './config.json'
import './theme.scss'
import { CSS_PREFIX } from './constants'

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

window.toggleDarkMode = () => document.body.classList.toggle(`${CSS_PREFIX}dark-theme`)
