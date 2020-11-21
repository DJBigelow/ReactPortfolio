import Axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

import { RouteComponentProps, Link } from 'react-router-dom';
import { Project } from '../models/Project';
import { ProjectRouteProp } from '../models/ProjectRouteProp';
import {useAuth0} from '@auth0/auth0-react'
import ReactMarkdown from 'react-markdown';

import './styles/ProjectDetails.css'
import './styles/CodeHighlight.css'

const apiUrl: string | undefined = process.env.REACT_APP_API_URL;


export const ProjectDetails : FC<RouteComponentProps<ProjectRouteProp>> = ({match}) => {
    const [project, setProject] = useState<Project | null>(null);
    
    const {user} = useAuth0();


    useEffect(() => {
        const getProject = async () => {
            console.log(match.params.slug)
            var response = await Axios.get(apiUrl + '/api/project/GetProject/' + match.params.slug)
            setProject(response.data);
        }
        getProject();
    }, [match.params.slug]);
    
    if (user && user['https://schemas.dev-h2j88rmi.com/roles'].includes("Admin")) {
        return (
            <div>
                <div className='projectDetail'>
                    {project && <ReactMarkdown className='markdown'>{project?.design}</ReactMarkdown>}
                </div>
                <Link to={"/projects/edit/" + project.slug} style={{color: "steelblue"}}>
                    {project.title}
                </Link>
            </div>
        )
    }
    return ( 
        <div className='projectDetail'>
            {project && <ReactMarkdown className='markdown'>{project?.design}</ReactMarkdown>}
        </div>
    )
    

}