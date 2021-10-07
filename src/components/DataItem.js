const DataItem = props => {

  const {date, passed, id} = props.item;

  const handleRemoveItem = id => {
    props.removeItem(id);
  }

  return (
    <div className="result-body-row">
      <div className="result-body-item">
        {date}
      </div>
      <div className="result-body-item">
        {passed}
      </div>
      <div className="result-body-item">
        <button onClick={() => handleRemoveItem(id)}>x</button>
      </div>
    </div>
  )
}

export default DataItem;