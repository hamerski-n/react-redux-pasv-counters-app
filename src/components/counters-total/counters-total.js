import React from "react";
import {counterAdd, counterResetAll} from "../../redux/actions";
import {connect} from "react-redux";

function CountersTotal(props) {

    const countersTotalValue = () => {
        return  props.countersList.reduce((acc,cur)=> acc+cur.counterValue, 0)
    };

    return (
        <div className="input-group m-3 mr-8 ">
            <span className="form-control col-sm-3"> Counters Total:</span>
            <span className="form-control col-sm-9">{countersTotalValue()}</span>
            <div className="input-group-append pr-3 mr-3">
                <button className="btn btn-primary" type="button"
                      onClick={props.countersResetAll} >Reset All
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    countersList: state.countersList,
    total: state.countersTotalValue
});

const mapDispatchToProps = {
    counterAdd: counterAdd,
    countersResetAll: counterResetAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountersTotal);