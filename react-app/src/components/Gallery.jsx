import './css/Gallery.css'

const Gallery = () => {
    const url = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/African_penguin_side_profile.jpg/158px-African_penguin_side_profile.jpg",
        ""
    ];
    return (
        <section id="gallery">
            <i class="fa-solid fa-circle-chevron-left"></i>

            <section id="gallery-items">
                <article className="gallery-item">
                    {/* Image goes above text */}
                    <img className="gallery-image-single" src={ url[0] } />
                    <caption className="gallery-image-caption">A Penguin</caption>
                </article>
            </section>

            <i class="fa-solid fa-circle-chevron-right"></i>
        </section>
    )
};

export default Gallery;
