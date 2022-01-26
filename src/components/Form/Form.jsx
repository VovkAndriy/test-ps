function Form({onChange, onAdd, value}) {
return   <>
<input
  type="text"
value={value}
  onChange={onChange}
/>
<button type="button" onClick={onAdd}>
  Add
</button>
</>
}

export default Form