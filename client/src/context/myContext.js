import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const myContext = createContext();

export const MyProvide = ({children}) => {
    const [show, setShow] = useState(false);
    const [players, setplayers] = useState([])
    const [errorNew, setErrorNew] = useState("")
    const [valid, setValid] = useState("")
    const [playerDelete, setPlayerDelete] = useState({})
    

    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
            .then(res => setplayers(res.data))
            .catch(err => console.log(err))
    }, [setplayers])

    const handleClose = () => {
        setShow(false)
        
    };
    const handleShow = (item) => {
        setShow(true)
        setPlayerDelete(item)        
    };
    const handleYes = () => {
        axios.delete(`http://localhost:8000/api/player/${playerDelete._id}`)
        .then(res => {
            setplayers(players.filter(player => player._id !== playerDelete._id))
          })
        setShow(false)
    }
    const deletePLayer = (item) => {
      
        axios.delete(`http://localhost:8000/api/player/${item._id}`)
        // .then(res => {
        //     setplayers(players.filter(player => player._id !== item._id))
        //     alert(`Delete ${item.name}`)
        //   })
    }
    const createPlayer = (name,position) => {
        axios.post(`http://localhost:8000/api/player`,{
            name,
            position

        })
            .then(res => {
                setplayers([...players,res.data])
                alert("New Author create")
                setErrorNew('')
                navigate('/player/list')
            })
            .catch(err => {
                setErrorNew(err.response.data.errors.name.message)
                setValid('is-invalid')
            })
        
        
    }

    return (
        <myContext.Provider 
            value={
                {
                    players, 
                    setplayers, 
                    createPlayer,
                    deletePLayer,
                    errorNew,
                    valid,
                    setValid,
                    show,
                    setShow,
                    handleClose,
                    handleShow,
                    handleYes,
                    playerDelete
                }
            }
        >
            {children}
        </myContext.Provider>
    )
}