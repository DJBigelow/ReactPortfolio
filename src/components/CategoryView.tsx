import React, {FC} from 'react';
import { ProjectsProp } from '../models/ProjectsProp';
import { ProjectEntry } from './ProjectEntry';
import { Project } from '../models/Project'
import {ListGroup, ListGroupItem} from  "react-bootstrap"

const getDate = (date?: Date) => {
    return date != null ? date.getDate() : 0;
};



export const ProjectList: FC<ProjectsProp> = ({projects}) => (
    <div>
        <ListGroup>
            {projects.sort((a: Project, b: Project) => getDate(a.dateOfCompletion) - getDate(b.dateOfCompletion))
                     .map(project => (
                <ListGroup.Item key={project.id} as="li">
                    <ProjectEntry project={project}/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
)