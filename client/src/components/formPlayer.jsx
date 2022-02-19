import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../context/myContext'


export const FormPlayer = () => {

    const { createPlayer, errorNew, valid , setValid } = useContext(myContext)
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const handlerOnChange = e => {
        setName(e.target.value)
        setValid('')
    }
    const handlerOnSubmit = (e) => {
        e.preventDefault();
        createPlayer(name, position)

    }
    console.log(valid)
    return (
        <div className='border border-dark mt-3 p-4'>
            <Link to={"/player/list"}>List</Link>
            <em> | </em>
            <Link to={'/player/addplayer'}>Add PLayer</Link>
            <form className="border border-dark row g-4 mt-3">
                <div className="mb-3 row">
                    <h5 htmlFor="name" className="col mt-2 ">ADD PLAYER</h5>
                    <div className="row g-3 align-items-center">
                        <div className="col-4">
                            <label htmlFor="name" className="col-form-label">PLAYER NAME:</label>
                        </div>
                        <div className="col-8">
                            <input
                                onChange={handlerOnChange}
                                type="text"
                                className={`form-control  ${valid}`}
                                id="name"
                            />
                            <div className="invalid-feedback">{errorNew}</div>
                        </div>

                        <div className="col-4">
                            <label htmlFor="name" className="col-form-label">PREFERRED POSITION:</label>
                        </div>
                        <div className="col-8">
                            <input
                                onChange={e => setPosition(e.target.value)}
                                type="text"
                                className={`form-control`}
                                id="name"
                            />
                        </div>

                    </div>
                    <div className="col-auto mt-4">
                        <button onClick={handlerOnSubmit} type="button" className={`btn btn-outline-success `}>SUBMIT</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

