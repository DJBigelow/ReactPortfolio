import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {ProjectList} from './ProjectList'
import {Project} from '../models/Project'

export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]> ([]);

    useEffect(() => {
        const getProjects = async () => {
            let projectData = (await Axios.get('https://djbportfolio.herokuapp.com')).data
            console.log(projectData);
            setProjects(projectData);
        }
        getProjects();
    }, []);
    
    return (
        <div>
            <ProjectList projects={projects} />
            <div>
                <a href="/newproject">Add Project</a>
            </div>
        </div>
    ) 
}

