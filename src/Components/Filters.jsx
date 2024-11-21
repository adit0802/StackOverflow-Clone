import React from "react";

function Filters({ currentFilter, onFilterChange }) {
  const filters = ["interesting", "hot", "week", "month"];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === currentFilter ? "active" : ""}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filters;
