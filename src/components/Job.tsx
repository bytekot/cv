import React from 'react'

import { CSS_PREFIX } from '../constants'
import { beautifyDate } from '../utils'
import { JobData } from '../types'

const Job = ({ company, title, startDate, endDate, description }: JobData): JSX.Element =>
    <div className={`${CSS_PREFIX}job`} key={company}>
        <div className={`${CSS_PREFIX}header-job`}>
            <div>
                <h4>{company}</h4>
                <span>{title}</span><br />
            </div>
            <div className={`${CSS_PREFIX}job-period`}>
                <span>{beautifyDate(startDate)} — {endDate ? beautifyDate(endDate) : 'Present'}</span>
            </div>
        </div>
        {description.map((paragraph, index) => {
            if (typeof paragraph === 'object') {
                return <ul key={index}>{paragraph.map((item, index) => <li key={index}>{item}</li>)}</ul>
            }
            return <p key={index}>{paragraph}</p>
        })}
    </div>

export default Job
