import React from 'react';
import {useState, FC} from 'react';


import {RSVP} from './RSVP';
import {RsvpForm} from './RsvpForm'
import {RsvpList} from './RsvpList'

export const RsvpPage: FC<RsvpList> = props => (
    <div>
        <RsvpForm />

        {/* <ul>
            {props.rsvps.map(rsvp => (
                <li key={rsvp.name}>
                    <p>{rsvp.name}</p>
                    <p>{rsvp.email}</p>
                    <p>{rsvp.attending}</p>
                </li>
            ))};
        </ul> */}
    </div>    
)

