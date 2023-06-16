import './Header.css'

function Header() {
    return (
        <div className='container'>
            
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <img src="https://onepieceex.net/wp-content/uploads/2020/06/opex_sabo.png.webp" width="10%" alt="" />
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Inicio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Episódio</a>
                            <a class="nav-link" href="#">Mangá</a>
                            <a class="nav-link" href="#">Contato</a>                            
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Header;