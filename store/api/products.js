import server from './http'
import axios from "axios";

export async function all(){
  await axios.get('http://laravel.local/sanctum/csrf-cookie');
  let { data } = await server.get('http://laravel.local/api/product');
  return data.products;
}
