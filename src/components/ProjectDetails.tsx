import Axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Project } from '../models/Project';
import { ProjectRouteProp } from '../models/ProjectRouteProp';
import ReactMarkdown from 'react-markdown';
// import RemarkHtml from 'remark-html'
import './styles/ProjectDetails.css'
import './styles/CodeHighlight.css'
// import RemarkPrism from 'remark-prism';
const RemarkPrism = require('remark-prism');
// const RemarkHighlight = require( 'remark-highlight.js');



export const ProjectDetails : FC<RouteComponentProps<ProjectRouteProp>> = ({match}) => {
    const [project, setProject] = useState<Project | null>(null);
    
    useEffect(() => {
        const getProject = async () => {
            var response = await Axios.get("https://djbportfolio.herokuapp.com" + match.params.slug)
            console.log(response.data);
            setProject(response.data);
        }
        getProject();
    }, [match.params.slug]);
    
    return (
        <div className='projectDetail'>
            {project && <ReactMarkdown className='markdown'>{project?.design}</ReactMarkdown>}
            {/* {project && <ReactMarkdown plugins={[RemarkPrism]} className='c'>{project?.design}</ReactMarkdown>} */}
        </div>
    )
}