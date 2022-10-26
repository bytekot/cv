import React from 'react';
import { CSS_PREFIX } from '../constants';

interface Job {
    company: string
    title: string
    startDate: string
    endDate: string
    description: string
}

const Job = ({ company, title, startDate, endDate, description }: Job): JSX.Element =>
    <div key={company}>
        <strong>{company}</strong><br />
        {title}<br />
        {startDate} — {endDate}
        <p>{description}</p>
    </div>

export default Job;
