import './theme.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import CV from './components/CV';
import { general, skills, jobs, education } from './config.json';

const container = document.body.appendChild(document.createElement('main'));

createRoot(container).render(
    <CV
        general={general}
        skills={skills}
        jobs={jobs}
        education={education}
    />
);
