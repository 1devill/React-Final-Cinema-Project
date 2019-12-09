import React, { useState } from "react";
import { Input, Select } from "antd";

const { Option } = Select;

export const Filter = ({ movies, genres, setFilteredMovies }) => {
  const [valueInput, setValueInput] = useState("");
  const [valueSelect, setValueSelect] = useState("");

  const getFilteredMovies = (valueInput, valueSelect) => {
    return movies.reduce((acc, item) => {
      const hasAllFilters = valueInput && valueSelect;
      const hasTitleFilter = valueInput && !valueSelect;
      const hasSelectFilter = !valueInput && valueSelect;
      const checkSelectFilter =
        item.genre &&
        item.genre.length &&
        item.genre.some(elem => elem.trim() === valueSelect);
      const checkTitleFilter = item.title
        .toLowerCase()
        .includes(valueInput.toLowerCase());

      if (hasAllFilters && checkSelectFilter && checkTitleFilter) {
        acc.push(item);
      } else if (hasTitleFilter && checkTitleFilter) {
        acc.push(item);
      } else if (hasSelectFilter && checkSelectFilter) {
        acc.push(item);
      }

      return acc;
    }, []);
  };

  const handleChangeInput = event => {
    const { value } = event.target;
    setValueInput(value);
    setFilteredMovies(getFilteredMovies(value, valueSelect));
  };

  const handleChangeSelect = value => {
    setValueSelect(value);
    setFilteredMovies(getFilteredMovies(valueInput, value));
  };

  return (
    <div className="filter-wrapper">
      <h4 className="title">Search</h4>
      <div>
        <Select onChange={handleChangeSelect} allowClear>
          {genres.map((item, i) => (
            <Option key={i} value={item}>
              {item}
            </Option>
          ))}
        </Select>
        <Input
          type="text"
          name="filter-name"
          onChange={handleChangeInput}
          value={valueInput}
          placeholder="Name..."
        />
      </div>
    </div>
  );
};
