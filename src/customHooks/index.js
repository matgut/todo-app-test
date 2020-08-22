import {useState, useEffect} from 'react';
import db from "../firebase";

const useTask = (selectedProject) => {
    const [tasks,setTasks] = useState([]);
    
    useEffect(() => {
        let unsubcribe = db.collection('task').where(); 

    },[]);
}