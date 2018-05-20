import React, { Component } from 'react';
import StorePreview from './StorePreview';
import './Store.css';

class StoreIndexContainer extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
	    items: [{_id: 1234, 
          name: "Nayoya Accupressure Mat", 
          description: "Nayoya Back and Neck Pain Relief - Acupressure Mat and Pillow Set - Relieves Stress, Back, Neck, and Sciatic Pain - Comes with a Vinyl Carry Bag for Storage and Travel - As Seen in USA Today",
          img: "https://images-na.ssl-images-amazon.com/images/I/81f-7abDKfL._SX522_.jpg",
          categories: ["pain relief", "alternative medicine"]
        },
        {_id: 1234, 
          name: "Nayoya Accupressure Mat", 
          description: "Nayoya Back and Neck Pain Relief - Acupressure Mat and Pillow Set - Relieves Stress, Back, Neck, and Sciatic Pain - Comes with a Vinyl Carry Bag for Storage and Travel - As Seen in USA Today",
          img: "https://images-na.ssl-images-amazon.com/images/I/81f-7abDKfL._SX522_.jpg",
          categories: ["pain relief", "alternative medicine"]
        },
        {_id: 1234, 
          name: "Nayoya Accupressure Mat", 
          description: "Nayoya Back and Neck Pain Relief - Acupressure Mat and Pillow Set - Relieves Stress, Back, Neck, and Sciatic Pain - Comes with a Vinyl Carry Bag for Storage and Travel - As Seen in USA Today",
          img: "https://images-na.ssl-images-amazon.com/images/I/81f-7abDKfL._SX522_.jpg",
          categories: ["pain relief", "alternative medicine"]
        },
        {_id: 1234, 
          name: "Nayoya Accupressure Mat", 
          description: "Nayoya Back and Neck Pain Relief - Acupressure Mat and Pillow Set - Relieves Stress, Back, Neck, and Sciatic Pain - Comes with a Vinyl Carry Bag for Storage and Travel - As Seen in USA Today",
          img: "https://images-na.ssl-images-amazon.com/images/I/81f-7abDKfL._SX522_.jpg",
          categories: ["pain relief", "alternative medicine"]
        },
        {_id: 1234, 
          name: "Nayoya Accupressure Mat", 
          description: "Nayoya Back and Neck Pain Relief - Acupressure Mat and Pillow Set - Relieves Stress, Back, Neck, and Sciatic Pain - Comes with a Vinyl Carry Bag for Storage and Travel - As Seen in USA Today",
          img: "https://images-na.ssl-images-amazon.com/images/I/81f-7abDKfL._SX522_.jpg",
          categories: ["pain relief", "alternative medicine"]
        }]
	  };
	}

  render() {
    let items;    
    if(this.state.items) {
      items = this.state.items.map( (item, index) => {
        return <StorePreview key={index} 
              id={item._id}
              name = {item.name}
              description={item.description} 
              img = {item.img}
              categories = {item.categories}/>
      })
    }
    return (
      <div>
        <h3 className="store-header">The following is a list of goods I personally stand behind as being significantly helpful in my fight against Fibromyalgia, Chronic Fatigue, Chronic Pain, IBS, and LBS.</h3>
        <div className="container">{items}</div>
      </div>  
    );
  }
}

export default StoreIndexContainer;


