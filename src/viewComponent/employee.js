const Employee = (props) =>  {
    const name = props.name
    return (
        <div>
<h1>Employee</h1>
{name.map((value, key) => {
     return (
    <p>count : {value.demo}</p>
    ); })}
</div>
    )}

export default Employee

