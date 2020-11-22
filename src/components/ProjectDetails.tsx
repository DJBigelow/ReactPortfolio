import Axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import { Project } from '../models/Project';
import { ProjectRouteProp } from '../models/ProjectRouteProp';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './styles/ProjectDetails.css'
import './styles/CodeHighlight.css'

const apiUrl: string | undefined = process.env.REACT_APP_API_URL;


export const ProjectDetails : FC<RouteComponentProps<ProjectRouteProp>> = ({match}) => {
    const [project, setProject] = useState<Project | null>(null);
    const { user, getAccessTokenSilently } = useAuth0();
    const history = useHistory();

    useEffect(() => {
        const getProject = async () => {
            var response = await Axios.get(apiUrl + '/api/project/GetProject/' + match.params.slug)
            console.log(response.data);
            setProject(response.data);
        }
        getProject();
    }, [match.params.slug]);
    

    const deleteProject = async () => {
        const accessToken = await getAccessTokenSilently( {
            audience: process.env.REACT_APP_AUDIENCE
        });

        console.log(accessToken)
        await Axios.delete(
            `${apiUrl}/api/project/deleteproject/${project?.id}`,          
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        history.push('/projects') 
    }


    if (user && user['https://schemas.dev-h2j88rmi.com/roles'].includes("Admin")) {
        return (
            <div>
                <div className='projectDetail'>
                    {project && <ReactMarkdown className='markdown'>{project?.design}</ReactMarkdown>}      
                </div>
                <div>
                    <Link to={`/projects/edit/${project?.slug}`}>Edit</Link>
                    <Button onClick={deleteProject}>Delete</Button>
                </div>
            </div>
        )
    }

    return (
        <div className='projectDetail'>
            {project && <ReactMarkdown className='markdown'>{project?.design}</ReactMarkdown>}
        </div>
    )
}