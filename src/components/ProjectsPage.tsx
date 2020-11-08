import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {ProjectList} from './ProjectList'
import {Project} from '../models/Project'

export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]> ([]);

    
    useEffect(() => {
        const getProjects = async () => {
            let projectData = (await Axios.get('http://localhost:5005/api/project/GetProjects')).data
            console.log(projectData);
            setProjects(projectData);
        }
        getProjects();
    }, []);
    
    return (
        <div>
            <ProjectList projects={projects} />
        </div>
    )
    
}

