import React from "react";

const ListGroup = props => {
  const {
    textProperty,
    valueProperty,
    items,
    onItemSelect,
    selectedItem
  } = props;

  return (
    <ul className="list-group mt-4">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={ item === selectedItem ? 'list-group-item list-group-item-dark active' : 'list-group-item list-group-item-dark'}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
