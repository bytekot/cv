import React from 'react'
import { createRoot } from 'react-dom/client'

import { toggleDarkTheme } from './utils'

import Header from './components/Header'
import CV from './components/CV'

import config from './config.json'
import './theme.scss'

const container = document.body.appendChild(document.createElement('div'))
const { general, skills, jobs, education } = config

createRoot(container).render(
    <>
        <Header/>
        <CV
            general={general}
            skills={skills}
            jobs={jobs}
            education={education}
        />
    </>
)

window.cv = {
    toggleDarkTheme: toggleDarkTheme
}
