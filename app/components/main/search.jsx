import React from 'react';
import {InstantSearch, Hits, Highlight, SearchBox} from 'react-instantsearch/dom';
import '../../scss/components/main/search.scss';

function Hit({hit}) {
  return (
    <div style={{marginTop: '10px'}}>
      <span className="hit-name">
        <Highlight attributeName="title" hit={hit} />
      </span>
    </div>
  );
};


class Search extends React.Component{
    render(){
        return(
            <div id='search-container'>
                <div id='search-container-vertical'>
                    <InstantSearch
                        appId=""
                        apiKey=""
                        indexName=""
                    >
                    <SearchBox />
                    <Hits hitComponent={Hit}/>
                    </InstantSearch>
                </div>
            </div>
        )
    }
}


export default Search;