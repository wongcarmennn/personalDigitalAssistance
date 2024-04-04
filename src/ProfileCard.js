function ProfileCard({title, handle, image, description}) {
    // console.log(title, handle)
    //java script destruturing 
    // values of title and handle will be taken from props
    // ProfileCard({title, handle}) = const {title, handle} = props 
    // also equals to const title = props.title const handle = props.handle
   return (
    <div className="card">
    <div className="card-image">
      <figure className="image is-1by1">
        <img src={image} alt="pda logo" />
      </figure>
    </div>

    <div className="card-content">
      <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{handle}</p>
      </div>
      <div className="content">{description}</div>
    </div>
  </div>
);
}


export default ProfileCard;

