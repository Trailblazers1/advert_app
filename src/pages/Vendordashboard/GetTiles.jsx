
const AddbookTile = ({title,  icon} ) => {
    return(
        <div>
            <h1>{title}</h1>
            {/* <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p> */}
            <img src={`https://savefiles.org/${icon}?shareable_link=391`} alt="title" />
        </div>
    )
}

export default AddbookTile