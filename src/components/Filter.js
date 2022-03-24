import { Container } from "react-bootstrap";

const Filter = (props) => {

  const categories=[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];


  return (
    <Container>
      <div className="filter-category">
        Category Filter{" "}
        <select
          ref={props.categoryRef}
          onChange={()=>props.filter()}
        >
          <option value="">ALL</option>
          {
            categories.map((category,index)=>(
              <option value={category} key={index}>{category}</option>
            ))
          }
        </select>
      </div>
      <div className="filter-mxPrice">
        Max Price Filter{" "}
        <input type="number" name="mxPrice" ref={props.mxPriceRef} min="1"
          onChange={()=>props.filter()}
        />
      </div>
      <div className="filter-mnRating">
        Min Rating Filter{" "}
        <input type="number" name="mnRating" ref={props.mnRatingRef} min="1" max="5"
          onChange={()=>props.filter()}
        />
      </div>
    </Container>
  );
}
 
export default Filter;