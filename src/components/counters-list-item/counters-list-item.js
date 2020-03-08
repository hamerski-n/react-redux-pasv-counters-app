import React from "react";
import './counters-list-item.css';

function CountersListItem(props) {
    console.log('props in Items', props);

    return (
        <div className='card m-1'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-4'>{props.counter.counterName} </div>
                    <div className='col-sm-3'>
                        <button className='btn btn-info mr-1'
                                onClick={() => props.decrement(props.counter.counterId)}>-</button>
                        {props.counter.counterValue}
                        <button className='btn btn-danger ml-1'
                                onClick={() => props.increment(props.counter.counterId)}>+
                        </button>
                    </div>
                    <div className='col-sm-4'>
                        <button className='btn btn-warning mr-1'
                                onClick={() => props.reset(props.counter.counterId)}>Reset</button>
                        <button className='btn btn-secondary mr-1'>Edit</button>
                        <button className='btn btn-danger mr-1'
                                onClick={() => props.remove(props.counter.counterId)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountersListItem;