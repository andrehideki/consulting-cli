export default function YearSelect(props: any) {
  
  function generateYearValues() {
    const min = props.min || 1900;
    const max = props.max || 3000;
    const generatedYearValues = [];
    for (let i=0; i<max +1; i++) 
      generatedYearValues.push(min + i);
    return generatedYearValues;
  }

  return (
    <select defaultValue={ 2021 }>
      { generateYearValues().map(year => (
        <option key={ year } value={ year }>
          { year }
        </option>
      )) }
    </select>
  );
};