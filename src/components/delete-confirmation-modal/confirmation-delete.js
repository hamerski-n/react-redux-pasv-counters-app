import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Input from "reactstrap/es/Input";
import {counterDelete, counterDeleteCancel} from "../../redux/actions";
import {connect} from "react-redux";

function ConfirmationDelete(props) {

    const [isDisabledDeleteConfirmationButton, setIsDisabledDeleteConfirmationButton] = useState(true);

    const modalConfirmationUserInputChange = (e) => {
    const inputText = e.target.value;
    setIsDisabledDeleteConfirmationButton( inputText.trim().toLowerCase() !== props.confirmCounter.name.trim().toLowerCase());
    };

    const deleteButtonClick = () => {
        props.counterDelete(props.confirmCounter.id);
        setIsDisabledDeleteConfirmationButton(true);
    };

    const cancelButtonClick = () => {
        props.counterDeleteCancel();
        setIsDisabledDeleteConfirmationButton(true);
    };

    return (
        <div>
            <Modal isOpen={Boolean(props.confirmCounter.name)} toggle={props.counterDeleteCancel}>
                <ModalHeader>Delete confirmation</ModalHeader>
                <ModalBody>
                    Enter counter name <strong>{props.confirmCounter.name}</strong> to delete it
                    <Input onChange={modalConfirmationUserInputChange}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger"
                            disabled={isDisabledDeleteConfirmationButton}
                            onClick={deleteButtonClick}
                    >Delete</Button>{' '}
                    <Button color="secondary"
                            onClick={cancelButtonClick}
                    >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
const mapStateToProps = (state) => ({
    countersList: state.countersList,
    confirmCounter: state.confirmCounter,
});

const mapDispatchToProps = {
    counterDelete: counterDelete,
    counterDeleteCancel: counterDeleteCancel
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDelete);