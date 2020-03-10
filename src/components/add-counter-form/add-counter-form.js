import React, {useState} from "react";
import {counterAdd} from "../../redux/actions";
import {connect} from "react-redux";

function AddCounterForm(props) {

    const [name, setName] = useState('');
    const [counterValue, setCounterValue] = useState('');

    const onSubmit = () => {
        if (name === '') {
            alert('Please add a counter name')
        }
        else if(isNaN(+counterValue)){
            alert('PLease add as a Counter value')
        }
        else{
            props.counterAdd(name, Number(counterValue));
            setName('');
            setCounterValue('');
        }
    };

    return (
        <div className="input-group m-3 mr-8 ">
            <input type="text" className="form-control col-sm-9" placeholder="Counter name"
                   value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" className="form-control col-sm-3" placeholder="Counter value"
                   value={counterValue} onChange={e => setCounterValue(e.target.value)}/>
            <div className="input-group-append pr-3 mr-3">
                <button className="btn btn-primary" type="button"
                        onClick={() => onSubmit(name, counterValue)}>Add counter
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    countersList: state.countersList,
});

const mapDispatchToProps = {
    counterAdd: counterAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCounterForm);