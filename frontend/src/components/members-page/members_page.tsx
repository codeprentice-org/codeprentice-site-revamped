import React from 'react';
import '../members-page/member/members_page.css';

interface MembersProps {

}

const Members: React.FC<MembersProps> = () => {
    return (
        <div className="member_page_body">
            <h1 className="main_heading">Members</h1>
            <h2 className="founder_heading">Founders/Executive Board</h2>
            <div className="founder_members">
                <div className="member_body">

                </div>
                <div className="member_body">

                </div>
                <div className="member_body">

                </div>
            </div>
        </div>
    );
};

export default Members;
