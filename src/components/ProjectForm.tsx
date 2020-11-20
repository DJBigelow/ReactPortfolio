import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Project} from '../models/Project'
import {Button, Form} from 'react-bootstrap'
import {useAuth0} from '@auth0/auth0-react'
import Axios from 'axios'



export const ProjectForm = () => {
    const { register, handleSubmit} = useForm();
    const { getAccessTokenSilently } = useAuth0();

    const history = useHistory();
    const onSubmit = async (project: Project) => {
        const accessToken = await getAccessTokenSilently( {
            audience: process.env.REACT_APP_AUDIENCE
        });
        console.log(project.title)
        await Axios.post(
            'https://djbportfolio.herokuapp.com/api/project/addproject', 
            project,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        history.push('/projects')
    } 

    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" ref={register({required: true})} type="text" placeholder="Title"/>
            </Form.Group>

            <Form.Group controlId="design">
                <Form.Label>Design</Form.Label>
                <Form.Control name="design" as="textarea" placeholder="Design"/>
            </Form.Group>

            <Form.Group controlId="dateOfCompletion">
                <Form.Label>Date Completed</Form.Label>
                <Form.Control name="dateOfCompletion" type="text" placeholder="mm/dd/yyyy"/>
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    )
}