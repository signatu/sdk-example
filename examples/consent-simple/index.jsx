import {ConsentCheckbox} from '@signatu/consent-react';

const config = {
    accessToken: "YOUR_ACCESS_TOKEN"
}

const consentTarget = {
    /** The ID of the subject */
     subject: 'a-sample-subject-id',
    /** The ID of the consent target, i.e., a description of what is given consent to */
    target: 'sdk-examples/consent-simple'
}


export const ConsentSimple = () =>  (
    <ConsentCheckbox
        config={config} 
        consentTarget={consentTarget}
        language="en"
    >
        You can embed whatever content we want here
    </ConsentCheckbox>  
)