import React from "react";
import CountersListItem from "../counters-list-item";
import {counterDecOne, counterDeleteConfirm, counterIncOne, counterReset} from "../../redux/actions";
import {connect} from "react-redux";

function CountersList(props) {
    console.log('List countersList', props.countersList);
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CountersList);