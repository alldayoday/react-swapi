const baseUrl = "https://swapi.dev/api/starships/"

export function getAllShips() {
  return fetch(`${baseUrl}`)
  .then(res => res.json())
}

export function getDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}