import React, { useState } from 'react';
import ReactModal from 'react-modal';

interface SingleMemberProps {

}

const SingleMember: React.FC<SingleMemberProps> = () => {
    const [showModal, changeShowModal] = useState(true);
  
  const handleOpenModal = () => {
        changeShowModal(true);
  }
  
  const handleCloseModal = () => {
    changeShowModal(false);
  }
    return (
         <div>
        <button onClick={handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
};

export default SingleMember;