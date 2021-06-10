import React from 'react'

const Dog = ({image}) => {
    return (
        <div>
            <img className="dogImg" src={image} alt="Dog image" />
        </div>
    )
}

export default Dog
