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
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
                    </div>
                    <h2 className="name">NAME</h2>
                    <div className="about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur 
                            officiis obcaecati sequi asperiores iste architecto?</p>
                    </div>
                </div>
                <div className="member_body">
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
                    </div>
                    <h2 className="name">NAME</h2>
                    <div className="about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur 
                            officiis obcaecati sequi asperiores iste architecto?</p>
                    </div>

                </div>
                <div className="member_body">
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
                    </div>
                    <h2 className="name">NAME</h2>
                    <div className="about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur 
                            officiis obcaecati sequi asperiores iste architecto?</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Members;
