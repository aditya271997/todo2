import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,  } from '@fortawesome/free-solid-svg-icons'
const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        }
        else {
            setItems([...items, inputData]);
            setInputData('')
        }


        console.log(inputData)
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={logo} className="App-logo" alt="logo" />
                        <figcaption>
                            Add Your List Here
                        </figcaption>

                    </figure>

                    <div className=" addItem">
                        <input type="text" placeholder="add items" value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
                        <FontAwesomeIcon icon={faPlus} className="add-btn" onClick={addItem} />
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                       
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove ALL">
                            <span>
                                CHECK LIST
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo