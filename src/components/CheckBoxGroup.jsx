import Checkbox from './Checkbox';

function CheckBoxGroup({
  isItChecked,
  CheckboxList,
  handleCheckboxGroupChange,
}) {
  return (
    <ul>
      {CheckboxList.map((item, i) => (
        <li key={i}>
          <Checkbox
            name={item.name}
            value={item.value}
            type='checkbox'
            onChange={handleCheckboxGroupChange}
            checked={isItChecked ? isItChecked.includes(item.value) : ''}
          >
            {item.text}
          </Checkbox>{' '}
        </li>
      ))}
    </ul>
  );
}
export default CheckBoxGroup;