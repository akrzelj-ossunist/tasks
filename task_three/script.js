const place = document.querySelector("#location")
const search = document.querySelector("#search")

const getData = async(place) => {
    try {
        const resp = await fetch(`http://api.ipstack.com/${place}?access_key=54100fa0055f16022639fa1a007d4218`)
        const data = await resp.json()
        sessionStorage.setItem("country", data.country_name)
    } catch (error) {
        console.error(error)
    }
}

search.addEventListener("click", () => {
    getData(place.value)
    const country = sessionStorage.getItem("country")
    console.log(country)
    document.querySelector("#country").innerHTML = country
})




