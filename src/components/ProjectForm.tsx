import React from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Project} from '../models/Project'
import {Button, Form} from 'react-bootstrap'
import Axios from 'axios'
// const DatePicker = require("react-bootstrap-date-picker")

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectForm = () => {
    const { register, handleSubmit} = useForm();
    const history = useHistory();
    const  onSubmit = async (project: Project) => {
        console.log(project.title)
        await Axios.post('https://djbportfolio.herokuapp.com/addproject', project)
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