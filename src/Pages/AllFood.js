import React, { useState } from "react";
import Helmet from "../Components/Helmet";
import products from "../Fake_data/products";
import ProductCard from "./Category/ProductCard";
import CommonSection from "../Components/CommonSection";
import ReactPaginate from "react-paginate";

function AllFood() {
    const [pageNumber, setPageNumber] = useState(0);
    const pagePerProduct = 8;
    const visitedPage = pageNumber * pagePerProduct;
    const displayProducts = products.slice(visitedPage, visitedPage + pagePerProduct);
    const countPage = Math.ceil(products.length / pagePerProduct);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const [searchProduct, setSearchProduct] = useState("");

    // Function to handle the sorting
    const handleSort = (event) => {
        const sortOption = event.target.value;

        switch (sortOption) {
            case "Default":
                // No sorting needed for the default case
                break;
            case "Alphabetically : A-Z":
                products.sort((a, b) => {
                    const nameA = a.name ? a.name.toLowerCase() : "";
                    const nameB = b.name ? b.name.toLowerCase() : "";
                    return nameA.localeCompare(nameB);
                });
                break;
            case "Alphabetically : Z-A":
                products.sort((a, b) => {
                    const nameA = a.name ? a.name.toLowerCase() : "";
                    const nameB = b.name ? b.name.toLowerCase() : "";
                    return nameB.localeCompare(nameA);
                });
                break;
            case "High Price":
                products.sort((a, b) => (b.price || 0) - (a.price || 0));
                break;
            case "Low Price":
                products.sort((a, b) => (a.price || 0) - (b.price || 0));
                break;
            default:
                break;
        }

        // Update the UI or perform any other necessary operations with the sorted products array
        renderProducts(products);
    };

    // Function to render the products (replace this with your actual rendering logic)
    const renderProducts = (products) => {
        console.log("Sorted products:", products);
        // Your code to render the products
    };
    return (
        <Helmet title="All Foods">
            <CommonSection title="All Foods" />
            <div className="container">
                <div className="pt-4 d-flex justify-content-between">
                    <div className="position-relative">
                        <input type="text" className="w-100 p-1 ps-2 pe-5 rounded" placeholder="I'm looking for ...." onChange={(e) => setSearchProduct(e.target.value)} />
                        <i className="ri-search-eye-line position-absolute"></i>
                    </div>
                    <div>
                        {/* <input list="sort" name="mySort" className=" p-1 px-2 rounded" />
                        <datalist id="sort">
                            <option value="Default" />
                            <option value="Alphabetically : A-Z" />
                            <option value="Alphabetically : Z-A" />
                            <option value="High Price" />
                            <option value="Low Price" />
                        </datalist> */}
                        <form action="/action_page.php">
                            {/* <label for="sort">Choose a car:</label> */}
                            <select name="sort" id="sort" className=" p-1 px-2 rounded" onChange={handleSort}>
                                <option value="Default">Default</option>
                                <option value="Alphabetically : A-Z">Alphabetically : A-Z</option>
                                <option value="Alphabetically : Z-A">Alphabetically : Z-A</option>
                                <option value="High Price">High Price</option>
                                <option value="Low Price">Low Price</option>
                            </select>
                            {/* <input type="submit" value="Submit"> */}
                        </form>
                    </div>
                </div>
                <div className="row container px-0 mx-auto my-3">
                    {(searchProduct === ""
                        ? displayProducts
                        : products.filter((item) => {
                              if (item.title.toLowerCase().includes(searchProduct.toLowerCase())) {
                                  return item;
                              } else {
                                  return null;
                              }
                          })
                    ).map((item) => {
                        return (
                            <div className="col-12 col-md-4 col-lg-3 my-3 h-100" key={item.id}>
                                <ProductCard ProductsItem={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="pb-4">
                <ReactPaginate pageCount={countPage} onPageChange={changePage} containerClassName="paginationBttns"></ReactPaginate>
            </div>
        </Helmet>
    );
}

export default AllFood;
