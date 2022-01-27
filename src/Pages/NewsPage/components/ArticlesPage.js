// import React, { Component } from 'react';
import React from 'react'
import Masonry from 'react-masonry-component'; // Bootstarp grid layout library

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions =
 { background: '.my-bg-image-el' }
const Styles = {
    anchor: {
        border: '1px solid #080808',
        padding: '0px'
    }
}



function ArticlesPage(props) {

    const childElements = props.articles.map(function (element, index) {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
                            <a href={element.url} className="thumbnail article" style={Styles.anchor}>
                                <img className="article-image" alt="" src={element.urlToImage} />
                                <div className="caption" >
                                    <h4 className="article-header" >{element.title}</h4>
                                    <p className="source" >{element.source.name}</p>
                                </div>
                            </a>
                        </div>
                    );
                });

    return (
        <div>
            <Masonry
                className={'my-gallery-class col-sm-offset-2'} // default ''
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
            
        </div>
    )
}

export default ArticlesPage

// class ArticlesPage extends Component {
//     render() {
//         const childElements = this.props.articles.map(function (element, index) {
//             return (
//                 <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
//                     <a href={element.url} className="thumbnail article" style={Styles.anchor}>
//                         <img className="article-image" alt="" src={element.urlToImage} />
//                         <div className="caption" >
//                             <h4 className="article-header" >{element.title}</h4>
//                             <p className="source" >{element.source.name}</p>
//                         </div>
//                     </a>
//                 </div>
//             );
//         });

//         return (
//             <Masonry
//                 className={'my-gallery-class col-sm-offset-2'} // default ''
//                 options={masonryOptions} // default {}
//                 disableImagesLoaded={false} // default false
//                 updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//                 imagesLoadedOptions={imagesLoadedOptions} // default {}
//             >
//                 {childElements}
//             </Masonry>
//         );
//     }
// }


// export default ArticlesPage;


