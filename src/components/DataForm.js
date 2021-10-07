const DataForm = props => {

  const handleDateChange = evt => {
    const {value} = evt.target;
    props.onDateChange(value);
  }

  const handlePassedChange = evt => {
    const {value} = evt.target;
    props.onPassedChange(value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    props.addRowToList();
  }

  return (
    <form className="DataForm" onSubmit={handleSubmit}>
      <div className="block">
        <div className="title">
          Дата (ДД.ММ.ГГ)
        </div>
        <div className="input">
          <input value={props.dateValue} onChange={handleDateChange} />
        </div>
      </div>
      <div className="block">
        <div className="title">
          Пройдено км
        </div>
        <div className="input">
          <input value={props.passedValue} onChange={handlePassedChange} />
        </div>
      </div>
      <div className="block">
        <div className="submit">
          <button>
            ОК
          </button>
        </div>
      </div>
    </form>
  )
}

export default DataForm;