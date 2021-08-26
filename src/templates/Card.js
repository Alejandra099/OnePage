const Card = () => {
    const view = `
        <div class="Card">
            <div class="Card-image">
                <img src="" alt="Image">
            </div>
            <div class="Card-subtitle">
                <div class="Card-subtitle--line"></div>
                <p>GET STARTED</p>
            </div>
            <div class="Card-title">
                <h1>What level of hiker are you?</h1>
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
            <div class="Card-subtitle">
                <p>read more</p>
                <div><a href="#">-></a></div>
            </div>
        </div>
    `;
    return view;
};

export default Card;