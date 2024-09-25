export function Info({name,id,height,weight,imageUrl,types}){


    function listTypes(arr){
        return (
            arr.map(obj=><span> {obj.type.name} </span>)
        );
    }

    return (
        <div>
            <h5>Name: {name} - ID: {id}</h5>
            <h5>Height: {height}</h5>
            <h5>Weight: {weight}</h5>
            <img src={imageUrl} />
            <div className="types">{listTypes(types)}</div>
        </div>
    );

}