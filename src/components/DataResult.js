import DataItem from "./DataItem";

const DataResult = ({listing, removeItem}) => {
  const handleRemoveItem = (id) => {
    removeItem(id);
  }

  return (
    <div className="result">
      <div className="result-header">
        <div className="result-header-item">
          Дата (ДД.ММ.ГГ)
        </div>
        <div className="result-header-item">
          Пройдено км
        </div>
        <div className="result-header-item">
          Действия
        </div>
      </div>

      <div className="result-body">
        {listing.map(item => <DataItem key={item.id} item={item} removeItem={() => handleRemoveItem(item.id)} />)}
      </div>
    </div>
  )
}

export default DataResult;