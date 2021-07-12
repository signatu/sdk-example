import ReactDOM from 'react-dom'
import React, {useState} from 'react'
import {SignatuProvider} from '@signatu/sdk'
import {ConsentCheckbox, DataProcessingGroup} from '@signatu/consent-react';

const consentTarget = {
    /** The ID of the subject */
     subject: 'a-sample-subject-id',
    /** The ID of the consent target, i.e., a description of what is given consent to */
    target: 'sdk-examples/consent-simple'
}


const ConsentSimple = () =>  {
    const [accessToken, setAccessToken] = useState()
    const [dpGroupId, setDpGroupId] = useState()
    return (
        <>
            <h1>API Access Token</h1>
            <input onChange={ev => setAccessToken(ev.target.value)} placeholder="signatu access token"/>
            <SignatuProvider accessToken={accessToken}>
                <h1>Simple Checkbox</h1>
                <ConsentCheckbox
                    consentTarget={consentTarget}
                    language="en"
                >
                    You can embed whatever content you want here
                </ConsentCheckbox>  

                {/* An example using a more advanced control for a Signatu Data Processing Group */}
                <h1>Data Processing Group</h1>
                <div>Make sure the Access Token has <code>dataprocessing:read</code> or <code>dataprocessing</code> scope permissions. </div>
                <br/>
                <input style={{minWidth: 400}} placeholder="Input a Data Processing Group ID to autogenerate consent controls" onChange={(ev) => setDpGroupId(ev.target.value)} value={dpGroupId} />
                <DataProcessingGroup groupId={dpGroupId} />
            </SignatuProvider>

        </>
    )
}

ReactDOM.render(
    <ConsentSimple />, 
    document.getElementById('root')
)

