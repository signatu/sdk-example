import ReactDOM from 'react-dom'
import React, {useState} from 'react'
import {SignatuProvider} from '@signatu/sdk'
import {ConsentCheckbox} from '@signatu/consent-react';

const consentTarget = {
    /** The ID of the subject */
     subject: 'a-sample-subject-id',
    /** The ID of the consent target, i.e., a description of what is given consent to */
    target: 'sdk-examples/consent-simple'
}


const ConsentSimple = () =>  {
    const [accessToken, setAccessToken] = useState()
    return (
        <>
            <input onChange={ev => setAccessToken(ev.target.value)} placeholder="signatu access token"/>
            <SignatuProvider accessToken={accessToken}>
                <ConsentCheckbox
                    consentTarget={consentTarget}
                    language="en"
                >
                    You can embed whatever content you want here
                </ConsentCheckbox>  
            </SignatuProvider>

        </>
    )
}

ReactDOM.render(
    <ConsentSimple />, 
    document.getElementById('root')
)

