import React from 'react';
import CVView from './CV';
import { basicInfo, skills, jobs } from '../cv.json';

const ApplicationView = () => <CVView basicInfo={basicInfo} skills={skills} jobs={jobs} />

export default ApplicationView;
