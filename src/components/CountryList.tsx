import React, { useState } from "react";
import { useEffect } from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

//delete를 먼저 하고
//그다음에 다시 렌더링?

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  // const [selectedCountry, setSelectedCountry] = React.useState<Country[]>([]);

  // const selectCountryToggle = (countries) => {
  //   countries.filter((country) => setSelectedCountry(country));
  //   alert("추가!");
  // };

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      //country가 selectedCountries 배열 안에 안 들어있으면 추가하기
      setSelectedCountries([...selectedCountries, country]);
    } else {
      //들어 있으면 뺴기
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  //위에서 React import 안 하고 React.useEffect로 써도 됩니다
  useEffect(() => {
    const fetchCountries = async () => {
      //근데 이거 같은 이름으로 다시 할당하는 이유는
      //가져올 때도 async를 한번 더 씌워야 해서야?
      //이름은 fetchCountries로 바뀌는 게 맞다
      try {
        //뷰로 Promise:<Country[]>가 넘어오면서 resolove가 돼서 Promise:<> 부분은 사라짐
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  // console.log("countries :", countries);
  return (
    <>
      <h1>Favorite Countries</h1>
      <div>
        {selectedCountries.map((country: Country) => {
          return (
            <>
              {/* country를 props로 카드에 전달중 */}
              <CountryCard
                key={country.name.common}
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            </>
          );
        })}
      </div>
      <div>
        <h1>Countries</h1>
        <div>
          {countries.map((country: Country) => {
            return (
              <>
                {/* country를 props로 카드에 전달중 */}
                <CountryCard
                  key={country.name.common}
                  country={country}
                  handleSelectCountry={handleSelectCountry}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountryList;
