import React, {FC} from 'react';
import { ProjectsProp } from '../models/ProjectsProp';
import { ProjectEntry } from './ProjectEntry'; 

export const ProjectList: FC<ProjectsProp> = ({projects}) => (
    <ul>
        {projects.map(project => (
            <li key={project.id}>
                <ProjectEntry project={project}/>
            </li>
        ))}
    </ul>
)