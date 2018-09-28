import React from "react"

function Banner(props) {
    return (
        <div>

        </div>

    )
}

class Acceill extends React.Component {

    handleScroll() {
        console.log("scrolling")
    }
    render() {
        return <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="home-banner">
                            <div className="row" onScroll={this.handleScroll()}>
                                <div className="col-md-8" style={{ backgroundColor: '#c6e2ed', borderTop: '10px #cd3333 solid' }} >
                                    <div className="highlight-clean">
                                        <div className="container">
                                            <div className="intro">
                                                <h2 className="text-center">Suivi patient simplifié</h2>
                                                <p className="text-center">Gagnez du temps à chaque consultation grâce à la fiche patient dématerialisée pré remplie par le patient lui-même et à l’édition automatique de facture à la fin du RDV</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4"><img className="img-fluid" src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg" /></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="home-banner">
                <div className="row" onScroll={this.handleScroll()}>
                    <div className="col-md-4"><img className="img-fluid" src="https://image.freepik.com/free-vector/medical-background-design_1212-116.jpg" /></div>

                    <div className="col-md-8" style={{ backgroundColor: '#c6e2ed', borderTop: '10px #cd3333 solid' }} >
                        <div className="highlight-clean">
                            <div className="container">
                                <div className="intro">
                                    <h2 className="text-center">Prenez votre RDV en ligne</h2>
                                    <p className="text-center">La nouvelle solution de gestion de cabinet médical 100% personnalisée.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="home-banner">
                <div className="row" onScroll={this.handleScroll()}>
                    <div className="col-md-8" style={{ backgroundColor: '#c6e2ed', borderTop: '10px #cd3333 solid' }} >
                        <h4 className=""><strong>Consulter votre Medecin</strong>
                            Vous pouvez contacter votre Medecin en ligne et laisser une question en toute sécurité</h4>
                    </div>
                    <div className="col-md-4"><img className="img-fluid" src="https://image.freepik.com/free-vector/doctor-background-design_1270-62.jpg" /></div>


                </div>

            </div>
        </div>
    }
}
export default Acceill;