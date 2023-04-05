# Namaste React daywise.

# Day 2:
# Parcel:
- Dev-Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in c++)
- Caching
- Image Optimization
- Minification
- Bundling
- Compressing
- Content Hashing
- Code - Splitting
- Differential Bundling  (To support older browser)
- Diagnostic
- Error Handling
- HTTPS (Give us a way to host on https)
- Tree Shaking Algoreithm
- Different Devlopment & Production Build
- Lazy Loading

# Day - 4:

Creating a food ordering app.

# Hard coded data
const RestaurantCard = (props) =>{
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" alt="card" src="https://b.zmtcdn.com/data/pictures/chains/4/3500024/debbb167a036d1a61c2945ab99a2b1a5_o2_featured_v2.jpg?output-format=webp"/>
      <h3>{props.name}</h3>
      <h4>{props.cusinine}</h4>
      <h4>3.6⭐</h4>
      <h4>29 min</h4>
    </div>
  )
}