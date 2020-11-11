import Axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Project } from '../models/Project';
import { ProjectRouteProp } from '../models/ProjectRouteProp';
import ReactMarkdown from 'react-markdown';
import RemarkHtml from 'remark-html'
import './styles/ProjectDetails.css'



export const ProjectDetails : FC<RouteComponentProps<ProjectRouteProp>> = ({match}) => {
    const [project, setProject] = useState<Project | null>(null);
    
    useEffect(() => {
        const getProject = async () => {
            var response = await Axios.get("http://localhost:5005/api/project/GetProject/" + match.params.slug)
            console.log(response.data);
            setProject(response.data);
        }
        getProject();
    }, [match.params.slug]);
    
    return (
        <div className='projectDetail'>
            {/* {project && <ReactMarkdown className='markdown'>{project?.title}</ReactMarkdown>} */}
            {project && <ReactMarkdown plugins={[RemarkHtml]} className='markdown'>{project?.design}</ReactMarkdown>}
        </div>
    )
}