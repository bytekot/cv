import React from 'react'

import { CSS_PREFIX } from '../constants'
import { getPeriodText } from '../utils'
import { JobData } from '../types'

import Label from './Label'

const Job = ({ company, title, startDate, endDate, description }: JobData): JSX.Element =>

    <div className={`${CSS_PREFIX}job`} key={company}>
        <strong>
            {company}
            <Label>
                {getPeriodText(startDate, endDate)}
            </Label>
        </strong><br/>
        <span>{title}</span><br/>
        ({startDate} — {endDate})
        {description.map((paragraph, index) => {
            if (typeof paragraph === 'object') {
                return <ul key={index}>{paragraph.map((item, index) => <li key={index}>{item}</li>)}</ul>
            }
            return <p key={index}>{paragraph}</p>
        })}
    </div>

export default Job
