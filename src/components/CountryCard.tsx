import React from "react";
import { Country } from "../types/country";

// 1. API에서 데이터를 받아온다.
// 2. isFavorite이라는 속성을 false로 설정
// 3. 클릭했을 때 isFavorite이 toggle됨
// 4. 그럼 toggle에 따라 렌더링 위치가 바뀌겠지?
// 5. 끝?

interface CountryCardPorps {
  //여기에도 handleSelectCountry가 props로 들어온다는 걸 명시해줘야함
  //근데 Toggle 만들어봤을 때 그냥 props로 넘기니까 되던데?
  handleSelectCountry: (country: Country) => void;
  country: Country;
}

//CountryList에서 주는 country를 props로 받아오고 있다
const CountryCard: React.FC<CountryCardPorps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <>
      <div
        onClick={() => {
          handleSelectCountry(country);
        }}
      >
        <img
          src={country.flags.svg}
          style={{ width: "40px", height: "40px" }}
        ></img>
        <h3>{country.name.common}</h3>
        <h4>{country.capital}</h4>
        {/* <button onClick={selectCountryToggle}>추가하기</button> */}
      </div>
    </>
  );
};

export default CountryCard;
