import React, {useState} from "react";
import './counters-list-item.css';

function CountersListItem(props) {
    const [newName, setNewName] = useState(props.counter.counterName);
    return (
        <div className='card m-3'>
            <div className='card-body'>
                <div className='row'>
                    <input type='text' className='col-sm-4'
                           value={newName}
                           disabled={props.counter.isVisibleEditButton}
                           onChange={e => setNewName(e.target.value)}/>
                    <div className='col-sm-3'>
                        <button className='btn btn-info mr-1'
                                onClick={() => props.decrement(props.counter.counterId)}>-
                        </button>
                        {props.counter.counterValue}
                        <button className='btn btn-info ml-1'
                                onClick={() => props.increment(props.counter.counterId)}>+
                        </button>
                    </div>
                    <div className='col-sm-4'>
                        <button className='btn btn-warning mr-1'
                                onClick={() => props.reset(props.counter.counterId)}>Reset
                        </button>
                        {(() => {
                            if (props.counter.isVisibleSaveButton) {
                                return <button className='btn btn-primary mr-1'
                                               onClick={() => props.save(props.counter.counterId, newName)}
                                >Save</button>
                            } else {
                                return <button className='btn btn-secondary mr-1'
                                               onClick={() => props.edit(props.counter.counterId)}>Edit</button>
                            }
                        })()}
                        <button className='btn btn-danger mr-1'
                                onClick={() => props.removeConfirm(props.counter)}>Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountersListItem;

