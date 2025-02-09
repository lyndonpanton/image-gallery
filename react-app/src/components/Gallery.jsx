import { useState } from 'react';
import './css/Gallery.css'

const Gallery = (props) => {
    /* Data */
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

    /* Methods*/
    function updateGallery(e) {
        if (e.target.id == "gallery-button-left" || e.target.parentElement.id == "gallery-button-left") {
            const newGalleryIndex = (galleryIndex - 1 >= 0)
                    ? galleryIndex - 1
                    : galleryImages.length - 1;

            const newPreviousGalleryIndex = (galleryIndex - 2 >= 0)
                ? galleryIndex - 2
                : newGalleryIndex - 1;

            const newNextGalleryIndex = (galleryIndex >= 0)
                ? galleryIndex
                : newGalleryIndex + 1;

            /*
                9 0 1 (start, 0)
                8 9 0 (left, -1)
                7 8 9 (left, 8)
                6 7 8 (left, 7)
                5 6 7 (left, 6)
            */

            setPreviousGalleryIndex(newPreviousGalleryIndex);
            setGalleryIndex(newGalleryIndex);
            setNextGalleryIndex(newNextGalleryIndex);
        } else {
            const newGalleryIndex = (galleryIndex + 1) % galleryImages.length;
            previousGalleryIndex = 0;
            nextGalleryIndex = (newGalleryIndex + 1) % galleryImages.length;
            setGalleryIndex(newGalleryIndex);
        }
    }

    /* State variables */
    const [previousGalleryIndex, setPreviousGalleryIndex] = useState(galleryImages.length - 1);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [nextGalleryIndex, setNextGalleryIndex] = useState(1);

    return (
        <section id="gallery">
            {
                props.viewIndex != 2 &&
                <button id="gallery-button-left" onClick={ updateGallery }>
                    <i className="fa-solid fa-circle-chevron-left"></i>
                </button>
            }

            <section id="gallery-items">
                {
                    /*
                        Use JSX to determine how the page should be displayed
                        depending on the current mode (single, triple, full)
                    */
                    props.viewIndex == 0 &&
                    <article className="gallery-item">
                        <img
                            className={ "gallery-image-" + props.viewOptions[props.viewIndex] }
                            src={ galleryImages[galleryIndex].url }
                        />
                        <p className="gallery-image-caption">{ galleryImages[galleryIndex].name }</p>
                    </article>
                }
                {
                    props.viewIndex == 1 &&
                    <div>
                        <article className="gallery-item">
                            <img
                                className={ "gallery-image-" + props.viewOptions[props.viewIndex] }
                                src={ galleryImages[previousGalleryIndex].url }
                            />
                            <p className="gallery-image-caption">{ galleryImages[previousGalleryIndex].name }</p>
                        </article>
                        <article className="gallery-item">
                            <img
                                className={ "gallery-image-" + props.viewOptions[props.viewIndex] }
                                src={ galleryImages[galleryIndex].url }
                            />
                            <p className="gallery-image-caption">{ galleryImages[galleryIndex].name }</p>
                        </article>
                        <article className="gallery-item">
                            <img
                                className={ "gallery-image-" + props.viewOptions[props.viewIndex] }
                                src={ galleryImages[nextGalleryIndex].url }
                            />
                            <p className="gallery-image-caption">{ galleryImages[nextGalleryIndex].name }</p>
                        </article>
                    </div>
                }
                {
                    props.viewIndex == 2 &&
                    <div>
                        <article className="gallery-item">
                        <img
                            className={ "gallery-image-" + props.viewOptions[props.viewIndex] }
                            src={ galleryImages[galleryIndex].url }
                        />
                        <p className="gallery-image-caption">{ galleryImages[galleryIndex].name }</p>
                        </article>
                    </div>
                }
            </section>
            {
                props.viewIndex != 2 &&
                <button id="gallery-button-right" onClick={ updateGallery }>
                    <i className="fa-solid fa-circle-chevron-right"></i>
                </button>
            }
        </section>
    )
};

export default Gallery;
