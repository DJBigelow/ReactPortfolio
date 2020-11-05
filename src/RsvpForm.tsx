
import React from 'react';
import {useForm} from 'react-hook-form';

export const RsvpForm = () => {
   
    const {register, handleSubmit} = useForm();

    const onSubmit = (data : any) => {
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name: </label>
            <input type="text" name="name" ref={register}/>
            
            <br />

            <label>Email: </label>
            <input type="text" name="email" ref={register}/>

            <br />

            <label>Are you attending?</label>
            <select name="Attending" id="Attending" ref={register}>
                <option value="true">Yes</option>
                <option value="no">No</option>
            </select>

            <input type="submit" value="Submit"></input>
        </form>        
    )

}