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
        {_id: 2222, 
          name: "Mueller 255 Lumbar Support Back Brace", 
          description: 'Mueller 255 Lumbar Support Back Brace with Removable Pad, Black, Regular(28" - 50" waist)',
          img: "https://images-na.ssl-images-amazon.com/images/I/71Z-qo8JO-L._SX522_.jpg",
          categories: ["pain relief", "physical goods"]
        },
        {_id: 3333, 
          name: "Optimal Vitamin D3 Liquid", 
          description: "2,000 IU Per Drop | 900 Servings | High Potency | Physician Formulated | Seeking Health by Seeking Health",
          img: "https://images-na.ssl-images-amazon.com/images/I/7127dTbrCaL._SY679_.jpg",
          categories: ["vitimins"]
        },
        {_id: 4444, 
          name: "Pure L-Glutamine Powder", 
          description: "Glutamine is the most abundant amino acid in the body. It helps convert nitrogen into energy, making it an ideal supplement for bodybuilders, crossfit athletes, and strength and endurance training. It may also benefit gastrointestinal health and boost immunity.",
          img: "data:image/webp;base64,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",
          categories: ["supplement", "gut health"]
        },
        {_id: 5555, 
          name: "Memory Foam Mattress Topper", 
          description: "2 Inches of 100% Real Visco Elastic Foam | 3 lb density for High Support and High Response | Made in USA | CertiPUR-US Certified, Queen",
          img: "https://images-na.ssl-images-amazon.com/images/I/71TXIQf2bdL._SL1000_.jpg",
          categories: ["pain relief", "physical goods"]
        },
        {_id: 6666, 
          name: "Nutiva Organic Hemp Protein", 
          description: "16 oz. Sustainably Grown Canadian Hempseed, –Cold-Processed Seed from Non GMO (50% Protein). Organic Hemp Protein",
          img: "https://images-na.ssl-images-amazon.com/images/I/61BjDuohViL._SY679_.jpg",
          categories: ["pain relief", "physical goods"]
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


