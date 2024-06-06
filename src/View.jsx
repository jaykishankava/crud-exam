

const View = ({ addtask, deleteUser, editUser, multitpleDelete, allDelete  }) => {


  return (
    <>
      <table className="table border rounded shadow">
        <thead>
          <tr align="center">
            <th scope="col">Sr no</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th>
              <button className='btn btn-danger btn-sm' onClick={() => allDelete()}>Delete</button>
            </th>
          </tr>
        </thead>

        <tbody align="center">
          {
            addtask.map((val, index) => {
              const { id, task, status } = val;
              return (
                <tr key={id}>
                  <td>{++index}</td>
                  <td>{task}</td>
                  <td>{status}</td>
                  <td>
                    <button className="btn btn-danger btn-sm me-3" onClick={() => deleteUser(id)}>Delete</button>

                    <button className="btn btn-success btn-sm" onClick={() => editUser(val)}>Edit</button>
                  </td>
                  <td>
                    <input type="checkbox" onChange={(e) => multitpleDelete(id, e.target.checked)} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default View
