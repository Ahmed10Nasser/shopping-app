import { Container } from "react-bootstrap";

const Filter = (props) => {

  const categories=[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];


  return (
    <Container className="my-3">

      <div className="input-group my-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Category</span>
        </div>
        <select className="form-control"
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



      <div className="input-group my-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Maximum Price</span>
        </div>
        <input type="number" className="form-control" placeholder="No Filter"
          name="mxPrice" ref={props.mxPriceRef} min="1"
          onChange={()=>props.filter()}
        />
      </div>


      <div className="input-group my-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Minimum Rating</span>
        </div>
        <input type="number" className="form-control" placeholder="No Filter"
          name="mnRating" ref={props.mnRatingRef} min="1" max="5"
          onChange={()=>props.filter()}
        />
      </div>
    </Container>
  );
}
 
export default Filter;