import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {ProjectList} from './ProjectList'
import {Project} from '../models/Project'
import { useAuth0 } from '@auth0/auth0-react'

const apiUrl: string | undefined = process.env.REACT_APP_API_URL

export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]> ([]);
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        const getProjects = async () => {
            let projectData = (await Axios.get(apiUrl + '/api/project/GetProjects')).data
            console.log(projectData);
            setProjects(projectData);
        }
        getProjects();
    }, []);
    
    if (isAuthenticated && user.role == "Admin") {
        return <div>
        <ProjectList projects={projects} />

        <div>
            <a href="/newproject">Add Project</a>
        </div>
    </div>
    }

    return (
        <ProjectList projects={projects} />
    ) 
}

