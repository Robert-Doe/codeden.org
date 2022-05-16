import React from 'react';
import './homepage'
import './homepage.css'
import './script'

function HomeScreen(props) {
    return (
        <React.Fragment>
            <section className={'top-layer'}>
                <section className="top">
                    <nav className="navbar navbar-expand-lg fixed-nav py-3" id="navbar">
                        <a className="navbar-brand" href="#"><img src="logo.png" alt="Logo" height="40px" width="auto"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto px-3">
                                <a className="nav-item nav-link active" href="#">Home <span
                                    className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="#">Courses</a>
                                <a className="nav-item nav-link" href="#">Pricing</a>
                                <a className="nav-item nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </nav>
                    <div className="vanishing-dialog">
                        <h1 className="display-3 font-weight-bold text-center">
        <span className="txt-rotate" data-period="50"
              data-rotate="[ &quot;Welcome to Code Den,&quot;, &quot;Train yourself to code&quot;
              , &quot;It's free&quot;, &quot;fast &quot;, &quot;flexible&quot; ]">
            <span className="wrap"></span></span>
                        </h1>
                    </div>
                    <br/>
                </section>
            </section>
            <section className="jumbotron">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate enim et nostrum rerum
                tempora
                tenetur,
                veritatis voluptas! A alias animi aut commodi consequatur corporis distinctio eius eligendi est ipsum
                iure
                laudantium
                magnam molestiae nemo nesciunt odit officiis placeat, possimus quas, quis quos ratione reiciendis rem
                repellendus
                rerum
                similique unde veniam vero voluptatibus voluptatum? A ab, ad aliquid amet aut dolore doloremque dolores
                eos eum,
                hic
                illum, ipsum iste laboriosam molestias nam natus nemo neque obcaecati optio praesentium quas qui quis
                sequi
                totam ut
                vero vitae voluptas! Eligendi ex, expedita illo libero magni minima nesciunt officia porro quaerat
                quibusdam
                repellat
                soluta sunt ut. A aliquid aperiam asperiores commodi deleniti, ducimus enim et id impedit ipsum nam
                necessitatibus
                neque
                nostrum, nulla officia omnis pariatur perferendis placeat quam quas, quibusdam quidem quisquam quo
                repellat
                rerum
                sequi
                tempore tenetur ut velit voluptates. Adipisci assumenda cum dicta est fugiat perferendis quae
                reprehenderit
                tempora
                ullam? Accusamus, adipisci architecto atque cumque, delectus dignissimos dolores eaque error esse eum
                explicabo
                fuga
                fugiat in ipsam iusto maxime minima modi nam odio odit reiciendis rem sit, sunt suscipit totam veritatis
                voluptates.
                Aliquam corporis, doloribus enim eos esse est eum illum nisi nostrum possimus quam, quasi similique sit
                velit
                voluptate?

            </section>
        </React.Fragment>
    );
}

export default HomeScreen;