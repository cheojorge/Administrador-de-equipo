import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../context/myContext'
import { ModalDelete } from './Modal'

export const PlayerList = () => {
    const { players, deletePLayer,handleShow } = useContext(myContext)
    
    return (
        <>
        
            <ModalDelete/>
            <div className='border border-dark mt-3 p-4'>
                <Link to={"/player/list"}>List</Link>
                <em> | </em>
                <Link to={'/player/addplayer'}>Add PLayer</Link>
                <table className="table border border-dark mt-3">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">Team Name</th>
                            <th scope="col">Prefered Position</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players?.map((player, index) =>
                                <tr key = {index}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        <button 
                                            className='btn btn-outline-danger'
                                            onClick={() => handleShow(player)}
                                            >
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                            )
                        }
            

                    </tbody>
                </table>
            </div>
        </>
    )
}
