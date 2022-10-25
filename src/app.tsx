import './theme.scss';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import CVView from './components/CV';
import { general, skills, jobs, education } from './config.json';

const container = document.body.appendChild(document.createElement('main'));

createRoot(container).render(
    <CVView
        general={general}
        skills={skills}
        jobs={jobs}
        education={education}
    />
);
