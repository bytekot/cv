import React from 'react';
import CVView from './CV';
import { general, skills, jobs } from '../cv.json';

const ApplicationView = () => <CVView general={general} skills={skills} jobs={jobs} />

export default ApplicationView;
