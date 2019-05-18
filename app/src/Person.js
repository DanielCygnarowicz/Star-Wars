import React from 'react';
import './Person.css';



class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active

        })

    }

    render() {


        const { name, height, hair_color, skin_color, eye_color, mass, birth_year, gender } = this.props.person
        return (
            <section className="character" onClick={this.handleClick} >
                <p className="name">{name}</p>
                {this.state.active && <div className="wrapper" >
                    <div className="description">
                        <p>Height: <span>{height}</span> cm</p>
                        <p>Mass: <span>{mass}</span> kg</p>
                        <p>Birth Year: <span>{birth_year}</span></p>
                        <p>Gender: <span>{gender}</span></p>
                        <p>Hair: <span>{hair_color}</span></p>
                        <p>Skin: <span>{skin_color}</span></p>
                        <p>Eye: <span>{eye_color}</span></p>

                    </div>
                    <div className="photo"></div>
                </div>}
                <div className="red"></div>
            </section >
        )
    }
}

export default Person;