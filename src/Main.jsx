import React, { useState } from "react";
import "./Main.css";

const data = [
  {
    img: "https://images.pexels.com/photos/673020/pexels-photo-673020.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-673020.jpg&fm=jpg",
    title: "MountainMoon",
  },
  {
    img: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Beach",
  },
  {
    img: "https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg",
    title: "BeachTree",
  },
  {
    img: "https://static.toiimg.com/thumb/msid-101267463,width-748,height-499,resizemode=4,imgsize-169358/.jpg",
    title: "Mountainriver",
  },
  {
    img: "https://images.pexels.com/photos/2438/nature-forest-waves-trees.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "RiverTree",
  },
  {
    img: "https://i.pinimg.com/736x/36/e9/8b/36e98bd97ad59953da4c7474b95529bc.jpg",
    title: "Tree",
  },
  {
    img: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?cs=srgb&dl=pexels-johannes-plenio-1632790.jpg&fm=jpg",
    title: "Tree",
  },
  {
    img: "https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais",
    title: "Teaplantation",
  },
  {
    img: "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg",
    title: "Sky",
  },
  {
    img: "https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2022/10/5/Coffee-plantation-sq.jpg",
    title: "Coffeplantation",
  },
  {
    img: "https://cdn.britannica.com/29/219529-050-3B131FF5/Linden-Tree-Lime-Tree-Tilia.jpg",
    title: "Tree",
  },
  {
    img: "https://thumbs.dreamstime.com/b/landscape-sunset-view-morain-lake-mountain-range-alberta-canada-44613434.jpg",
    title: "Mountain",
  },
  {
    img: "https://media.cntraveler.com/photos/61eae2a9fe18edcbd885cb01/1:1/w_3031,h_3031,c_limit/Seychelles_GettyImages-1169388113.jpg",
    title: "Beach",
  },
  {
    img: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?cs=srgb&dl=pexels-ian-turnell-709552.jpg&fm=jpg",
    title: "River",
  },
  {
    img: "https://skift.com/wp-content/uploads/2023/04/zany-jadraque-ZCRtfop2hZY-unsplash.jpg",
    title: "BeachTree",
  },
  {
    img: "https://a-z-animals.com/media/2022/05/shutterstock_1288634614.jpg",
    title: "River",
  },
  {
    img: "  https://w0.peakpx.com/wallpaper/710/1000/HD-wallpaper-crystal-ball-landscape-nature-graphy.jpg",
    title: "WaterBallNature",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/238/125/HD-wallpaper-sun-rays-through-the-forest-trees-road-ultra-nature-forests-forest-trees-road-summer-sun-rays.jpg",
    title: "Sun",
  },
  {
    img: " https://i.pinimg.com/736x/34/21/8b/34218b5c215b3b3ff915da281f73e078.jpg",
    title: "Moon",
  },
  {
    img: " https://cdn.zmescience.com/wp-content/uploads/2019/06/fern-4179359_960_720.jpg",
    title: "Leaf",
  },
];

function Main() {
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value);
    });
    setFilteredData(filteredData);
  };
 
  const handleMountainChange = () =>{
     const mountainFilterData = data.filter((item) => {
      return item.title.includes("Mountain");
     });
     setFilteredData(mountainFilterData);
  };
const handleBeacheChange =() => {
   const beachSelectedData = data.filter((item) => {
    return item.title.includes("Beach");
   });
   setFilteredData(beachSelectedData);
};
const handleRiverChange =() => {
  const riverSelectedData = data.filter((item) => {
   return item.title.includes("River");
  });
  setFilteredData(riverSelectedData);
};

const handleTreeChange =() => {
  const treeSelectedData = data.filter((item) => {
   return item.title.includes("Tree");
  });
  setFilteredData(treeSelectedData);
};

  return (
    <div>
      <div className="headerText">
        <h2>Snap Shot</h2>
      </div>
      <div className="searchcontainer">
        <input
          onChange={handleChange}
          style={{ padding: 10, width: 250, margin: 10 }}
          placeholder="Search"
        />
      </div>
      <div style={{ paddingTop: 210 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label
            onClick={handleMountainChange}
            style={{
              border: "1px solid",
              marginRight: 15,
              marginLeft: 70,
              minWidth: 80,
              backgroundColor: "black",
              color: "white",
              cursor:"pointer"
            }}
          >
            Mountain
          </label>
          <label
            onClick={handleBeacheChange}
            style={{
              border: "1px solid",
              marginRight: 15,
              minWidth: 80,
              backgroundColor: "black",
              color: "white",
              cursor:"pointer",
            }}
          >
            Beaches
          </label>
          <label
          onClick={handleRiverChange}
            style={{
              border: "1px solid",
              marginRight: 15,
              minWidth: 80,
              backgroundColor: "black",
              color: "white",
              cursor:"pointer",
            }}
          >
            River
          </label>
          <label
           onClick={handleTreeChange}
            style={{
              border: "1px solid",
              marginRight: 15,
              minWidth: 80,
              backgroundColor: "black",
              color: "white",
              cursor:"pointer",
            }}
          >
            Trees
          </label>
        </div>
      </div>
      <div className="imageContainer">
        {filteredData.map((item) => (
          <div className="Image" key={item.img}>
            <img className="card-image" src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
