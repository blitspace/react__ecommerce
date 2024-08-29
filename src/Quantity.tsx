import { useReducer, useRef } from "react";

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                value: parseInt(state.value) + 1,
            }
        case 'decrement':
            return {
                ...state,
                value: parseInt(state.value) - 1,
            }
        case 'update':
            return {
                ...state,
                value: parseInt(action.payload)
            }
        default:
            return state;
    }
}

const initial = {
    value: 1,
};

export default function Quantity() {
    const [state, dispatch] = useReducer(reducer, initial);

    return (<>
        <div className="text-sm flex items-center justify-between">
            <div>
                Qty:
            </div>
            <div>
                <button
                    className="border-1 border p-2 px-3"
                    onClick={() => {
                        dispatch({
                            type: 'decrement',
                        });
                    }}
                >-</button>
                <input
                    type="text"
                    className="inline-block w-12 text-center border-1 border-r-0 border-l-0 border p-2"
                    value={state.value}
                    onChange={e => {
                        dispatch({
                            type: 'update',
                            payload: e.target.value
                        });
                    }}
                />
                <button
                    className="border-1 border p-2 px-3"
                    onClick={() => {
                        dispatch({
                            type: 'increment',
                        });
                    }}
                >+</button>
            </div>
        </div>
    </>);
}