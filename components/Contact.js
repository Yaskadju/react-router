import React from 'react'

const Contact = (props) => {

    console.log(props)
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aspernatur exercitationem consequuntur mollitia quas accusantium vel harum magnam autem non nisi recusandae reiciendis quam, velit eaque error voluptas! Corporis, officiis.</p>
        </div>
    )
}

export default Contact