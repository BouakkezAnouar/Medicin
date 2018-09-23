import React from "react";
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-md-4">
                <div className="form-group">
                  <i className="fa fa-search" />
                  <input
                    type="search"
                    name="search"
                    id="search-field"
                    className="search-field"
                  />
                </div>
              </div>
              <div className="col-md-3 col-md-4">
                <div className="form-group">
                  <i class="fas fa-map-marker-alt"></i>
                  <input
                    type="search"
                    name="search"
                    id="search-field"
                    className="search-field"
                  />
                </div>
              </div>
              <div className="col-md-3 col-md-4">
                <button
                  className="btn btn-primary"
                  type="button"
                  id="SearchBtn"
                >
                  Trouver un Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
