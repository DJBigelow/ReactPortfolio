import React from 'react'
import {useForm} from 'react-hook-form'
import {Project} from '../models/Project'
import {Button, FormControl, Form} from 'react-bootstrap'
// const DatePicker = require("react-bootstrap-date-picker")

export const ProjectForm = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = (project: Project) => {
        console.log(project.title)
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

            <Button type="submit">
                Submit
            </Button>
        </Form>

        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" name="title" ref={register({required: true})}/>
        //     <input type="textarea" name="title" ref={register({required: true})}/>
        //     <input type="text" name="title" ref={register({required: true})}/>
        //     <input type="submit" />
        // </form>
    )
}