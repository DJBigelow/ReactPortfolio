import Axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Project } from '../models/Project';
import { ProjectRouteProp } from '../models/ProjectRouteProp';
import ReactMarkdown from 'react-markdown';
import './styles/ProjectDetails.css'
import './styles/CodeHighlight.css'

const apiUrl: string | undefined = process.env.REACT_APP_API_URL;


export const ProjectDetails : FC<RouteComponentProps<ProjectRouteProp>> = ({match}) => {
    const [project, setProject] = useState<Project | null>(null);
    
    useEffect(() => {
        const getProject = async () => {
            var response = await Axios.get(apiUrl + '/api/project/GetProject/' + match.params.slug)
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