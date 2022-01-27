import React, { PropTypes, Component } from 'react';
import * as sources from '../constants/newsSources';


const Styles = {

    heading: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: '0px',
    },
    anchor: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5rem'

    },
    unorderedList: {
        listStyleType: 'none',
        textAlign: 'Left',
    },
    listItem: {
        padding: '10px 10px',
    },
    tagLine: {
        fontSize: '12px',
        color: 'white',
    },
    copyright: {
        color: 'rgb(177, 176, 176)',
        fontSize: '12px',
    },
    poweredBy:{
        color: 'rgb(177, 176, 176)',
        fontSize: '12px',
        textDecoration: 'none'
    }

}
// First, we extract images, onHandleSelectImage, and selectedImage from 
// props using ES6 destructuring assignment and then render.

class CategoryPage extends Component {
    render() {
        return (
            <div className="col-sm-2">
                <div className="sidebar">
                    <h3 style={Styles.heading}>News API</h3>
                    <ul style={Styles.unorderedList}>
                        <li style={Styles.listItem}><a href="#" style={Styles.anchor} onClick={() => this.props.onCategoryClick(sources.ALL)} > Top Stories</a></li>
                        <li style={Styles.listItem}><a href="#" style={Styles.anchor} onClick={() => this.props.onCategoryClick(sources.CNN)}>CNN</a></li>
                        <li style={Styles.listItem}><a href="#" style={Styles.anchor} onClick={() => this.props.onCategoryClick(sources.ESPN)}>ESPN</a></li>
                        <li style={Styles.listItem}><a href="#" style={Styles.anchor} onClick={() => this.props.onCategoryClick(sources.TECH_CRUNCH)}>TechCrunch</a></li>
                        <li style={Styles.listItem}><a href="#" style={Styles.anchor} onClick={() => this.props.onCategoryClick(sources.BBC_NEWS)}>BBC News</a></li>
                        <li style={Styles.listItem}><a href="#" style={Styles.anchor} onClick={() => this.props.onCategoryClick(sources.AL_JAZEERA)}>AL Jazzera</a></li>
                    </ul>
                    
                    
               
                       
                </div>
                </div>
            
        );
    }
}



// Define PropTypes
// CategoryPage.propTypes = {
//     onCategoryClick: PropTypes.func
// };

export default CategoryPage;


