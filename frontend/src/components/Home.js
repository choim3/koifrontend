import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <div>

        <section id="home-heading" className="p-5">
          <div className="dark-overlay">
            <div className="row">
              <div className="col">
                <div className="container pt-5">
                  <h1>Home</h1>
                  <p className="d-none d-md-block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eaque magni sit dolores. Nisi, dolor nam modi perspiciatis
                    consequatur soluta.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <card>
          <div className='bold-white'> About Us </div>
          <p className='text-white'> Koibito of Lacey, WA is proud to offer the best in the Asian art of Sushi. Our family owned restaurant features some of the best Sushi in the Thurston County area. Our chefs are masters in the art of creating Sushi with exciting new twists that is sure to please any Sushi lover. Jerry Choi, new owner of Koibito of Lacey, is dedicated to creating a fun and inviting atmosphere where families and friends can enjoy the best quality in Japanese and Chinese cuisine. Jerry left a promising career in technology to peruse a passion that his family has shared for over 20 years. He is a pioneer of Japanese restaurants in Washington from his first restaurant that he started in Federal Way to Port Angeles where his business became a household name among Sushi lovers. You can only expect the best quality of Sushi at Koibito of Lacey. Jerry trained at a premier Sushi Academy in California but don't be surprised by his personal touch either. Jerry's sushi creations are a favorite among many. It's always a treat at Koibito of Lacey. Come and enjoy the experience! </p>
        </card>

      </div>
    );
  }
}

export default Home;
