function Select({ options, value, onChange, ...props }) {
  return (
    <select value={value} onChange={onChange} className="select">
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
