const Card = (image) => {
    const view = `
        <div class="Card">
            <div class="Card-image">
                <img src="${image}" alt="Image">
            </div>
            <div class="Card-subtitle">
                <div class="Card-subtitle--line"></div>
                <p>GET STARTED</p>
            </div>
            <div class="Card-title">
                <h2>What level of hiker are you?</h2>
            </div>
            <div class="Card-text">
                <p>Determining what level of hiker you
                    are can be an important tool when 
                    planning future hikes. This hiking 
                    level guide will help you plan hikes 
                    according to different hike ratings 
                    set by various websites like All Trails
                    and Modern Hiker. What type of 
                    hiker are you – novice, moderate, 
                    advanced moderate, expert, or 
                    expert backpacker?
                </p>
            </div>
            <div class="Card-text--bottom">
                <a href="#">read more </a>
                <a href="#"><span class="material-icons">
                east
                </span></a>
            </div>
        </div>
    `;
    return view;
};

export default Card;