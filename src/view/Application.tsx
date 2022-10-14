import React from 'react';
import CVView from './CV';
import { basicInfo, skills } from '../cv.json';

const ApplicationView = () => <CVView basicInfo={basicInfo} skills={skills} />

export default ApplicationView;
