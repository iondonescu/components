//prop.children usage 
/*
*   in this case in index.js calls ApprovalCard with props as tag from CommentDetails
*   which has his own props
props aici inseamna 
*/

import React from 'react';
import Altceva from './Altceva';


const ApprovalCard = (props) => {
    
    return (
        <div className="ui card">
            <div className="content">{props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic button green">Approve</div>
                    <div className="ui basic button red">Reject</div>
                </div>
            </div>
            <Altceva></Altceva>
        </div>
        
    );
};

export default ApprovalCard;