'use client'
import styled from 'styled-components';

interface Props {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Search = ({ placeholder, value, onChange }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="search-container">
          <input
            className="input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
          />
          <svg viewBox="0 0 24 24" className="search__icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
              </path>
            </g>
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    border-radius: 1000px;
    padding: 10px;
    display: flex;
    place-content: center;
    z-index: 0;
    width: 100%;
    max-width: 500px;
    height: 70px;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    .container {
      padding: 5px;
      margin: 15px auto;
      height: 60px;
      max-width: 100%;
    }
  }

  .search-container {
    position: relative;
    width: 100%;
    border-radius: 50px;
    background: #FF7839;
    padding: 5px;
    display: flex;
    align-items: center;
  }

  .search-container::after, .search-container::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
  }

  .search-container::before {
    top: -1px;
    left: -1px;
    z-index: -1;
  }

  .search-container::after {
    bottom: -1px;
    right: -1px;
    box-shadow: 5px 5px 15px 5px #FF7839 ;
    z-index: -2;
  }

  @media (max-width: 768px) {
    .search-container::after {
      box-shadow: 3px 3px 10px 3px #FF7839;
    }
  }

  .input {
    padding: 12px 15px;
    width: 100%;
    border: none;
    color: #333;
    font-size: 18px;
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    .input {
      padding: 10px 12px;
      font-size: 16px;
    }
  }

  .input::placeholder {
    color: #999;
    opacity: 1;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .input::placeholder {
      font-size: 14px;
    }
  }

  .input:focus {
    outline: none;
  }

  .search__icon {
    width: 40px;
    min-width: 40px;
    aspect-ratio: 1;
    border-left: 2px solid white;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 50%;
    padding-left: 10px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    .search__icon {
      width: 35px;
      min-width: 35px;
      padding-left: 8px;
      margin-right: 6px;
    }
  }

  .search__icon:hover {
    border-left: 3px solid white;
  }

  .search__icon path {
    fill: white;
  }`;

export default Search;
