const allPlayers=()=>{
    alert("hi");
    const searchValue=document.getElementById("search-box").value;
    alert(searchValue);
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    console.log(url);
    fetch(url)
    .then(res=>console.log(res))
    // .then(data=>console.log(data))
}