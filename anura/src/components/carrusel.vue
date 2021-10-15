<template>
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
            <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            ></button>
            <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
            ></button>
            <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="5"
            aria-label="Slide 6"
            ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="carousel-image img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Colostethus_fraterdanieli01.jpg" />
            <div class="overlay"></div>

            <div class="container">
                <div class="carousel-caption text-start">
                <h1>Colostethus fraterdanieli</h1>

            <router-link class="btn btn-lg btn-primary" :to="{name:'Avistamientos'}">
            Consultar Avistamiento
            </router-link>
                </div>
            </div>)
            </div>

    <div class="carousel-item">
            <img class="carousel-image img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Dendropsophus_columbianus.jpg" />
            <div class="overlay"></div>

            <div class="container">
                <div class="carousel-caption">
                <h1>Dendropsophus colombianus</h1>
                <router-link class="btn btn-lg btn-primary" :to="{name:'Avistamientos'}">
            Consultar Avistamiento
            </router-link>
                </div>
            </div>
            </div>

            <div class="carousel-item">
            <img class="carousel-image img-fluid" src="https://live.staticflickr.com/5012/30087021592_232144aae5_c.jpg"/>
            <div class="overlay"></div>

            <div class="container">
                <div class="carousel-caption text-end">
                <h1>Eleutherodactylus johnstonei</h1>
            <router-link class="btn btn-lg btn-primary" :to="{name:'Avistamientos'}">
            Consultar Avistamiento
            </router-link> </div>
            </div>
            </div>

    <div class="carousel-item">
            <img class="carousel-image img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Leptodactylus_colombiensis.jpg" />
            <div class="overlay"></div>

            <div class="container">
                <div class="carousel-caption">
                <h1>Leptodactylus colombiensis</h1>
                    <router-link class="btn btn-lg btn-primary" :to="{name:'Avistamientos'}">
            Consultar Avistamiento
            </router-link>
            </div>
            </div>
            </div>


            <div class="carousel-item">
            <img class="carousel-image img-fluid" src="https://static.inaturalist.org/photos/23591413/medium.jpg?1534958655" />
            <div class="overlay"></div>

            <div class="container">
                <div class="carousel-caption">
                <h1>Leptodactylus fragilis</h1>
                    <router-link class="btn btn-lg btn-primary" :to="{name:'Avistamientos'}">
            Consultar Avistamiento
            </router-link>
            </div>
            </div>
            </div>


            
            <div class="carousel-item">
            <img class="carousel-image img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Canetoadmale.jpg"/>
            <div class="overlay"></div>

            <div class="container">
                <div class="carousel-caption text-end">
                <h1>Rhinella marina</h1>
                    <router-link class="btn btn-lg btn-primary" :to="{name:'Avistamientos'}">
            Consultar Avistamiento
            </router-link>
                </div>
            </div>
            </div>
            
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>




</template>

<style scoped>
/* Carousel base class */
.carousel {
    margin-bottom: 4rem;
    }
    /* Since positioning the image, we need to help out the caption */
    .carousel-caption {
    bottom: 3rem;
    z-index: 10;
    }

    /* Declare heights because of positioning of img element */
    .carousel-item {
    height: 32rem;
    }

    .carousel-image {
    position: relative;
    display: block;
    top: -50%;
    width: 100%;
    }

    .overlay {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    }
</style>