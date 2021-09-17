import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function CustomModal({ isOpen, toggle, title, children })
{
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default CustomModal