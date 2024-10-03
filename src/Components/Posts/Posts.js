import React, { useContext, useEffect, useState } from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import { FirebaseContext } from "../../store/FirebaseContext";
import { PostContext } from "../../store/PostContext";
import { useHistory } from "react-router-dom";
import { LoadingContext } from "../../store/LoadingContext";
import Loading from "../Loading/Loading";

function Posts() {
  const loading = useContext(LoadingContext);
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        loading?.setLoading(true);
        const snapshot = await firebase.firestore().collection("products").get();
        const allPost = snapshot.docs.map((product) => ({
          ...product.data(),
          id: product.id,
        }));
        setProducts(allPost);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        loading?.setLoading(false);  
      }
    };

    fetchProducts();
  }, [firebase]);

  return loading?.loading ? (
    <Loading />
  ) : (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="card"
                onClick={() => {
                  setPostDetails(product);
                  history.push("/view");
                }}
                key={product.id}
              >
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
