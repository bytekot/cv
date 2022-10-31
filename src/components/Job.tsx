import React from 'react'

import { CSS_PREFIX } from '../constants'
import { JobData } from '../types'

const Job = ({ company, title, startDate, endDate, description }: JobData): JSX.Element =>
    <div className={`${CSS_PREFIX}job`} key={company}>
        <strong>{company}</strong><br/>
        {title}<br/>
        ({startDate} — {endDate})
        {description.map((paragraph, index) => {
            if (typeof paragraph === 'object') {
                return <ul key={index}>{paragraph.map((item, index) => <li key={index}>{item}</li>)}</ul>
            }
            return <p key={index}>{paragraph}</p>
        })}
    </div>

export default Job
