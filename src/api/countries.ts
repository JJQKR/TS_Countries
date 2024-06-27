import axios from "axios";
import { Country } from "../types/country";

//Promise를 리턴할 건데 그 안에 Country배열로 들어찬 response.data를 리턴하는 거다.
export async function getCountries(): Promise<Country[]> {
  //처음에 any<[]> 이렇게 되어 있었는데
  // 설명 : 'any<[]>타입이 any인 배열'은 뭘까
  //배열 안에 들어가 있는 애의 타입이 any라는 걸까
  const response = await axios.get("https://restcountries.com/v3.1/all");
  // console.log(response);
  return response.data;
}
