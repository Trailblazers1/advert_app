
const AddbookTile = ({category,  icon, title, description, price} ) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p> 
            <img src={`https://savefiles.org/${icon}?shareable_link=437`} alt="title" />
        </div>
    )
}

export default AddbookTile