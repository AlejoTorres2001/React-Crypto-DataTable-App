import React,{useEffect,useContext} from 'react';
import coinsContext from './context/Coins/CoinsContext';

const SearchBar = () => {
    const {setFilter,filter,filterCoins} = useContext(coinsContext)
    useEffect(() => {
        console.log(filter)
        filterCoins(filter)

    }, [filter]);
    return (
        <input
            type="text"
            placeholder="Search a Coin"
            className="form-control bg-dark text-light border-0 mt-4 text-center w-100 "
            autoFocus
            onChange={(e)=>setFilter(e.target.value)}
          />
    );
}

export default SearchBar;
