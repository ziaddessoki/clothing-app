import React from 'react'
import './homepage.styles.scss'

import { Directory } from '../components/directory/Directory.component'

export const Homepage = () => {
    return (
        <div className="homePage">
            <Directory />
        </div>
    )
}
