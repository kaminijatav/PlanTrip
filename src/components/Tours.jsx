import Card from "./Card";
function Tours({tours,removeTour}){
return (
    <div>
  <h2>Plan with love</h2>
<div>
{
    tours.map((tour)=>
    {
        return <Card {...tour} removeTour={removeTour}></Card>
    })
}
</div>
    </div>

)
}
export default Tours;