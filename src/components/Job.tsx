import React from 'react'

import { CSS_PREFIX } from '../constants'
import { JobData } from '../types'
import Label from './Label'
import { getDateDiffText } from '../utils'

const Job = ({ company, title, startDate, endDate, description }: JobData): JSX.Element => {
    return (<div className={`${CSS_PREFIX}job`} key={company}>
        <strong>{company}<Label>{getDateDiffText(startDate, endDate)}</Label></strong><br/>
        <span>{title}</span><br/>
        ({startDate} — {endDate})
        {description.map((paragraph, index) => {
            if (typeof paragraph === 'object') {
                return <ul key={index}>{paragraph.map((item, index) => <li key={index}>{item}</li>)}</ul>
            }
            return <p key={index}>{paragraph}</p>
        })}
    </div>)
}

export default Job
