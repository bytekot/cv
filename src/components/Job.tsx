import React from 'react'

import { CSS_PREFIX } from '../constants'
import { JobData } from '../types'

const Job = ({ company, title, startDate, endDate, description }: JobData): JSX.Element =>
    <div className={`${CSS_PREFIX}job`} key={company}>
        <strong>{company}</strong><br/>
        {title}<br/>
        ({startDate} — {endDate})
        {description.map(paragraph => {
            if (typeof paragraph === 'object') {
                return <ul>{paragraph.map(item => <li>{item}</li>)}</ul>
            }
            return <p>{paragraph}</p>
        })}
    </div>

export default Job
