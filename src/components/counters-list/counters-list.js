import React from "react";
import CountersListItem from "../counters-list-item";
import {
    counterDecOne,
    counterDeleteConfirm,
    counterIncOne,
    counterReset,
    editCounterName,
    saveCounterName
} from "../../redux/actions";
import {connect} from "react-redux";

function CountersList(props) {
    return (
        <>
            {
                props.countersList.map((el) => <CountersListItem
                        key={el.counterId}
                        counter={el}
                        increment={props.counterInc}
                        decrement={props.counterDec}
                        reset={props.counterRes}
                        removeConfirm={props.counterDeleteConfirm}
                        edit={props.editCounterName}
                        save={props.saveCounterName}
                    />
                )
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    countersList: state.countersList,
    deleteConfirm: state.deleteConfirm
});

const mapDispatchToProps = {
    counterInc: counterIncOne,
    counterDec: counterDecOne,
    counterRes: counterReset,
    counterDeleteConfirm: counterDeleteConfirm,
    editCounterName: editCounterName,
    saveCounterName: saveCounterName
};

export default connect(mapStateToProps, mapDispatchToProps)(CountersList);