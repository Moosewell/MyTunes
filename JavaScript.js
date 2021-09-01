// Start
let addTitle = document.getElementById('add-title')
let addArtist = document.getElementById('add-artist')
let addAlbum = document.getElementById('add-album')
let addGenre = document.getElementById('add-genre')
let addYearOfRelease = document.getElementById('add-year-of-release')
let addButton = document.getElementById('add-button');
let musicListContainer = document.getElementById('music-list')
let errorMessage = document.createElement('p')
errorMessage.className = "error-message"
const musicArray = [];
checkMusicArray();
addButton.addEventListener("click", addMusic)

// Functions
function checkMusicArray()
{
    if(musicArray.length === 0)
    {
        errorMessage.innerText = "Woops, no music could be found in your library. May I suggest you add one above?"
        musicListContainer.appendChild(errorMessage)
    }
    else
    {
        errorMessage.remove()
    }
}

function addMusic() 
{
    if(isValidMusic())
    {
    let newMusicContainer = createNewMusicContainer()

    const children = newMusicContainer.children
    let childrenArray = Array.prototype.slice.call( children )
    SetTextOfChildWithClass("title", addTitle.value, childrenArray)
    SetTextOfChildWithClass("artist", addArtist.value, childrenArray)
    SetTextOfChildWithClass("album", addAlbum.value, childrenArray)
    SetTextOfChildWithClass("genre", addGenre.value, childrenArray)
    SetTextOfChildWithClass("year-of-release", addYearOfRelease.value, childrenArray)
    
    emptyInput()

    musicListContainer.appendChild(newMusicContainer);
    musicArray.push(newMusicContainer)
    checkMusicArray()
    }
}

function emptyInput()
{
    addTitle.value = ""
    addArtist.value = ""
    addAlbum.value = ""
    addGenre.value = ""
    addYearOfRelease.value = ""
}

function isValidMusic()
{
    if(addTitle.value.length > 0 && addArtist.value.length > 0)
    {
        addTitle.setAttribute("placeholder", "Africa")
        addArtist.setAttribute("placeholder", "Toto")
        addTitle.className = ""
        addArtist.className = ""
        return true
    }
    else
    {
        addTitle.setAttribute("placeholder", "-OBLIGATORY-")
        addArtist.setAttribute("placeholder", "-OBLIGATORY-")
        addTitle.className = "obligatory"
        addArtist.className = "obligatory"
        return false
    }
}

function SetTextOfChildWithClass(classstring, content, children)
{
    children.forEach(child => {
        if(child.className === classstring)
        {
            child.innerText = content
        }
    });
}

window.onclick = function(event) 
{
    if (!(event.target.matches('.options-button'))) 
    {
        var dropdowns = document.getElementsByClassName("drop-down");
        var i;
        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) 
            {
                openDropdown.classList.remove('show');
            }
        }
    }   
    if(event.target.matches('.options-button'))
    {
        let pressedDropDown = event.target.querySelector('.drop-down')
        var dropdowns = document.getElementsByClassName("drop-down");
        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show') && openDropdown != pressedDropDown) 
            {
                openDropdown.classList.remove('show');
            }
        }
    }
    
}

function openDropDown()
{
    document.getElementById("drop-down").classList.toggle("show");
}

function createNewMusicContainer()
{
    let newMusicContainer = document.createElement('div')
    newMusicContainer.className = "music-container"

    let logo = document.createElement('img')
    logo.setAttribute("src", "./Assets/MyTunes Logo Small.png")
    logo.setAttribute("alt", "Small MyTunes Logo")
    newMusicContainer.appendChild(logo)

    let title = document.createElement('label')
    title.className = "title"
    title.setAttribute("readonly", "readonly")
    newMusicContainer.appendChild(title)

    let artist = document.createElement('label')
    artist.className = "artist"
    artist.setAttribute("readonly", "readonly")
    newMusicContainer.appendChild(artist)

    let album = document.createElement('label')
    album.className = "album"
    album.setAttribute("readonly", "readonly")
    newMusicContainer.appendChild(album)

    let genre = document.createElement('label')
    genre.className = "genre"
    genre.setAttribute("readonly", "readonly")
    newMusicContainer.appendChild(genre)

    let yearOfRelease = document.createElement('label')
    yearOfRelease.className = "year-of-release"
    yearOfRelease.setAttribute("readonly", "readonly")
    newMusicContainer.appendChild(yearOfRelease)

    let optionsButton = document.createElement('button')
    optionsButton.className = "options-button"
    optionsButton.addEventListener("click", openDropDown =>
    {
        dropDown.classList.toggle("show");
    })

    let circleContainer = document.createElement('div')
    circleContainer.className = "circle-container"
    optionsButton.appendChild(circleContainer)

    let circle1 = document.createElement('div')
    circle1.className = "circle"
    circleContainer.appendChild(circle1)

    let circle2 = document.createElement('div')
    circle2.className = "circle"
    circleContainer.appendChild(circle2)

    let circle3 = document.createElement('div')
    circle3.className = "circle"
    circleContainer.appendChild(circle3)

    let dropDown = document.createElement('div')
    dropDown.className = "drop-down"
    dropDown.id = "drop-down"
    optionsButton.appendChild(dropDown)

    let editButton = document.createElement('button')
    editButton.className = "edit-button"
    editButton.innerText = "Edit"
    dropDown.appendChild(editButton)

    let deleteButton = document.createElement('button')
    deleteButton.className = "delete-button"
    deleteButton.innerText = "Delete"
    dropDown.appendChild(deleteButton)

    newMusicContainer.appendChild(optionsButton)
    return newMusicContainer
}