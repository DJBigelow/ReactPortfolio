import React, {FC} from 'react';
import { ProjectProp } from '../models/ProjectProp';
import {Link} from 'react-router-dom';

export const ProjectEntry: FC<ProjectProp> = ({project}) => (
    <div>
        <Link to={"/projects/detail/" + project.slug}>
            {project.title}
        </Link>
    </div>
)