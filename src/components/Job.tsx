import React from 'react';
import { JobData } from '../types';

const Job = ({ company, title, startDate, endDate, description }: JobData): JSX.Element =>
    <div key={company}>
        <strong>{company}</strong><br />
        {title}<br />
        {startDate} — {endDate}
        <p>{description}</p>
    </div>

export default Job;
