import React from 'react';
import CVView from './CV';
import { general, skills, jobs, education } from '../cv.json';

const ApplicationView = () =>
    <CVView
        general={general}
        skills={skills}
        jobs={jobs}
        education={education}
    />

export default ApplicationView;
