import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_left'>
                <li>
                    <a className='personal_link' href="https://github.com/laurengus17">
                        <i className="fab fa-github-square fa-2x" /> 
                    </a>
                </li>
                <li>
                    <a className='personal_link' href="https://www.linkedin.com/in/lauren-gustafson-7b8877b3/">
                        <i className="fab fa-linkedin fa-2x" /> 
                    </a>
                </li>
                <li className='project_repo'>
                    <a className='project_link' href="https://github.com/laurengus17/HomeGrown">
                        <span className='text'>Project Repo </span>
                    </a>
                </li>
            </div>
            <div className='space'></div>
            <div className='footer_right'>
                <li className='list_Lauren'>
                    Created By: Lauren Gustafson
                </li>
            </div>
        </div>
    )
}