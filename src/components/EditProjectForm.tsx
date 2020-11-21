import React, {FC, useEffect, useState} from 'react'
import {RouteComponentProps, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Project} from '../models/Project'
import { ProjectRouteProp } from '../models/ProjectRouteProp'

import {Button, Form, Jumbotron} from 'react-bootstrap'
import {useAuth0} from '@auth0/auth0-react'
import Axios from 'axios'

const apiUrl: string | undefined = process.env.REACT_APP_API_URL

export const EditProjectForm: FC<RouteComponentProps<ProjectRouteProp>> = ({match}) => {
    const { register, handleSubmit} = useForm();
    const { getAccessTokenSilently, user } = useAuth0();
    const history = useHistory();

    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const getProject = async () => {
            var response = await Axios.get(apiUrl + '/api/project/GetProject/' + match.params.slug)
            setProject(response.data);
        }
        getProject();
    }, [match.params.slug]);

    const onSubmit = async (project: Project) => {
        const accessToken = await getAccessTokenSilently( {
            audience: process.env.REACT_APP_AUDIENCE
        });

        console.log(project.title)
        await Axios.post(
            `${apiUrl}/api/project/updateproject`, 
            project,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        history.push('/projects')
    } 

    console.log(user);

    if (user && user['https://schemas.dev-h2j88rmi.com/roles'].includes("Admin")) {
        return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="id">
                    <Form.Control name="id" type="hidden" defaultValue={project.id} />
                </Form.Group>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" ref={register({required: true})} type="text" defaultValue={project.title}/>
                </Form.Group>
    
                <Form.Group controlId="design">
                    <Form.Label>Design</Form.Label>
                    <Form.Control name="design" as="textarea" style={{width: 900, height: 1200}} defaultValue={project.design}/>
                </Form.Group>
    
                {/* <Form.Group controlId="dateOfCompletion">
                    <Form.Label>Date Completed</Form.Label>
                    <Form.Control name="dateOfCompletion" type="text" defaultValue={project.dateOfCompletion.toDateString()}/>
                </Form.Group> */}
    
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
    else {
        return <Jumbotron>Admin privileges are required to view this page</Jumbotron>
    }

    
   
}