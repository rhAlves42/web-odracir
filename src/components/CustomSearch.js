import React from 'react'
import { Input } from 'antd'
import '../stylesheets/main.css'
const { Search } = Input;

const CustomSearch = (props) =>{
    return (
      <div className="search-container">
        <Search
          placeholder="Odracir"
          enterButton="Pesquisar"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
}

export default CustomSearch
