import { useState } from 'react';
import './css/Gallery.css'

const Gallery = () => {
    function updateGallery(e) {
        if (e.target.id == "gallery-button-left" || e.target.parentElement.id == "gallery-button-left") {
            const newGalleryIndex = (galleryIndex - 1 >= 0)
                    ? galleryIndex - 1
                    : galleryImages.length - 1;

            setGalleryIndex(newGalleryIndex);
            console.log("Left")
        }else {
            setGalleryIndex((galleryIndex + 1) % galleryImages.length);
            console.log("Right");
        }
    }

    const [galleryIndex, setGalleryIndex] = useState(0);

    const galleryImages = [
        {
            name: "Pygmy Hippopotamus",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Hexaprotodon_liberiensis_Lagos_Zoo_Portugal_%283%29.jpg/330px-Hexaprotodon_liberiensis_Lagos_Zoo_Portugal_%283%29.jpg"
        },
        {
            name: "Red-crowned Crane",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ueno_zoo%2C_Tokyo%2C_Japan_%282684638318%29.jpg/330px-Ueno_zoo%2C_Tokyo%2C_Japan_%282684638318%29.jpg"
        },
        {
            name: "Reindeer",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg/330px-Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg"
        },
        {
            name: "Beaver",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/330px-American_Beaver.jpg"
        },
        {
            name: "Capybara",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg/330px-Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg"
        },
        {
            name: "Tasmanian Devil",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sarcophilus_harrisii_taranna.jpg/330px-Sarcophilus_harrisii_taranna.jpg"
        },
        {
            name: "Weddell Seal",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Weddell_seal.jpg/330px-Weddell_seal.jpg"
        },
        {
            name: "African Penguin",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/African_penguin_side_profile.jpg/158px-African_penguin_side_profile.jpg",
        }
    ];

    return (
        <section id="gallery">
            <button id="gallery-button-left" onClick={ updateGallery }>
                <i className="fa-solid fa-circle-chevron-left"></i>
            </button>

            <section id="gallery-items">
                <article className="gallery-item">
                    <img
                        className="gallery-image-single"
                        src={ galleryImages[galleryIndex].url }
                    />
                    <p className="gallery-image-caption">{ galleryImages[galleryIndex].name }</p>
                </article>
            </section>

            <button id="gallery-button-right" onClick={ updateGallery }>
                <i className="fa-solid fa-circle-chevron-right"></i>
            </button>
        </section>
    )
};

export default Gallery;
