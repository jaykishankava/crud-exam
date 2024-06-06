import React, { useEffect, useState } from 'react'
import Header from './Header'
import View from './View'

const Crud = () => {

    useEffect(() =>{
        const Set=JSON.parse(localStorage.getItem('users')) || []
        Setalltask(Set);
    },[])

    const [task,SetTask]=useState("")
    const [status,SetStatus]=useState("")
    const [record,setRecord]=useState([])
    const [addtask,Setalltask]=useState([])
    const [single,Setsingle]=useState("")
    const [mdelete,mSetdelete]=useState([])


    const handlesubmit = (even) =>{
        even.preventDefault ()

        let obj={
            id:Date.now(),task,status

        }

        if(!task || !status){
          alert("all fill reuired...");
          return false;
        }

        if(single.id){
          updateuser(single.id,obj);
        }else{
          let done=[...addtask,obj];
          localStorage.setItem('users',JSON.stringify(done));
          Setalltask(done)
        }
        SetTask('');
        SetStatus('');
    }

    const deleteUser = (id) =>{
        let filtereduser = addtask.filter(val => val.id != id);
        localStorage.setItem('users',JSON.stringify(filtereduser));
        Setalltask(filtereduser);
        alert("user delete successfully...")
    }

    const editUser = (data) =>{
        Setsingle(data)
    }

    const updateuser = (id,update) =>{
      let up=addtask.map((val)=>{
        if(val.id == id){
          val.task=update.task;
          val.status=update.status;
        }
        return val;
      })
      localStorage.setItem('users',JSON.stringify(up));
      Setalltask(up)
      SetTask("")
      SetStatus("")
      Setsingle({});
    }

    useEffect(()=>{
      SetTask(single.task)
      SetStatus(single.status)
    },[single]);

     const multitpleDelete = (id,checked) =>{
        let all=[...mdelete];
        if(checked){
            all.push(id);
        }else{
            all=all.filter((val)=> val != id);
        }
        mSetdelete(all);
    }
    const allDelete = () =>{
        if(mdelete.length === 0){
            toast("minimum 1 row selected...");
            return false;
        }

        let all=record.filter((val)=> !mdelete.includes(val.id));
        localStorage.setItem('user',JSON.stringify(all));
        setRecord(all);
    }

  return (
    <>
    <Header/>
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-6">
            <form onSubmit={handlesubmit} className='border rounded shadow p-5'>
  <div className="mb-3">
    <label  className="form-label">Task</label>
    <input type="text" className="form-control" onChange={(e) => SetTask(e.target.value)} value={task || ""} />
  </div>
  <div className="mb-3">
    <label className="form-label" >Status</label>
    <input type="text" className="form-control" onChange={(e) => SetStatus(e.target.value)} value={status || ""}/>
  </div>
  <button type="submit" className="btn btn-success mx-auto mt-4 d-block">Submit</button>
</form>

            </div>
            <div className="col-lg-6 border p-4">
                <View
                addtask={addtask}
                deleteUser={deleteUser}
                editUser={editUser}
                allDelete={allDelete}
                multitpleDelete={multitpleDelete}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default Crud
